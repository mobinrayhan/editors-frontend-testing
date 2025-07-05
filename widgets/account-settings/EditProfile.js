"use client";
import { getUserFromClientCookie } from "helper/auth";
import { Avatar } from "layouts/QuickMenu";
import { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Form, Image, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const [imagePreview, setImagePreview] = useState();
  const [loading, setLoading] = useState(false);
  const imageRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
      profileImage: null,
    },
  });

  useEffect(() => {
    getUserFromClientCookie().then(({ user }) => {
      setUser(user);
      if (user) {
        reset({
          name: user?.name || "",
          email: user?.email || "",
          mobileNumber: user?.mobileNumber || "",
          password: "",
          confirmPassword: "",
          profileImage: null,
        });
        setImagePreview(user?.profileImage || "");
      }
    });
  }, [reset]);

  const onSubmit = async (data) => {
    setSuccessMsg(null);
    setErrorMsg(null);

    if (data.password && data.password !== data.confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("mobileNumber", data.mobileNumber);
      if (data.confirmPassword)
        formData.append("confirmPassword", data.confirmPassword);
      if (data.password) formData.append("password", data.password);
      if (data.profileImage) formData.append("profileImage", data.profileImage);

      const res = await fetch("/api/update-profile", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Update failed");

      toast.success("Profile updated successfully.");
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("profileImage", file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <Card className="border-0">
      <Card.Header>
        <div className="mb-3 mb-lg-0">
          <h3 className="mb-0">Profile Details</h3>
          <p className="mb-0">
            You have full control to manage your own account setting.
          </p>
        </div>
      </Card.Header>
      <Card.Body>
        <div className="d-lg-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center">
            {!imagePreview ? (
              <div style={{ width: "80px", height: "80px" }}>
                <Avatar
                  name={user?.name}
                  width={73}
                  height={73}
                  isActiveAvatar={false}
                />
              </div>
            ) : (
              <Image
                src={imagePreview}
                className="avatar-xl rounded-circle"
                alt="User Avatar"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
            )}
            <div className="ms-3">
              <h4 className="mb-0">{user?.name}</h4>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={imageRef}
                disabled={loading}
              />
              <small className="text-muted">
                PNG or JPG, no bigger than 800px wide and tall.
              </small>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            {/* Name */}
            <Col md={6} sm={12} className="mb-3">
              <Form.Group controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  disabled={loading}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name.message}</small>
                )}
              </Form.Group>
            </Col>

            {/* Email */}
            <Col md={6} sm={12} className="mb-3">
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  disabled={loading}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </Form.Group>
            </Col>

            {/* Phone Number */}
            <Col md={6} sm={12} className="mb-3">
              <Form.Group controlId="formPhone">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  disabled={loading}
                  {...register("mobileNumber", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^(?:\+?88)?01[3-9]\d{8}$/,
                      message: "বাংলাদেশি মোবাইল নাম্বার সঠিক নয়",
                    },
                  })}
                />
                {errors.mobileNumber && (
                  <small className="text-danger">
                    {errors.mobileNumber.message}
                  </small>
                )}
              </Form.Group>
            </Col>

            {/* Password */}
            <Col md={6} sm={12} className="mb-3">
              <Form.Group controlId="formPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  autoComplete="new-password"
                  disabled={loading}
                  {...register("password", {
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <small className="text-danger">
                    {errors.password.message}
                  </small>
                )}
              </Form.Group>
            </Col>

            {/* Confirm Password */}
            <Col md={6} sm={12} className="mb-3">
              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  autoComplete="new-password"
                  disabled={loading}
                  {...register("confirmPassword")}
                />
                {password &&
                  confirmPassword &&
                  password !== confirmPassword && (
                    <small className="text-danger">
                      Passwords do not match
                    </small>
                  )}
              </Form.Group>
            </Col>

            {/* Submit */}
            <Col sm={12}>
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    Updating...
                  </>
                ) : (
                  "Update Profile"
                )}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EditProfile;
