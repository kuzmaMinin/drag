import React, {FC} from 'react';
import {Column, ColumnContainer, Header} from "../styled-components/styled-components";
import Item from "./Item";
import Add from "./Add";
import {ICard} from "../../interfaces/interfaces";
import {useUpdateCardMutation} from '../store/indexApi';

interface IColItemProps {
    column: ICard[];
    columnRow: number;
}

const ColItem: FC<IColItemProps> = ({column, columnRow}) => {
    const [updateCard] = useUpdateCardMutation();

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
        //console.log(e, 'drag over')
    }

    function handleDrop(e: React.DragEvent) {
        e.preventDefault();
        console.log(e, 'drop');

        const card_id = e.dataTransfer.getData('card_id');
        const text = e.dataTransfer.getData('text');
        const seq_num = e.dataTransfer.getData('seq_num');

       console.log(card_id, 'id', columnRow, 'row', text, 'text', seq_num, 'seq_num');

        const data = {row: 0, text, seq_num: 255}

        // @ts-ignore
        updateCard(card_id, data).then(response => console.log(response));
    }

    function handleDragEnter(e: React.DragEvent) {
        e.preventDefault();
        console.log(e, 'card')
    }

    function handleDragLeave(e: React.DragEvent) {
        e.preventDefault();
        //console.log(e, 'leave')
    }

    return (
        <ColumnContainer
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
        >
            <Header/>
            <Column>
                {
                    column.map((item: any) => {
                        return <Item item={item} key={item.id}/>
                    })
                }
            </Column>
            <Add column={column}/>
        </ColumnContainer>
    );
};

export default ColItem;