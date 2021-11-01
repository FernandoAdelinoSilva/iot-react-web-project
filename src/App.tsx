import Places from './pages/Places';
import Overview from './pages/Overview';

import { BrowserRouter, Route } from 'react-router-dom'
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { NewUser } from './pages/NewUser';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import { AuthContextProvider } from "./contexts/AuthContext";
import { UserPlacesContextProvider } from './contexts/UserPlacesContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
      <UserPlacesContextProvider>
        <Route path="/" exact component={Login} />
        <Route path="/user/new" component={NewUser} />
        <Route path="/home" component={Home} />
        <Route path="/home/overview" exact component={Overview} />
        <Route path="/home/reports" exact component={Reports} />
        <Route path="/home/reports/reports1" exact component={ReportsOne} />
        <Route path="/home/reports/reports2" exact component={ReportsTwo} />
        <Route path="/home/reports/reports3" exact component={ReportsThree} />
        <Route path="/home/places/:placeId" component={Places} />
      </UserPlacesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
