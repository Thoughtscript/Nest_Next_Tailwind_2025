import { Controller, Delete, Get, Query, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { City } from './app.domain';

// https://docs.nestjs.com/controllers
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/cities')
  getCityData(): City[] {
    return this.appService.getCityData();
  }

  // Nest uses @Query instead of @Param here 
  // (unlike other frameworks where params do both kinds of work - Path Params, Query Params)
  @Get('/city')
  getCity(@Query('city') city: string, @Query('state') state: string): City {
    return this.appService.getCity(city, state);
  }

  @Delete('/city')
  deleteCityData(@Query('city') city: string, @Query('state') state: string): City[] {
    return this.appService.deleteCityData(city, state);
  }

  @Post('/city')
  addCityData(@Query('city') city: string, @Query('state') state: string): City[] {
    return this.appService.addCityData(city, state);
  }
}
