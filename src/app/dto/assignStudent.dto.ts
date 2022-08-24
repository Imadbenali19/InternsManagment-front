import { EmplacementStage } from '../entities/EmplacementStage';
import { Encadrant } from '../entities/Encadrant';
import { Etudiant } from '../entities/Etudiant';
import { Stage } from '../entities/Stage';

export interface assignStudentDTO {
  encadrant: Encadrant | undefined;
  etudiant: Etudiant | undefined;
  stage: Stage | undefined;
  emplacementStage: EmplacementStage | undefined;
  date_debut: Date | undefined;
  date_fin: Date | undefined;
}
