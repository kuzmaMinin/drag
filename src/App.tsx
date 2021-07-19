import React, {useEffect} from 'react';
import {Container} from './styled-components/styled-components';
import ColItem from "./components/ColItem";
import {useGetCardsQuery} from "./store/indexApi";
import {Route, Switch} from "react-router";
import Register from "./components/Register";
import MainHeader from "./components/MainHeader";
import Auth from './components/Auth';
import {useSelector} from "react-redux";
import {selectAllCards} from "./store/indexSlice";

function App() {
    const cards = useGetCardsQuery({});
    console.log(cards, 'cards');

    const currentCards = useSelector(selectAllCards);
    console.log(currentCards, 'currentCards')

    const sorted: any = [];

    if(cards.status === 'fulfilled') {
        cards.data.forEach((i: any) => {
            const index = Number(i.row);

            if(sorted[index]) {
                sorted[index].push(i);
            } else {
                sorted[index] = [];
                sorted[index].push(i)
            }
        });
    }
    console.log(sorted);

    return (
        <>
            <MainHeader/>
            <Container className="App">
                <Switch>
                    <Route path='/' exact>
                        {
                            sorted.map((column: any[], idx: number) => {
                                console.log(column);
                                return <ColItem column={column} key={idx}/>
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
