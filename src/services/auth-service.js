import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true,
    })
  }

  signup(user) {
    const {email, password, username, direction, country, region, town, postalCode} = user;
    return this.auth.post('/auth/signup', {email, password, username, direction, country, region, town, postalCode})
    .then(({ data }) => data);
  }

  signupAdmin(user) {
    const {email, password, username} = user;
    return this.auth.post('/auth/signup192837', {email, password, username})
      .then(({ data }) => data);
  }

  signupTransporter(user) {
    const {email, password, username, direction, country, region, town, postalCode} = user;
    return this.auth.post('/auth/signuptransporter192837', {email, password, username, direction, country, region, town, postalCode})
    .then(({ data }) => data);
  }
  
  login(user) {
    const { username, password } = user;
    return this.auth.post('/auth/login', {username, password})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout')
      .then(response => response.data)
  }

  me() {
    return this.auth.get('/auth/me')
    .then(response => response.data)
  }
}

const authService = new AuthService();

export default authService;