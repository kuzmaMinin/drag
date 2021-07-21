import React, {useEffect, useRef} from 'react';
import {Container} from './styled-components/styled-components';
import ColItem from "./components/ColItem";
import {useGetCardsQuery, useUpdateCardMutation} from "./store/indexApi";
import {Redirect, Route, Switch, useHistory} from "react-router";
import Register from "./components/Register";
import MainHeader from "./components/MainHeader";
import Auth from './components/Auth';
import {ICard} from "../interfaces/interfaces";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, setIndex} from './store/indexSlice';

function App() {
    const isAuth = useSelector(selectIsAuth);
    const history = useHistory();

    useEffect(() => {
        if (isAuth === false) {
            history.push('/auth')
        }
        refetch()
    }, [])



    const {data, isLoading, refetch} = useGetCardsQuery();
    const [updateCard] = useUpdateCardMutation();

    console.log(data, isLoading);

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

    function handleAppDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    function handleAppDrop(e: React.DragEvent) {
        dragItem.current.style.display = 'flex';
    }

    function handleDragStart(e: React.DragEvent, itemIndex: number | undefined,  itemText: string, columnIndex: string) {
        e.dataTransfer.setData('text', itemText);
        e.dataTransfer.setData('card_id', String(itemIndex));

        //@ts-ignore
        dragItem.current = e.target;
        console.log(dragItem.current);

        setTimeout(() => {
            //@ts-ignore
            e.target.style.display = 'none'
        }, 0)
    }

    function handleDragEnter(e: React.DragEvent, itemIndex: number | undefined) {
        console.log('enter', itemIndex);


        setTimeout(() => {
            //@ts-ignore
           e.target.style.marginTop = '150px';
        }, 500)


        dispatch(setIndex(itemIndex));
    }

    function handleDragLeave(e: React.DragEvent) {
        console.log('leave');


       // setTimeout(() => {
            //@ts-ignore
            //e.target.style.marginTop = 0;
       // }, 500)
        //dispatch(setIndex(999));
    }

    function handleDropCol(e: React.DragEvent, columnRow: number | string, seq_index: string) {
        e.preventDefault();

        const text = e.dataTransfer.getData('text');
        const card_id = e.dataTransfer.getData('card_id');
        console.log('drop to col', seq_index);

        updateCard({
            id: card_id,
            row: columnRow,
            text,
            seq_num: seq_index
        }).then((response: any) => console.log(response, 'update'));
    }

    return (
        <>
            <MainHeader/>
            <Container className="App" onDrop={handleAppDrop} onDragOver={handleAppDragOver}>
                <Switch>
                    {
                     isAuth && <Route path='/' exact>
                            {
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
                                        handleDragLeave={handleDragLeave}
                                    />
                                })
                            }
                        </Route>
                    }
                    <Route path='/register'>
                        <Register/>
                    </Route>
                    <Route path='/auth'>
                        <Auth/>
                    </Route>
                </Switch>
            </Container>
        </>
    );
}

export default App;
