import { Body, Controller, DefaultValuePipe, Delete, Get, ParseIntPipe, Post, Query } from '@nestjs/common'
import { ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger'

import { CatService } from '@/cat/cat.service'

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post('/createFavoriteCollections')
  @ApiOperation({ summary: 'create favorite cat photo collections' })
  @ApiParam({ name: 'image_id', required: true })
  @ApiParam({ name: 'sub_id', required: false })
  async createFavoriteCollection(@Body('image_id') @Body('sub_id') image_id: string, sub_id?: string) {
    return this.catService.createFavoriteCollections(image_id, sub_id)
  }

  @Get()
  @ApiOperation({ summary: 'get cat photo with limit' })
  @ApiQuery({ name: 'limit', required: false })
  async getCatPhoto(@Query('limit', new DefaultValuePipe(1), ParseIntPipe) limit: number) {
    // const data = this.catService.getCatPhotos(limit).
    // return data
    return this.catService.getCatPhotos(limit)
  }

  @Get('/getFavoriteCollections')
  @ApiOperation({ summary: 'get favorite collection' })
  async getFavoriteCollection() {
    return this.catService.getFavoriteCollections()
  }

  // @Get()
  // updateFavoriteCollection() {}

  @Delete('/deleteFavoriteCollections')
  @ApiOperation({ summary: 'delete favorite collection by id' })
  @ApiQuery({ name: 'favoriteId', required: true })
  async deleteFavoriteCollection(@Query('favoriteId', ParseIntPipe) favoriteId: number) {
    return this.catService.deleteFavoriteCollections(favoriteId)
  }
}
