import { IsOptional, IsString, IsDateString, IsNotEmpty } from 'class-validator'

export class CreateVacancyDto {
  @IsString()
  @IsNotEmpty()
  company: string

  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsOptional()
  description?: string | null

  @IsDateString()
  @IsOptional()
  startDate?: string | null

  @IsDateString()
  @IsOptional()
  endDate?: string | null
}
