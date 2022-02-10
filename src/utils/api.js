import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://becca-news.herokuapp.com/api",
});

export const getTopics = async () => {
  const res = await newsApi.get("/topics");
  return res.data.topics;
};

export const getArticles = async (topic, sort_by) => {
  let path = "/articles";

  if (topic && sort_by) {
    path += `?topic=${topic}&sort_by=${sort_by}`
  } else if (topic) {
    path += `?topic=${topic}`;
  } else if (sort_by) {
    path += `?sort_by=${sort_by}`
  }
  
  const res = await newsApi.get(path);
  return res.data.articles;
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

export const patchArticleVotes = async (id) => {
  const res = await newsApi.patch(`/articles/${id}`, { inc_votes: 1 });
  return res.data.article.votes;
};

export const postComment = async (article_id, username, body) => {
  const res = await newsApi
    .post(`/articles/${article_id}/comments`, { username, body });
  return res.data.comment;
};

export const deleteComment = (id) => {
  return newsApi.delete(`/comments/${id}`);
};
