import { Referentiel } from "../referentiels/referentiel.model";

export class Promotion {
  constructor(
    public titre: string,
    public description: string,
    public lieu: string,
    public referenceAgate: string,
    public dateDebut: any,
    public dateFin: any,
    public image: any,
    public langue: {id: number, libelle: string},
    public fabrique: {id: number, libelle: string},
    public referentiels: Referentiel[],
    public id?: number,
    public deleted?: boolean
  ) {  }
}
