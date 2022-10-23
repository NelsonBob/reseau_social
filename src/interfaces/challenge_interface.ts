export interface IChallenge {
    title: string;
    description: string;
    resultat_attendu:string;
}

export interface IChallengeResult {
    challenge_id: string;
    resultat_obtenu:string;
    temps_execution:number;
}

export interface IUidChallenge {
    challenge_id: string;
  }