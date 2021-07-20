import React, {FC, useRef} from 'react';
import {Card, CardBody, DeleteWrap} from "../styled-components/styled-components";
import Close from "./Close";
import {ICard} from "../../interfaces/interfaces";
import {useDeleteCardMutation} from '../store/indexApi';
import {useDispatch} from "react-redux";
import {setIndex} from "../store/indexSlice";

interface IItemProps {
    item: ICard;
}

const Item: FC<IItemProps> = ({item}) => {
    const [deleteCard] = useDeleteCardMutation();
    const dispatch = useDispatch();

    function handleDragStart(e: React.DragEvent) {
        e.dataTransfer.setData('text', item.text);
        //@ts-ignore
        e.dataTransfer.setData('card_id', item.id);
        //@ts-ignore
        e.dataTransfer.setData('card_seq_num', item.seq_num);

        setTimeout(() => {
            //@ts-ignore
            e.target.style.display = 'none';
        }, 0)

    }

    function handleDragEnter(e: React.DragEvent) {
        e.stopPropagation();
        // @ts-ignore
        console.log((Number(item.seq_num) + 1).toString());
        //@ts-ignore
        dispatch(setIndex((Number(item.seq_num) + 1).toString()));
    }

    function handleDragLeave(e: React.DragEvent) {
        e.stopPropagation();
        dispatch(setIndex('0'));
        //@ts-ignore
        e.target.style.display = 'flex';
    }

    function handleDelete() {
        console.log(item.id);

        deleteCard(item.id || 0);
    }

    return (
        <Card
            draggable={true}
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
        >
            <CardBody>
                <DeleteWrap onClick={handleDelete}>
                    <Close width='15px' height='15px'/>
                </DeleteWrap>
                {item.text}
            </CardBody>
        </Card>
    );
};

export default Item;