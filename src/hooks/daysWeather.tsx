import { DailyEntity } from "@/types/weather";

interface Props {
  data: DailyEntity;
}

export const useDaily = ({ data }: Props) => {
  const dt = data?.dt;

  // generate todays date
  const now = new Date();

  // converting todays date to unixTimestamp
  const nowdt = Math.round(+now.getTime() / 1000);

  // calculate days ahead
  const calcDay = Math.round(Math.abs(+nowdt - +dt) / (60 * 60 * 24));

  // converting UnixTime stamp to milliseconds and then actual date format
  const dateObject = (unix: number) => new Date(+unix * 1000);

  const justDate: (dateObj: Date) => string = (dateObj) =>
    dateObj.toLocaleString("en-US", { day: "numeric" });

  const dayOfWeek: (dateObj: Date) => string = (dateObj) =>
    dateObj.toLocaleString("en-US", { weekday: "short" });

  // temperature
  const dailyTemp = data.temp.max;

  // weather
  const main = data?.weather?.[0].main;

  return { dt, calcDay, dailyTemp, main, dateObject, justDate, dayOfWeek };
};
