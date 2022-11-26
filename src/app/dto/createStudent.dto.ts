import { Etudiant } from '../entities/Etudiant';

export interface createStudentDTO {
  student: Etudiant | undefined;
}
