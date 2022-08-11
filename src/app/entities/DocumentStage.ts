import { StringLiteral } from 'typescript/lib/tsserverlibrary';
import { Etudiant } from './Etudiant';

export interface DocumentStage {
  id: number;
  lien: string;
  description: string;
  type: string;
  proprietaire: Etudiant;
}
