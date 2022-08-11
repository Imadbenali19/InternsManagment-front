import { AffectationEmplacementStage } from './AffectationEmplacementStage';
import { Niveau } from './Niveau';
import { User } from './User';
import { DocumentStage } from './DocumentStage';

export interface Etudiant extends User {
  niveau?: Niveau;
  documents?: DocumentStage[];
  affectationEmplacementStages?: AffectationEmplacementStage[];
}
