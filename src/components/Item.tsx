import React, {FC} from 'react';
import {Card, CardBody, DeleteWrap} from "../styled-components/styled-components";
import Close from "./Close";
import {ICard} from "../../interfaces/interfaces";
import {useDeleteCardMutation} from '../store/indexApi';

interface IItemProps {
    item: ICard;
    handleDragStart: (e: React.DragEvent, itemIndex: number | undefined, itemText: string, columnIndex: string, ) => void;
    columnRow: string;
    handleDragEnter: (e: React.DragEvent, itemIndex: number | undefined) => void;
}

const Item: FC<IItemProps> = ({item, handleDragStart, columnRow, handleDragEnter}) => {
    const [deleteCard] = useDeleteCardMutation();

    function handleDelete() {
        deleteCard(item.id || 0);
    }

    return (
        <Card
            draggable={true}
            onDragStart={(e) => handleDragStart(e, item.id, item.text, columnRow)}
            onDragEnter={(e) => handleDragEnter(e, item.seq_num)}
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