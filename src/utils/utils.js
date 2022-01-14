import dayjs from "dayjs";

export const formatDate = (ISOstring) => {
  return dayjs(ISOstring).format("DD MMM YYYY");
};
