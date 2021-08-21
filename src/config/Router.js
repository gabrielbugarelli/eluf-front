import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Home from "../pages/home/home";
import User from '../pages/user/user';
import UserData from '../pages/UserData/UserData';
import UserDataLocation from '../pages/UserDataLocation/UserDataLocation';
import Cause from '../pages/cause/cause';
import Localization from '../pages/localization/localization';
import Conscience from '../pages/conscience/conscience';
import Cart from '../pages/cart/cart'

const Router =  () => {
  
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/cart' exact component={Cart} />
          <Route path='/localization' exact component={Localization} />
          <Route path='/conscience' exact component={Conscience} />
          {/* page routes User Profile*/}
          <Route path='/user' exact component={User} />
          <Route path='/userData' component={UserData} />
          <Route path='/userDataLocation' component={UserDataLocation} />
          <Route path='/cause' component={Cause} />
        </Switch>
      </BrowserRouter>
    </> 
  )
}

export default Router; 