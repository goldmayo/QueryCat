export type FavouriteCollectionDto = FavouredCatPhoto[]

export interface FavouredCatPhoto {
  id: number
  image_id: string
  sub_id: string | null
  created_at: string
  image: {
    id: string
    url: string
  }
}
