import React, {useEffect} from 'react';
import {Container} from './styled-components/styled-components';
import {Route, Switch, useHistory} from "react-router";
import Register from "./components/Register";
import MainHeader from "./components/MainHeader";
import Auth from './components/Auth';
import {useSelector} from "react-redux";
import {selectIsAuth} from './store/indexSlice';
import Cards from "./components/Cards";

function App() {
    const isAuth = useSelector(selectIsAuth);
    const history = useHistory();

    useEffect(() => {
        if (isAuth === false) {
            history.push('/auth')
        }
    }, [isAuth])

    return (
        <>
            <MainHeader/>
            <Container className="App">
                <Switch>
                    <Route path='/register'>
                        <Register/>
                    </Route>
                    <Route path='/auth'>
                        <Auth/>
                    </Route>
                    {
                        isAuth && <Route path='/cards'>
                            <Cards/>
                        </Route>
                    }
                </Switch>
            </Container>
        </>
    );
}

export default App;
