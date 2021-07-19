export interface IState {
    cards: ICard[],
    isLogged: boolean
}

export interface IInitialState {
    cards: ICard[],
}

export interface ICard {
    id: number;
    seq_num?: number;
    row_number: number;
    text: string;
}

export interface IUser {
    email?: string | undefined;
    username: string | undefined;
    password: string | undefined;
    token?: string | undefined;
}