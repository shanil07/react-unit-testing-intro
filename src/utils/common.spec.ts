import dayjs from "dayjs";
import { formatToDisplayDate } from "./common";

describe("utils/common", () => {
  it("should return in correct format", () => {
    const output = formatToDisplayDate(dayjs("2015-03-25"));
    expect(output).toBe("Wednesday, 25th Mar 2015");
  });
});
