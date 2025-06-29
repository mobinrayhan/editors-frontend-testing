"use client";
import { apiClient } from "helper/apiClient";
import { getUserFromClientCookie } from "helper/auth";
import getLocalCartData from "helper/getLocalCartData";
import useMounted from "hooks/useMounted";
import { notFound, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PageHeading from "shared/page-headings/PageHeading";
import LeftSideForm from "./components/LeftSideForm";
import RightSide from "./components/RightSide";

const Checkout = () => {
  const hasMounted = useMounted();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    getUserFromClientCookie().then(({ user }) => {
      if (user) {
        reset({
          fullName: user.name || "",
          email: user.email || "",
          phone: user.mobileNumber || "",
        });
      }
    });
  }, [reset]);

  const cartData = hasMounted ? getLocalCartData() : [];
  const totalPrice = cartData?.reduce(
    (acc, item) => acc + Number(item?.price),
    0
  );
  const courseData = cartData;

  if (hasMounted && !courseData.length) {
    notFound();
  }

  const onSubmit = async (data) => {
    try {
      const session = await apiClient(`/payment/ssl-create-session`, "POST", {
        amount: totalPrice,
        order_id: crypto.randomUUID(),
        name: data?.fullName,
        email: data?.email,
        ship_add1: "1234 Elm Street",
        ship_city: "New York",
        ship_state: "NY",
        phone: data?.phone,
        enrolled_at: new Date(),
        paymentMethod: data?.paymentMethod || "ssl_commerz",
        courseInfo: courseData?.map((course) => ({
          id: course?.id,
          amount: Math.round(course?.price),
        })),
      });
      router.push(session.GatewayPageURL);
    } catch (error) {
      toast.error(error?.message || "Something Went Wrong!");
    }
  };

  return (
    <>
      {hasMounted ? (
        <>
          <PageHeading pagetitle="Checkout" />
          <section className="container my-5">
            <form onSubmit={handleSubmit(onSubmit)} className="row">
              <LeftSideForm register={register} errors={errors} />
              <RightSide />
            </form>
          </section>{" "}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Checkout;
