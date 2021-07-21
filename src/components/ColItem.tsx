import React, {FC} from 'react';
import {Column, ColumnContainer, Header} from "../styled-components/styled-components";
import Item from "./Item";
import Add from "./Add";
import {ICard} from "../../interfaces/interfaces";
import {useSelector} from "react-redux";
import {selectIndex} from "../store/indexSlice";

interface IColItemProps {
    column: ICard[];
    columnRow: string;
    title: string;
    bgc: string;
    handleDragStart: (e: React.DragEvent, itemIndex: number | undefined, itemText: string, columnIndex: string) => void;
    handleDropCol: (e: React.DragEvent, columnRow: string, seq_index: string) => void;
    handleDragEnter: (e: React.DragEvent, itemIndex: number | undefined) => void;
}

const ColItem: FC<IColItemProps> = ({
                                        column, columnRow, title, bgc, handleDragStart,
                                        handleDropCol, handleDragEnter
                                    }) => {
    const seq_index = useSelector(selectIndex);

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    return (
        <ColumnContainer
            onDragOver={handleDragOver}
            onDrop={(e) => handleDropCol(e, columnRow, seq_index)}
        >
            <Header bgc={bgc}>{title}({column.length})</Header>
            <Column>
                {
                    column.map((item: any) => {
                        return <Item
                            item={item}
                            key={item.id}
                            handleDragStart={handleDragStart}
                            columnRow={columnRow}
                            handleDragEnter={handleDragEnter}
                        />
                    })
                }
            </Column>
            <Add columnRow={columnRow}/>
        </ColumnContainer>
    );
};

export default ColItem;