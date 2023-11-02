import { CatDto } from '@/types/Cat'
import { catPhotoApi } from '../utils/instance'

export const getCatPhotos = async (limit?: number) => {
  return await catPhotoApi.get(`/cat?limit=${limit}`).then((response: { data: CatDto }) => {
    return response.data
  })
}
