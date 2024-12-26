import { Module } from '@nestjs/common';
import { VacancyService } from './services/vacancy.service';
import { VacancyController } from './controllers/vacancy.controller';
import { CandidateService } from '../candidates/services/candidate.service';

@Module({
  controllers: [VacancyController],
  providers: [VacancyService, CandidateService],
})
export class VacancyModule {}
