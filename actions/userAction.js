"use server";

import { requestOTP, validateOTP } from "services/authService";

const isValidNumber = (phone) => {
  const regex = /^01\d{9}$/;
  return regex.test(phone);
};

export const createUser = async (_, formData) => {
  const phoneNumber = formData.get("number");
  const isValid = isValidNumber(phoneNumber);

  try {
    if (isValid) {
      const data = await requestOTP(phoneNumber);
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
      message: "Something went wrong!",
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
