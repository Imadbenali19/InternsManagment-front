import { INavData } from '@coreui/angular';

export const adminNavItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
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
    name: 'Dashboard',
    url: '/etudiant/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
];
