import { AffectationEmplacementStage } from './AffectationEmplacementStage';
import { Niveau } from './Niveau';
import { User } from './User';

export interface Encadrant extends User {
  niveau?: Niveau;
  affectationEmplacementStages?: AffectationEmplacementStage[];
}
