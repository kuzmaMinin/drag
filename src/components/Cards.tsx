import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, setIndex} from "../store/indexSlice";
import {useGetCardsQuery, useUpdateCardMutation} from "../store/indexApi";
import {CardContainer} from "../styled-components/styled-components";
import {ICard} from "../../interfaces/interfaces";
import ColItem from "./ColItem";

const Cards = () => {
    const isAuth = useSelector(selectIsAuth);
    const {data, isLoading} = useGetCardsQuery();
    const [updateCard] = useUpdateCardMutation();

    const dragItem = useRef(null) as unknown as React.MutableRefObject<HTMLDivElement>;
    const dispatch = useDispatch();

    const sorted: any = [
        {title: 'ON-HOLD', items: [], id: 0, bgc: '#e74b4b'},
        {title: 'IN-PROGRESS', items: [], id: 1, bgc: '#4949d5'},
        {title: 'NEEDS-REVIEW', items: [], id: 2, bgc: '#e0b650'},
        {title: 'APPROVED', items: [], id: 3, bgc: '#09aa0c'},
    ];

    if (!isLoading) {
        data && data.forEach((i: any) => {
            const index = Number(i.row);
            sorted[index].items.push(i);
        });
    }

    function handleAppDrop() {
        dragItem.current.style.display = 'flex';
    }

    function handleDragStart(e: React.DragEvent, itemIndex: number | undefined, itemText: string, columnIndex: string) {
        e.dataTransfer.setData('text', itemText);
        e.dataTransfer.setData('card_id', String(itemIndex));

        // @ts-ignore
        dragItem.current = e.target;

        setTimeout(() => {
            // @ts-ignore
            (e.target).style.display = 'none'
        }, 0)
    }

    function handleDragEnter(e: React.DragEvent, itemIndex: number | undefined) {
        dispatch(setIndex(itemIndex));
    }

    function handleDropCol(e: React.DragEvent, columnRow: number | string, seq_index: string) {
        e.preventDefault();

        const text = e.dataTransfer.getData('text');
        const card_id = e.dataTransfer.getData('card_id');

        updateCard({
            id: card_id,
            row: columnRow,
            text,
            seq_num: seq_index
        }).then((response: any) => console.log(response, 'update'));
    }

    return (
        <CardContainer onDrop={handleAppDrop}>

            {isAuth &&
            sorted.map((column: { title: string, items: ICard[], id: number, bgc: string }) => {
                return <ColItem
                    column={column.items}
                    title={column.title}
                    key={column.id}
                    bgc={column.bgc}
                    columnRow={column.id.toString()}
                    handleDragStart={handleDragStart}
                    handleDropCol={handleDropCol}
                    handleDragEnter={handleDragEnter}
                />
            })
            }
        </CardContainer>
    );
};

export default Cards;