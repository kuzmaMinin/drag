import React, {FC, useState} from 'react';
import {
    AddButton,
    AddButtonWrap,
    AddContainer,
    AddInput,
    CardButton,
    CloseWrap
} from '../styled-components/styled-components';
import Plus from "./Plus";
import Close from "./Close";

const Add: FC = () => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [text, setText] = useState<string>()

    function handleAddItem() {
        setShowForm(true)
    }

    function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const {value} = e.target;
        setText(value);
    }

    function handleClose() {
        setShowForm(false)
    }

    return (
        <AddContainer>
            {
                showForm ?
                    <>
                        <AddInput value={text} onChange={handleInput}/>
                        <AddButtonWrap>
                            <AddButton>Добавить карточку</AddButton>
                            <CloseWrap onClick={handleClose}>
                                <Close/>
                            </CloseWrap>
                        </AddButtonWrap>
                    </>
                    :
                    <AddButtonWrap>
                        <Plus/>
                        <CardButton onClick={handleAddItem}>Добавить карточку</CardButton>
                    </AddButtonWrap>
            }
        </AddContainer>
    );
};

export default Add;