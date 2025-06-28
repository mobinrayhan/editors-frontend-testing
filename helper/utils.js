import crypto from "crypto";
import Cookies from "js-cookie";
/**
 * Functions in utils
 */

/**
 * Add commas to a number
 */
export const numberWithCommas = (x, decimal = 0) => {
  return x.toLocaleString("en-US", { minimumFractionDigits: decimal });
};

/**
 * Get the file extension from given file name
 */
export const getFileExtension = (filename) => {
  const extension = filename.split(".").pop();
  return extension;
};

/**
 * Get the random number between min and max value
 */
export const getRandomNo = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Get the color name/value based on given status
 */
export const getStatusColor = (itemstatus) => {
  let color = "";
  switch (itemstatus) {
    case "In Progress":
      color = "info";
      break;
    case "Pending":
      color = "warning";
      break;
    case "Finished":
      color = "success";
      break;
    case "Cancel":
      color = "danger";
      break;
    default:
      color = "primary";
  }
  return color;
};

/**
 * Get the color name/value based on given status
 */
export const getCategoryColor = (category) => {
  let color = "";
  switch (category) {
    case "Saas Services":
    case "Entertainment":
    case "Extra":
      color = "info";
      break;
    case "Design":
      color = "warning";
      break;
    case "Marketing":
      color = "success";
      break;
    case "Development":
      color = "danger";
      break;
    case "SEO":
      color = "primary";
      break;
    default:
      color = "primary";
  }
  return color;
};

//get chunk from array
export const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr];
  if (chunkSize <= 0) return cache;
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};

// function to get time value in hh:mm AM | PM format
export const getTimeValue = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

// function to get date value in Month Name DD, YYYY format
export const getDateValue = (date) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const yyyy = date.getFullYear();
  let mm = date.getMonth();
  let dd = date.getDate();
  var today = month[mm] + " " + dd + ", " + yyyy;
  return today;
};

// function to generate slug or ID with slug format
export const getSlug = (text) => {
  text = text.toLowerCase();
  text = text.replace(/ /g, "-").replace(/[^\w-]+/g, "");
  return text;
};

// function to apply currency symbol with two digits decimal values
export const convertToCurrency = (value) =>
  "$" + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

// convert string to title case
export const toTitleCase = (str) => {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
};

export function generateSessionToken(length = 64) {
  const safeLength = Math.min(Math.max(length, 10), 255);
  return crypto
    .randomBytes(Math.ceil(safeLength / 2))
    .toString("hex")
    .slice(0, safeLength);
}

export function setClientCookie(name, value) {
  const cookieConfig = {
    secure: true,
    sameSite: "lax",
    path: "/",
    expires: 604800 / 86400,
    domain: ".editors.academy",
  };

  Cookies.set(name, value, cookieConfig);
}

export const sessionFetcher = async (url, token) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "x-api-key": process.env.API_KEY,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  return res;
};

export function isValidHashToken(token) {
  if (!token) return false;

  if (token.length !== 64) return false;

  const hexRegex = /^[a-f0-9]{64}$/i;
  if (!hexRegex.test(token)) return false;

  return true;
}

export const isValidNumber = (phone) => {
  const regex = /^01\d{9}$/;
  return regex.test(phone);
};

const utils = [
  numberWithCommas,
  getFileExtension,
  getRandomNo,
  getStatusColor,
  chunk,
  getTimeValue,
  getDateValue,
  getSlug,
  convertToCurrency,
  toTitleCase,
  generateSessionToken,
  setClientCookie,
  isValidNumber,
];

export default utils;
