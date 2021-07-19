import React, {FC} from 'react';
import {Card, CardBody, CardHeader} from "../styled-components/styled-components";

const Item: FC = () => {
    function onDragStart() {

    }

    return (
        <Card draggable={true}>
            <CardHeader>
                1 карточка
            </CardHeader>
            <CardBody>
                Lorem ipsum dolor sit amet.
            </CardBody>

        </Card>
    );
};

export default Item;