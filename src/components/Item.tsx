import React, {FC} from 'react';
import {Card, CardBody, CardHeader} from "../styled-components/styled-components";

const Item: FC = ({item}: any) => {
    function onDragStart() {

    }

    return (
        <Card draggable={true}>
            <CardBody>
                {item.text}
            </CardBody>
        </Card>
    );
};

export default Item;