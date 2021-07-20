export interface IState {
    cards: ICard[],
    status: string
}

export interface IInitialState {
    cards: ICard[],
}

export interface ICard {
    id?: number;
    seq_num?: number;
    row: string;
    text: string;
}

export interface IUser {
    email?: string | undefined;
    username: string | undefined;
    password: string | undefined;
    token?: string | undefined;
}