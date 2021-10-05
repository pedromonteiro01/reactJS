import {Route, Switch} from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    // '/' -> default path
    // with <Switch> only one component can be rendered
    // with exact prop /favorites will present FavoritesPage instead of AllMeetupsPage
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetupsPage />  
        </Route> 
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
