import Places from './pages/Places';
import Overview from './pages/Overview';

import { BrowserRouter, Route } from 'react-router-dom'
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { NewUser } from './pages/NewUser';
import { AuthContextProvider } from "./contexts/AuthContext";
import { UserPlacesContextProvider } from './contexts/UserPlacesContext';
import Logs from './pages/Logs';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
      <UserPlacesContextProvider>
        <Route path="/" exact component={Login} />
        <Route path="/user/new" component={NewUser} />
        <Route path="/home" component={Home} />
        <Route path="/home/overview" exact component={Overview} />
        <Route path="/home/places/:placeId" component={Places} />
        <Route path="/home/logs/:placeId" component={Logs} />
      </UserPlacesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
