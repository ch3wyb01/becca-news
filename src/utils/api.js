import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-server-g0kw.onrender.com/api",
});

export const getTopics = async () => {
  const res = await newsApi.get("/topics");
  return res.data.topics;
};

export const getArticles = async (topic, sort_by, p) => {
  const { data } = await newsApi.get("/articles", {
    params: { topic, sort_by, p },
  });
  return data;
};

export const getArticleById = async (id) => {
  const res = await newsApi.get(`/articles/${id}`);
  return res.data.article;
};

export const getCommentsByArticleId = async (id) => {
  const res = await newsApi.get(`/articles/${id}/comments`);
  return res.data.comments;
};

export const getUsers = async () => {
  const res = await newsApi.get("/users");
  return res.data.users;
};

export const patchCommentVotes = async (id, inc_votes) => {
  const res = await newsApi.patch(`/comments/${id}`, { inc_votes });
  return res.data.comment.votes;
};

export const postComment = async (article_id, username, body) => {
  const res = await newsApi.post(`/articles/${article_id}/comments`, {
    username,
    body,
  });
  return res.data.comment;
};

export const deleteComment = (id) => {
  return newsApi.delete(`/comments/${id}`);
};

// User
export const getUser = async (username) => {
  const res = await newsApi.get(`/users/${username}`);
  return res.data.user;
};

export const getUserArticles = async (username) => {
  const res = await newsApi.get(`/articles?author=${username}`);
  return res.data.articles;
};

export const getUserVotedArticles = async (username) => {
  const res = await newsApi.get(`/users/${username}/voted_articles`);
  return res.data.articles;
};

export const postArticleVote = async (username, article_id) => {
  const res = await newsApi.post(`/users/${username}/voted_articles`, {
    article_id,
  });
  return res.data.article;
};

export const deleteArticleVote = async (username, article_id) => {
  return newsApi.delete(`/users/${username}/voted_articles`, {
    data: { article_id },
  });
};
