function secondsToHoursMinutes(seconds) {
  const totalMinutes = Math.floor(Number(seconds) / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}:${minutes.toString().padStart(2, "0")} ${
    hours > 0 ? "H" : "M"
  }`;
}
export default secondsToHoursMinutes;
