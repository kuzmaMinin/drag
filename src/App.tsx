import React, {useEffect} from 'react';
import {Container} from './styled-components/styled-components';
import ColItem from "./components/ColItem";
import {useGetCardsQuery} from "./store/indexApi";
import {Route, Switch} from "react-router";
import Register from "./components/Register";
import MainHeader from "./components/MainHeader";
import Auth from './components/Auth';
import {ICard} from "../interfaces/interfaces";
import {useDispatch} from "react-redux";


function App() {
   // const dispatch = useDispatch();
    const {data, isLoading} = useGetCardsQuery();
    console.log(data, isLoading);

    const sorted: any = [];
    if(isLoading) {
        return <li>loading...</li>
    } else {
       // dispatch(setPosts(data));

        data && data.forEach((i: any) => {
            const index = Number(i.row);

            if (sorted[index]) {
                sorted[index].push(i);
            } else {
                sorted[index] = [];
                sorted[index].push(i)
            }
        });
    }

    return (
        <>
            <MainHeader/>
            <Container className="App">
                <Switch>
                    <Route path='/' exact>
                        {
                            sorted.map((column: ICard[], idx: number) => {
                                return <ColItem column={column} key={idx} columnRow={idx}/>
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
