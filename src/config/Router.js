import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Home from "../pages/home/Home";
import User from '../pages/user/user';
import UserData from '../components/UserData/UserData';
import UserDataLocation from '../components/UserDataLocation/UserDataLocation';
import cause from '../pages/cause/Cause';
import Localization from '../pages/localization/Localization';

const Router =  () => {
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>

          <Route path='/localization' exact component={Localization} />

          {/* page routes User Profile*/}
          <Route path='/user' exact component={User} />
          <Route path='/userData' component={UserData} />
          <Route path='/userDataLocation' component={UserDataLocation} />
          <Route path='/cause' component={cause} />
        </Switch>
      </BrowserRouter>
    </> 
  )
}

export default Router; 