import { Module } from '@nestjs/common';
import { CandidateService } from './services/candidate.service';
import { CandidateController } from './controllers/candidate.controller';

@Module({
  controllers: [CandidateController],
  providers: [CandidateService],
})
export class CandidateModule {}
