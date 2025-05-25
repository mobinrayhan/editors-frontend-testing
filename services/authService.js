import { apiClient } from "helper/apiClient";

export const requestOTP = async (mobileNumber, mode) => {
  const data = await apiClient(`/auth/request-otp?mode=${mode}`, "POST", {
    mobileNumber,
    createdAt: new Date(),
  });
  return data;
};

export const validateOTP = async (bodyData, mode) => {
  try {
    const data = await apiClient(`/auth/verify-otp?mode=${mode}`, "POST", {
      ...bodyData,
      createAt: new Date(),
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const completeRegistrationReq = async (bodyData) => {
  try {
    const data = await apiClient(
      "/auth/complete-registration?mode=registration",
      "POST",
      bodyData
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUserReq = async (bodyData) => {
  try {
    const data = await apiClient("/auth/login", "POST", bodyData);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const resetPasswordReq = async (bodyData) => {
  try {
    const data = await apiClient("/auth/reset-password", "POST", bodyData);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
