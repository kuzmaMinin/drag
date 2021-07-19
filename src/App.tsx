import React from 'react';
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



    return (
        <>
            <MainHeader/>
            <Container className="App">
                <Switch>
                    <Route path='/' exact>
                        {
                            //currentCards.map()
                        }
                        <ColItem/>
                        <ColItem/>
                        <ColItem/>
                        <ColItem/>
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
