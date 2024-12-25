import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'
import { Vacancy } from '../entities/vacancy.entity';
import { CreateVacancyDto } from '../dto/create-vacancy.dto';
import { UpdateVacancyDto } from '../dto/update-Vacancy.dto';
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

  async update(
    uuid: string,
    updateVacancyDto: UpdateVacancyDto,
  ): Promise<Vacancy> {
    const index = vacancies.findIndex((vacancy) => vacancy.uuid === uuid);

    if (index === -1) {
      throw new NotFoundException(`Vacancy with UUID ${uuid} not found`);
    }

    const updatedVacancy = {
      ...vacancies[index],
      ...updateVacancyDto,
      updatedAt: new Date(),
    };

    vacancies[index] = updatedVacancy;
    return updatedVacancy;
  }

  async delete(id: string): Promise<{ message: string }> {
    const index = vacancies.findIndex((vacancy) => vacancy.uuid === id);

    if (index === -1) {
      throw new NotFoundException(`Vacancy with id ${id} not found`);
    }

    vacancies.splice(index, 1);

    return { message: `Vacancy with id ${id} deleted successfully` };
  }
}
