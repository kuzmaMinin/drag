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
import {useDispatch} from "react-redux";
import {addPost} from "../store/indexSlice";

const Add: FC = ({column}: any) => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [text, setText] = useState<string>();
    const dispatch = useDispatch();

    function showItem() {
        setShowForm(true)
    }

    function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const {value} = e.target;
        setText(value);
    }

    function handleClose() {
        setShowForm(false)
    }

    function handleAddItem() {
        const post = {
            text: text,
            id: Date.now(),
            seq_num: column[column.length - 1].seq_num + 1,
            row: column[0].row
        }

        dispatch(addPost(post));
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
                                <Close/>
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