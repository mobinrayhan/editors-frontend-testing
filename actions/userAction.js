"use server";

import { cookieConfig } from "helper/global";
import { generateSessionToken, isValidNumber } from "helper/utils";
import { cookies, headers } from "next/headers";
import {
  completeRegistrationReq,
  loginUserReq,
  requestOTP,
  resetPasswordReq,
  validateOTP,
} from "services/authService";

export const createUser = async (_, formData) => {
  const mobileNumber = formData.get("number");
  const isValid = isValidNumber(mobileNumber);

  try {
    if (isValid) {
      const data = await requestOTP(mobileNumber, "registration");
      return {
        ...data,
        success: true,
      };
    } else {
      return {
        message: "Number is not valid",
        success: false,
      };
    }
  } catch (error) {
    return {
      message: error.message || "Something went wrong!",
      success: false,
    };
  }
};

export const verifyAccount = async (_, formData) => {
  const otpCode = +formData.get("otpCode");
  const otpToken = formData.get("otpToken");
  const mode = formData.get("mode");

  const activeDevice = (await headers()).get("user-agent") || "unknown";

  try {
    const data = await validateOTP({ otpCode, otpToken, activeDevice }, mode);
    return {
      ...data,
      success: true,
    };
  } catch (error) {
    return {
      message: error.message,
      success: false,
    };
  }
};

export const completeRegistration = async (_, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const mobileNumber = formData.get("mobileNumber");
  const otpToken = formData.get("otpToken");

  const headersList = await headers();
  const cookie = await cookies();
  const activeDevice = headersList?.get("user-agent") || "";

  const userSessionToken = generateSessionToken();

  const bodyData = {
    name,
    email,
    password,
    mobileNumber,
    activeDevice,
    role: "user",
    userSessionToken,
    otpToken,
  };

  try {
    const data = await completeRegistrationReq(bodyData);

    if (!data?.isValid && !data?.userId) {
      throw new Error(data?.message || "Something Went Wrong!");
    }

    cookie.set("userSessionToken", userSessionToken, cookieConfig);

    return {
      message: "Complete Registration Successfully!",
      success: true,
      ...data,
    };
  } catch (error) {
    return {
      message: error.message || "Something went wrong!",
      success: false,
    };
  }
};

export const loginUser = async (_, formData) => {
  const mobileNumber = formData.get("mobileNumber");
  const password = formData.get("password");
  const cookie = await cookies();
  const headersList = await headers();
  const activeDevice = headersList?.get("user-agent") || "";

  const isValid = isValidNumber(mobileNumber);
  if (!isValid) {
    return {
      message: "Number is not valid",
      success: false,
    };
  }

  try {
    const data = await loginUserReq({ mobileNumber, password, activeDevice });
    cookie.set("userSessionToken", data?.user?.sessionToken, cookieConfig);

    return {
      ...data,
      message: "Successfully Logged In",
      success: true,
    };
  } catch (error) {
    return {
      message: error?.message || "Something Went Wrong!",
      success: false,
    };
  }
};

export const forgetPassword = async (_, formData) => {
  const mobileNumber = formData.get("mobileNumber");

  const isValid = isValidNumber(mobileNumber);
  if (!isValid) {
    return {
      message: "Number is not valid",
      success: false,
    };
  }

  try {
    const data = await requestOTP(mobileNumber, "password-reset");

    return {
      ...data,
      message: "Request OTP successfully!",
      success: true,
    };
  } catch (error) {
    return {
      message: error?.message || "Something Went Wrong!",
      success: false,
    };
  }
};
export const resetPassword = async (_, formData) => {
  const mobileNumber = formData.get("mobileNumber");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  const isValid = isValidNumber(mobileNumber);
  if (!isValid) {
    return {
      message: "Number is not valid",
      success: false,
    };
  }

  if (password !== confirmPassword) {
    return {
      message: "Confirm Password did not match!",
      success: false,
    };
  }

  try {
    const data = await resetPasswordReq({ mobileNumber, password });

    if (!data?.isValid) {
      return {
        ...data,
        success: false,
      };
    }

    return {
      ...data,
      message: "Password Retested Successfully !",
      success: true,
    };
  } catch (error) {
    return {
      message: error?.message || "Something Went Wrong!",
      success: false,
    };
  }
};
