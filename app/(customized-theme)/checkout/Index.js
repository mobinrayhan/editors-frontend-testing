"use client";
import { apiClient } from "helper/apiClient";
import getLocalCartData from "helper/getLocalCartData";
import useMounted from "hooks/useMounted";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import PageHeading from "shared/page-headings/PageHeading";
import LeftSideForm from "./components/LeftSideForm";
import RightSide from "./components/RightSide";

const Checkout = () => {
  const hasMounted = useMounted();
  const router = useRouter();
  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm();

  const cartData = hasMounted ? getLocalCartData() : [];
  const totalPrice = cartData?.reduce((acc, item) => {
    return acc + Number(item?.price);
  }, 0);

  const courseData = cartData;
  console.log("====================================");
  console.log(courseData);
  console.log("====================================");

  const onSubmit = async (data) => {
    if (isValid) {
      const session = await apiClient(`/courses/ssl-create-session`, "POST", {
        amount: totalPrice,
        order_id: "hi12",
        name: data?.fullName,
        email: data?.email,
        ship_add1: "1234 Elm Street",
        ship_city: "New York",
        ship_state: "NY",
        phone: data?.phone,
      });
      console.log(data);
      router.push(session.GatewayPageURL);
    }
  };

  return (
    <>
      <PageHeading pagetitle="Checkout" />

      <section className="container my-5">
        <form onSubmit={handleSubmit(onSubmit)} className="row">
          <LeftSideForm register={register} errors={errors} />
          <RightSide handlePayClick={onSubmit} />
        </form>
      </section>
    </>
  );
};

export default Checkout;
