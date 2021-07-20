import React, {FC, useState} from 'react';
import {
    AddButton, AddButtonWrap, AddContainer,
    AddInput, CardButton, CloseWrap
} from '../styled-components/styled-components';
import Plus from "./Plus";
import Close from "./Close";
import {ICard} from "../../interfaces/interfaces";
import {useCreateCardMutation} from '../store/indexApi';

interface IAddProps {
    column: ICard[];
    columnRow: string;
}

interface ICardRes {
    text: string;
    row: string;
}

const Add: FC<IAddProps> = ({column, columnRow}) => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [text, setText] = useState<string>('');

    const [createPost] = useCreateCardMutation();

    function showItem() {
        setShowForm(true)
    }

    function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const {value} = e.target;
        setText(value);
    }

    function handleClose() {
        setText('');
        setShowForm(false);
    }

    function handleAddItem() {
        const card: ICardRes = {
            text: text,
            row: columnRow
        }

        createPost(card).then(response => {
            console.log(response)
        });
        setText('');
        setShowForm(false);
    }

    return (
        <AddContainer>
            {
                showForm ?
                    <>
                        <AddInput value={text} onChange={handleInput}/>
                        <AddButtonWrap>
                            <AddButton onClick={handleAddItem}>Добавить карточку</AddButton>
                            <CloseWrap onClick={handleClose}>
                                <Close width='28px' height='28px'/>
                            </CloseWrap>
                        </AddButtonWrap>
                    </>
                    :
                    <AddButtonWrap>
                        <Plus/>
                        <CardButton onClick={showItem}>Добавить карточку</CardButton>
                    </AddButtonWrap>
            }
        </AddContainer>
    );
};

export default Add;
