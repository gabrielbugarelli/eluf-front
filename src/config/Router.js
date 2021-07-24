import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Home from "../pages/home/home";
import Cause from '../pages/cause/cause'

const Router =  () => {
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/cause' exact component={Cause}/>
        </Switch>
      </BrowserRouter>

    </> 
  )
}

export default Router; 