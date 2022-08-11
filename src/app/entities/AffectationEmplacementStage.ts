import { EtudiantsComponent } from '../views/encadrant/etudiants/etudiants.component';
import { DocumentStage } from './DocumentStage';
import { Encadrant } from './Encadrant';
import { Etudiant } from './Etudiant';
import { Stage } from './Stage';
import { EmplacementStage } from './EmplacementStage';

export interface AffectationEmplacementStage {
  id?: number;
  date_debut: Date;
  date_fin: Date;
  stage: Stage;
  etudiant?: Etudiant;
  encadrant?: Encadrant; //TODO IGNORE PROPERTY AFFEECTATION STAGE ON THE RESOURCE SERVER
  documents?: DocumentStage[];
  emplacementStage?: EmplacementStage;
}
