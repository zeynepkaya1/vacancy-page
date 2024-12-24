import { Module } from '@nestjs/common';
import { VacancyService } from './services/vacancy.service';
import { VacancyController } from './controllers/vacancy.controller';

@Module({
  controllers: [VacancyController],
  providers: [VacancyService],
})
export class VacancyModule {}
