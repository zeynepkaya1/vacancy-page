import { Injectable } from '@nestjs/common';
import { candidates } from 'src/FAKE DATA';
import { Candidate } from '../entities/candidate.entity';
import { CreateCandidateDto } from '../dto/create-candidate.dto';
import { UpdateCandidateDto } from '../dto/update-candidate.dto';

@Injectable()
export class CandidateService {
  // Get candidate data from static file
  // private to hold the in-memory list of candidates.
  private candidates = candidates;

  create(createCandidateDto: CreateCandidateDto): Candidate {
    const newCandidate: Candidate = {
      id: (this.candidates.length + 1).toString(),
      ...createCandidateDto,
    };
    this.candidates.push(newCandidate);
    return newCandidate;
  }

  findAll(): Candidate[] {
    return this.candidates;
  }

  findOne(id: string): Candidate {
    return this.candidates.find((candidate) => candidate.id === id);
  }

  update(id: string, updateCandidateDto: UpdateCandidateDto): Candidate {
    const index = this.candidates.findIndex((candidate) => candidate.id === id);
    if (index === -1) return null;

    this.candidates[index] = {
      ...this.candidates[index], // Preserve existing properties
      ...updateCandidateDto, // Overwrite with updated properties
    };
    return this.candidates[index];
  }

  remove(id: string): void {
    this.candidates = this.candidates.filter(
      (candidate) => candidate.id !== id,
    );
  }
}
