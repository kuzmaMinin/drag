import React, {FC} from 'react';
import {Card, CardBody, DeleteWrap} from "../styled-components/styled-components";
import Close from "./Close";

const Item: FC = ({item}: any) => {
    function onDragStart() {

    }

    function handleDelete() {
        console.log('close baby')
    }

    return (
        <Card draggable={true}>
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