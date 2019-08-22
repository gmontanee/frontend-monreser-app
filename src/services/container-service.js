import axios from 'axios';

class ContainerService {
  constructor() {
    this.clientRoutes = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  addContainer(features) {
    return this.clientRoutes.post('/clientRoutes/newContainer', features )
      .then(({ data }) => data);
  }

  acceptContainer(container, transportist) {
    const { name } = transportist;
    const { _id } = container;
    return this.clientRoutes.post('/clientRoutes/acceptContainer', { _id, name })
      .then(({ data }) => data);
  }

  deleteContainer(containerId) {
    return this.clientRoutes.post('/clientRoutes/deleteContainer', { containerId })
      .then(({ data }) => data);
  }
  
  modifyContainer(features, containerId) {
    return this.clientRoutes.post('/clientRoutes/modifyContainer', { features, containerId })
    .then(({ data }) => data);
  }
  
  updateContainerToDelivered(container, transportist) {
    const { name } = transportist;
    const { _id } = container;
    return this.clientRoutes.post('/clientRoutes/updateContainerToDelivered', { name, _id })
      .then(({ data }) => data);
  }
  requestCollection(containerId) {
    return this.clientRoutes.post('/clientRoutes/requestCollection', { containerId })
      .then(({ data }) => data);
  }
  
  updateContainerToCollected(containerId) {
    return this.clientRoutes.post('/clientRoutes/updateContainerToCollected', { containerId })
      .then(({ data }) => data);
  }

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