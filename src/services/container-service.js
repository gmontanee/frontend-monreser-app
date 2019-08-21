import axios from 'axios';

class ContainerService {
  constructor() {
    this.clientRoutes = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true,
    })
  }

  addContainer(features) {
    return this.clientRoutes.post('/clientRoutes/newContainer', features )
      .then(({ data }) => data);
  }

  // login(user) {
  //   const { username, password } = user;
  //   return this.auth.post('/auth/login', {username, password})
  //     .then(({ data }) => data);
  // }

  // logout() {
  //   return this.auth.post('/auth/logout')
  //     .then(response => response.data)
  // }

  // me() {
  //   return this.auth.get('/auth/me')
  //   .then(response => response.data)
  // }
}

const containerService = new ContainerService();

export default containerService;