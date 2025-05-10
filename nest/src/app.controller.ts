import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { City } from './app.domain';

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
}
