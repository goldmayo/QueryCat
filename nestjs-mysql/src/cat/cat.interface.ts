export interface CatPhoto {
  id: string
  url: string
  width: number
  height: number
  breeds?: any[]
  favourite?: any
}

export interface FavoredCatPhoto {
  id: number
  image_id: string
  sub_id: string | null
  created_at: string
  image: {
    id: string
    url: string
  }
}
