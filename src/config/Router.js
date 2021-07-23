import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Home from "../pages/home/Home";


const Router =  () => {
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          
        </Switch>
      </BrowserRouter>

    </> 
  )
}

export default Router;