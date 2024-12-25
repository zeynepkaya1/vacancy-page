import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateVacancyDto } from '../dto/create-vacancy.dto';
import { VacancyService } from '../services/vacancy.service';
import { UpdateVacancyDto } from '../dto/update-Vacancy.dto';

@Controller('vacancies')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Post()
  create(@Body() createVacancyDto: CreateVacancyDto) {
    return this.vacancyService.create(createVacancyDto);
  }

  @Get()
  findAll() {
    return this.vacancyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vacancyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVacancyDto: UpdateVacancyDto) {
    return this.vacancyService.update(id, updateVacancyDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.vacancyService.delete(id);
  }
}
