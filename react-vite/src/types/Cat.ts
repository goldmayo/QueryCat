export type CatDto = CatPhoto[]

export interface CatPhoto {
  id: string
  url: string
  width?: number
  height?: number
  breeds?: any[]
  favourite?: any
}
