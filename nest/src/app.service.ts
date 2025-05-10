import { Injectable } from '@nestjs/common';
import { City } from './app.domain';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCityData(): City[] {
    return [
      {
        "city": "Champaign",
        "state": "Illinois" 
      } as City,

      {
        "city": "Columbus",
        "state": "Ohio" 
      } as City,

      {
        "city": "Austin",
        "state": "Texas" 
      } as City,
    ];
  }
}
