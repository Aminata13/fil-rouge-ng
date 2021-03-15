import { Competence } from "./competence.model";

export class Niveau {
  constructor(
    public libelle: string,
    public groupeAction: string,
    public critereEvaluation: string,
    public competence: Competence,
    public id?: number
  ) {  }
}
