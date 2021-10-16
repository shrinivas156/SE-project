import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Enter from './components/Enter';



const router =()=>{
    return(
        <BrowserRouter>
            <Route exact path='/' component={Enter} />    
        </BrowserRouter>
    )
}
export default router;