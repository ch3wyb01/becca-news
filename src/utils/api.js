import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://becca-news.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (topic) => {
  let path = "/articles";
  if (topic) {
    path += `?topic=${topic}`;
  }
  return newsApi.get(path).then((res) => {
    return res.data.articles;
  });
};

export const getArticleById = (id) => {
  return newsApi.get(`/articles/${id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticleId = (id) => {
  return newsApi.get(`/articles/${id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const getUsers = () => {
  return newsApi.get("/users").then((res) => {
    return res.data.users;
  });
};

export const patchArticleVotes = (id) => {
  return newsApi.patch(`/articles/${id}`, { inc_votes: 1 }).then((res) => {
    return res.data.article.votes;
  });
};

export const postComment = (article_id, body) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, { username: "jessjelly", body })
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteComment = (id) => {
  return newsApi.delete(`/comments/${id}`);
};
