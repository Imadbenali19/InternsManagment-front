import { Niveau } from "./Niveau";

export interface Stage {
  id?: number;
  nom: string;
  subject: string;
  duree: number;
  niveau?:Niveau;
}
