import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { AxiosResponse } from 'axios'
import { map, Observable } from 'rxjs'

import { CatPhoto, FavoredCatPhoto } from '@/cat/cat.interface'

@Injectable()
export class CatService {
  constructor(private readonly httpService: HttpService) {}

  getCatPhotos(limit: number): Observable<AxiosResponse<CatPhoto[]>> {
    return this.httpService
      .get(`${process.env.THE_CAT_API_BASE_URL}/images/search?limit=${limit}`, {
        headers: {
          Accept: 'application/json',
          'x-api-key': `${process.env.THE_CAT_API_KEY}`,
        },
      })
      .pipe(map((response) => response.data))
  }

  createFavoriteCollections(image_id: string, sub_id?: string): Observable<AxiosResponse<FavoredCatPhoto[]>> {
    const rawBodyData = {
      image_id: `${image_id}`,
      sub_id: `${sub_id}`,
    }
    return this.httpService
      .post(`${process.env.THE_CAT_API_BASE_URL}/favourites`, rawBodyData, {
        headers: {
          Accept: 'application/json',
          'x-api-key': `${process.env.THE_CAT_API_KEY}`,
        },
      })
      .pipe(map((response) => response.data))
  }

  getFavoriteCollections(): Observable<AxiosResponse<FavoredCatPhoto[]>> {
    return this.httpService
      .get(`${process.env.THE_CAT_API_BASE_URL}/favourites`, {
        headers: {
          Accept: 'application/json',
          'x-api-key': `${process.env.THE_CAT_API_KEY}`,
        },
      })
      .pipe(map((response) => response.data))
  }

  deleteFavoriteCollections(favoriteId: number) {
    return this.httpService
      .delete(`${process.env.THE_CAT_API_BASE_URL}/favourites/${favoriteId}`, {
        headers: {
          Accept: 'application/json',
          'x-api-key': `${process.env.THE_CAT_API_KEY}`,
        },
      })
      .pipe(map((response) => response.data))
  }
}
