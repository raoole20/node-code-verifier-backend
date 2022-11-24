export enum KataLevel  {
    BASIC = 'BASIC', 
    MEDIUM = 'MEDIUM', 
    HIGH = 'HIGH'
}

export interface IKata {
    name: string,
    description: string,
    level: KataLevel
    intents: number,
    stars: number,
    creator: string, // ID of user
    solution: string,
    participants: string[]
}