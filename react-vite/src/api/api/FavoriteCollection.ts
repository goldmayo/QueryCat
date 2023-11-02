import { FavouriteCollectionDto } from '@/types/Collection'
import { collectionApi } from '../utils/instance'

export const getCollection = async () => {
  return await collectionApi.get(`/cat/getFavoriteCollections`).then((response: { data: FavouriteCollectionDto }) => {
    return response.data
  })
}

export const createCollection = async (image_id: string, sub_id?: string) => {
  const rawBodyData = {
    image_id: `${image_id}`,
    sub_id: `${sub_id}`,
  }
  return await collectionApi.post(`/cat/createFavoriteCollections`, rawBodyData).then((response) => {
    return response.data
  })
}

export const deleteCollection = async (favoriteId: number) => {
  return await collectionApi.delete(`/cat/deleteFavoriteCollections?favoriteId=${favoriteId}`).then((response) => {
    return response.data
  })
}
