import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/home'
import Usercad from '../components/pages/usercad'
import Sobre from '../components/pages/sobre'
import Presencial from'../components/pages/presencial'
import Online from '../components/pages/online'
import Contato from '../components/pages/contato'

export default props =>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sobre' component={Sobre}/>
            <Route path='/presencial' component={Presencial} />
            <Route path='/online' component={Online} />
            <Route path='/contato' component={Contato} />
            <Route path='/usercad' component={Usercad} />
            <Redirect from='*' to='/' />
        </Switch>