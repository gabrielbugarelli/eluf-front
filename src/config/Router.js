import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Home from "../pages/home/Home";
import Cause from '../pages/cause/Cause'

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