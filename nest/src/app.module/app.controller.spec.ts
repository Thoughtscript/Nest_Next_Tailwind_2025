import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { City } from './app.domain';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  const CITIES: City[] = [
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
  ]

  describe('cities', () => {
    it('should return correct cities', () => {
      expect(appController.getCityData()).toEqual(CITIES);
    });

    it('should add city', () => {
      CITIES.splice(0, 1);
      expect(appController.deleteCityData("Champaign", "Illinois")).toEqual(CITIES);
    });

    it('should remove city', () => {
      CITIES.push({
        "city": "Los Angeles",
        "state": "California"
      });

      expect(appController.addCityData("Los Angeles", "California")).toEqual(CITIES);
    });
  });

  describe('city', () => {
    it('should return correct city', () => {
      const CITY: City = {
        "city": "Austin",
        "state": "Texas"
      }

      expect(appController.getCity("Austin", "Texas")).toEqual(CITY);
    });
  });
});
