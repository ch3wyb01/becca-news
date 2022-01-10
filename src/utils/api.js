import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://becca-news.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};
