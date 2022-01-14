import dayjs from "dayjs";
import _ from "lodash";

export const formatDate = (ISOstring) => {
  return dayjs(ISOstring).format("DD MMM YYYY");
};

 export const orderComments = (comments) => {
  const commentsCopy = [...comments];
  const orderedComments = _.sortBy(
    commentsCopy,
    (comment) => comment.created_at
  ).reverse();
  return orderedComments;
};
