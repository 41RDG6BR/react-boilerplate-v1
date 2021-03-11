import axios from '../axios';

const getAll = async () => {
  const data = await axios.get('users');
  return data;
};

const postCustomer = async (firstName, lastName, email, phone, state, country) => {
  const data = await axios.post('users', {
    firstName,
    lastName,
    email,
    phone,
    state,
    country
  });
  return data;
};

const create = (data) => {
  return axios.post('/users', data);
};

const update = (id, data) => {
  return axios.put(`/users/${id}`, data);
};

const remove = (id) => {
  return axios.delete(`/users/${id}`);
};

const removeAll = () => {
  return axios.delete('/users');
};

const findByTitle = (title) => {
  return axios.get(`/users?title=${title}`);
};

export default {
  getAll,
  postCustomer,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
