import axios from 'axios'

const createClient = (config, getServices) => {
  const client = axios.create(Object.assign({}, config))

  client.interceptors.request.use(config => Object.assign(config, getServices()))

  return client
}

export default createClient
