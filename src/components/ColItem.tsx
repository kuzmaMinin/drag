import React, {FC} from 'react';
import {Column, ColumnContainer, Header} from "../styled-components/styled-components";
import Item from "./Item";
import Add from "./Add";

const ColItem: FC = () => {
    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
        //console.log(e, 'drag over')
    }

    function handleDrop(e: React.DragEvent) {
        console.log(e, 'drop')
    }

    function handleDragEnter(e: React.DragEvent) {
        //console.log(e, 'enter')
    }

    function handleDragLeave(e: React.DragEvent) {
        //console.log(e, 'leave')
    }

    return (
        <ColumnContainer
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
        >
            <Header>ON-HOLD</Header>
            <Column>
                <Item />
                <Item/>
            </Column>
            <Add/>
        </ColumnContainer>
    );
};

export default ColItem;