import { Injectable } from '@nestjs/common';
import { City } from './app.domain';

// This is obviously an inefficient data structure (doesn't dedup, not O(1), etc.)
// For the present purposes it'll suffice though
let CITY_DATA: City[] = [
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

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCityData(): City[] {
    return CITY_DATA;
  }

  getCity(city: string, state: string): City {
    for (let i = 0; i < CITY_DATA.length; i++) {
      const C = CITY_DATA[i]

      if (C.city === city && C.state === state) {
        return C
      }
    }

    const NOT_FOUND: City = {
      "city": `${city} not found`,
      "state": `${state} not found`
    }

    return NOT_FOUND;
  }

  deleteCityData(city: string, state: string): City[] {
    for (let i = 0; i < CITY_DATA.length; i++) {
      const C = CITY_DATA[i]

      if (C.city === city && C.state === state) {
        CITY_DATA.splice(i, 1)
      }
    }

    return CITY_DATA;
  }

  addCityData(city: string, state: string): City[] {
    const CITY: City = {
      "city": city,
      "state": state
    }

    CITY_DATA.push(CITY)

    return CITY_DATA;
  }
}
