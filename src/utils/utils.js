import dayjs from "dayjs";
import _ from "lodash";

export const formatDate = (ISOstring) => {
  return dayjs(ISOstring).format("DD MMM YYYY");
};