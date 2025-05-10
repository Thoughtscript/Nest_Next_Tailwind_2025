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

  describe('cities', () => {
    it('should return correct cities', () => {
      const cities: City[] = [
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

      expect(appController.getCityData()).toEqual(cities);
    });
  });
});
