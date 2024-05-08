export enum Role {
  EMPLOYE = 'employe',
  MANAGER = 'manager',
  RH = 'rh',
}
export type  Employe = {
  id: number;
  nom: string;
  prenom: string;
  email: string  | undefined;
  motdepass?: string  | undefined;
  soldeconge: number;
  role: Role;
  dept_id: number;
  token?: string | undefined;
}

export type userLoginCriteria = {
  email: string  | undefined | null;
  password?: string  | undefined | null ;
}
