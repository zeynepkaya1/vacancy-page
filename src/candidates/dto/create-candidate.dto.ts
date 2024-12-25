import {
  IsOptional,
  IsString,
  IsDateString,
  IsNotEmpty,
  IsEmail,
  IsNumber,
} from 'class-validator';

export class CreateCandidateDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  phone?: string | null;

  @IsDateString()
  @IsOptional()
  dateOfBirth?: string | null;

  @IsString()
  @IsOptional()
  sex?: string | null;

  @IsString()
  @IsOptional()
  title?: string | null;

  @IsNumber()
  @IsOptional()
  yearsOfExp?: number | null;
}
