import React from 'react';
import {Container} from './styled-components/styled-components';
import ColItem from "./components/ColItem";
import {useGetCardsQuery} from "./store/indexApi";
import {Route, Switch} from "react-router";
import Register from "./components/Register";
import MainHeader from "./components/MainHeader";
import Auth from './components/Auth';
import {ICard} from "../interfaces/interfaces";

function App() {
    const {data, isLoading} = useGetCardsQuery();
    console.log(data, isLoading);

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

    return (
        <>
            <MainHeader/>
            <Container className="App">
                <Switch>
                    <Route path='/' exact>
                        {
                            sorted.map((column: { title: string, items: ICard[], id: number, bgc: string }) => {
                                return <ColItem
                                    column={column.items}
                                    title={column.title}
                                    key={column.id}
                                    bgc={column.bgc}
                                    columnRow={column.id.toString()}
                                />
                            })
                        }
                    </Route>
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
