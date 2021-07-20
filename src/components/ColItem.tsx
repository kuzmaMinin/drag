import React, {FC} from 'react';
import {Column, ColumnContainer, Header} from "../styled-components/styled-components";
import Item from "./Item";
import Add from "./Add";
import {ICard} from "../../interfaces/interfaces";
import {useUpdateCardMutation} from '../store/indexApi';
import {useSelector} from "react-redux";
import {selectIndex} from "../store/indexSlice";

interface IColItemProps {
    column: ICard[];
    columnRow: string;
    title: string;
    bgc: string;
}

const ColItem: FC<IColItemProps> = ({column, columnRow, title, bgc}) => {
    const [updateCard] = useUpdateCardMutation();
    const seq_index = useSelector(selectIndex);

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    function handleDrop(e: React.DragEvent) {
        e.preventDefault();
        console.log(e, 'drop');

        const text = e.dataTransfer.getData('text');
        const card_id = e.dataTransfer.getData('card_id');
        console.log(text, columnRow);

        updateCard({
            id: card_id,
            row: columnRow,
            text,
            seq_num: seq_index
        }).then(response => console.log(response, 'update'));
    }

    function handleDragEnter(e: React.DragEvent) {
        e.preventDefault();
        // console.log(e, 'card')
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
            <Header bgc={bgc}>{title}({column.length})</Header>
            <Column>
                {
                    column.map((item: any) => {
                        return <Item item={item} key={item.id}/>
                    })
                }
            </Column>
            <Add column={column} columnRow={columnRow}/>
        </ColumnContainer>
    );
};

export default ColItem;