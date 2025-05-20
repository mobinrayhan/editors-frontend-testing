import { apiClient } from "helper/apiClient";

export const requestOTP = async (mobileNumber) => {
  const data = await apiClient("/auth/request-otp?mode=registration", "POST", {
    mobileNumber,
    createdAt: new Date(),
  });
  return data;
};

export const validateOTP = async ({ otpToken, otpCode }) => {
  try {
    const data = await apiClient("/auth/verify-otp?mode=registration", "POST", {
      otpToken,
      otpCode,
      createAt: new Date(),
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
