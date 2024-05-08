export enum Role {
  EMPLOYE = 'employe',
  MANAGER = 'manager',
  RH = 'rh',
}
export interface Employe {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  motdepass: string;
  soldeconge: number;
  role: Role;
  dept_id: number;
}
