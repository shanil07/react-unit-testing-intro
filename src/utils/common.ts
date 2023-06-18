import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

const formatToDisplayDate = (value: Dayjs) => {
  return value.format("dddd, Do MMM YYYY");
};

export { formatToDisplayDate };
