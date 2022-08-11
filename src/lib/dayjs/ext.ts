import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const dayjsExt = dayjs;

export const dateFormatted = (date: string, format: string) => {
  return dayjsExt.utc(date).tz("Asia/Tokyo").format(format);
};
