"use server";

import { cookieConfig } from "helper/global";
import { generateSessionToken, isValidNumber } from "helper/utils";
import { cookies, headers } from "next/headers";
import {
  completeRegistrationReq,
  loginUserReq,
  requestOTP,
  validateOTP,
} from "services/authService";
import { UAParser } from "ua-parser-js";

export const createUser = async (_, formData) => {
  const mobileNumber = formData.get("number");
  const isValid = isValidNumber(mobileNumber);

  try {
    if (isValid) {
      const data = await requestOTP(mobileNumber);
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

  try {
    const data = await validateOTP({ otpCode, otpToken });
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
  const userAgent = headersList?.get("user-agent") || "";

  const parser = new UAParser(userAgent);
  const device = parser.getDevice();

  const activeDevice = `${device.vendor || "Unknown"} ${
    device.model || ""
  }`.trim();

  const sessionToken = generateSessionToken();

  const bodyData = {
    name,
    email,
    password,
    mobileNumber,
    activeDevice,
    role: "user",
    sessionToken,
    otpToken,
  };

  try {
    const data = await completeRegistrationReq(bodyData);

    if (!data?.isValid && !data?.userId) {
      throw new Error(data?.message || "Something Went Wrong!");
    }

    cookie.set("sessionToken", sessionToken, cookieConfig);

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

  const isValid = isValidNumber(mobileNumber);
  if (!isValid) {
    return {
      message: "Number is not valid",
      success: false,
    };
  }

  try {
    const data = await loginUserReq({ mobileNumber, password });
    cookie.set("sessionToken", data?.user?.sessionToken, cookieConfig);

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
