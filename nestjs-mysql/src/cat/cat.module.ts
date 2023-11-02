import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'

import { CatController } from '@/cat/cat.controller'
import { CatService } from '@/cat/cat.service'

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
