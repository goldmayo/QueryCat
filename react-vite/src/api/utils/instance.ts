import axios from 'axios'

export const catPhotoApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { Accept: '*/*' },
})

export const collectionApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { Accept: '*/*' },
})
