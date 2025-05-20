"use server";

const isValidNumber = (phone) => {
  const regex = /^01\d{9}$/;
  return regex.test(phone);
};

export const createUser = async (_, formData) => {
  const phoneNumber = formData.get("number");
  const isValid = isValidNumber(phoneNumber);

  try {
  } catch (error) {}
};
