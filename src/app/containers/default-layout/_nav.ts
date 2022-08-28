import { INavData } from '@coreui/angular';

export const adminNavItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },

 {
  name: 'Encadrants',
  url: '/admin/encadrants',
  iconComponent: { name: 'cil-speedometer' },
 },
 {
  name: 'Etudiants',
  url: '/admin/etudiants',
  iconComponent: { name: 'cil-speedometer' },
 },
 {
  name: 'Admins',
  url: '/admin/admins',
  iconComponent: { name: 'cil-speedometer' },
 },
 {
  name: 'Annonces',
  url: '/admin/annonces',
  iconComponent: { name: 'cil-speedometer' },
 },
 {
  name: 'Stages',
  url: '/admin/stages',
  iconComponent: { name: 'cil-speedometer' },
 },
 {
  name: 'Les Emplacement',
  url: '/admin/emplacements',
  iconComponent: { name: 'cil-speedometer' },
 },
 {
  name: 'Niveau',
  url: '/admin/niveau',
  iconComponent: { name: 'cil-speedometer' },
 },


];
export const encadrantNavItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/encadrant/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Etudiants',
    url: '/encadrant/etudiants',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Affectations',
    url: '/encadrant/affectations',
    iconComponent: { name: 'cil-speedometer' },
  },
];

export const etudiantNavItems: INavData[] = [
  {
    name: 'Stages',
    url: '/etudiant/stages',
    iconComponent: { name: 'cil-speedometer' },
  },
];
