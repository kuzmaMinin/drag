export interface IState {
    cards: ICard[],
    status: string
}

export interface IInitialState {
    currentIndex: string;
    token: string | null;
}

export interface ICard {
    id?: number;
    seq_num?: number;
    row: string;
    text: string;
}

export interface IUser {
    email?: string;
    username: string;
    password: string;
    token?: string;
}