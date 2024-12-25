import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VacancyModule } from './vacancies/vacancy.module';
import { CandidateModule } from './candidates/candidate.module';

@Module({
  // Connection to DB and configuration.
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'sqlite', // Or any other DB type (postgres, mysql)
  //     database: 'db.sqlite', // Path to the database file
  //     entities: [Candidate, Vacancy], // Include all the entities
  //     synchronize: true, // Automatically sync schema
  //   }),
  //   TypeOrmModule.forFeature([Candidate, Vacancy]),
  //   VacancyModule,
  //   CandidateModule,
  // ],
  imports: [VacancyModule, CandidateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
