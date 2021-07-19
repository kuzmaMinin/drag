import React, {FC} from 'react';
import {Card, CardBody, DeleteWrap} from "../styled-components/styled-components";
import Close from "./Close";
import {ICard} from "../../interfaces/interfaces";
import { useDeleteCardMutation } from '../store/indexApi';

interface IItemProps {
    item: ICard;
}

const Item: FC<IItemProps> = ({item}) => {
    const [deleteItem] = useDeleteCardMutation();

    function handleDragStart(e: React.DragEvent) {
        console.log(item.id, e);
        // @ts-ignore
        e.dataTransfer.setData('card_id', item.id);
        e.dataTransfer.setData('text', item.text);
        // @ts-ignore
        e.dataTransfer.setData('seq_num', item.seq_num);
    }

    function handleDragEnter(e: React.DragEvent) {
        e.stopPropagation();
    }

    function handleDragLeave(e: React.DragEvent) {
       e.stopPropagation();
    }

    function handleDelete() {
        console.log(item.id);
        // @ts-ignore
        deleteItem(item.id);
    }

    return (
        <Card draggable={true} onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave}>
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