import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'
import { Vacancy } from '../entities/vacancy.entity';
import { CreateVacancyDto } from '../dto/create-vacancy.dto';
import { vacancies } from 'src/FAKE DATA';

@Injectable()
export class VacancyService {
  constructor() {}
  // What it would be if we were using a database
  // @InjectRepository(Vacancy)
  // private readonly vacancyRepository: Repository<Vacancy>,

  async create(createVacancyDto: CreateVacancyDto): Promise<Vacancy> {
    const vacancy = {
      ...createVacancyDto,
      uuid: Math.random().toString(36).substring(2),
      createdAt: new Date(),
      updatedAt: new Date(),
      description:
        createVacancyDto.description !== null
          ? createVacancyDto.description
          : undefined,
      startDate:
        createVacancyDto.startDate !== null
          ? createVacancyDto.startDate
          : undefined,
      endDate:
        createVacancyDto.endDate !== null
          ? createVacancyDto.endDate
          : undefined,
    };
    vacancies.push(vacancy);

    return vacancy;

    // What it would be if we were using a database
    // const newVacancy = this.vacancyRepository.create(createVacancyDto)
    // return this.vacancyRepository.save(newVacancy)
  }

  async findAll(): Promise<Vacancy[]> {
    return vacancies;

    // What it would be if we were using a database
    // return this.vacancyRepository.find()
  }

  async findOne(uuid: string): Promise<Vacancy> {
    const vacancy = vacancies.find((vacancy) => vacancy.uuid === uuid);

    // What it would be if we were using a database
    // const vacancy = await this.vacancyRepository.findOneBy({ uuid })
    // if (!Vacancy) {
    //   throw new NotFoundException(`Vacancy with UUID ${uuid} not found`)
    // }

    return vacancy;
  }
}
