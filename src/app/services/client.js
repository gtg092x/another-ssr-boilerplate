import axios from 'axios'

// Here you can leverage interceptors and still have access to the other services in the app.
const createClient = (config, getServices) => {
  const client = axios.create(Object.assign({}, config))

  client.interceptors.request.use((config) => {
    const { store } = config // woah! We have a redux store here
    return config
  })

  client.interceptors.request.use(config => Object.assign(config, getServices()))

  return client
}

export default createClient
