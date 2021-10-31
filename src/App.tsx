import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { NewUser } from './pages/NewUser';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';

import { AuthContextProvider } from "./contexts/AuthContext";
import { UserPlacesContextProvider } from './contexts/UserPlacesContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
      <UserPlacesContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/user/new" component={NewUser} />
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/rooms/new/overview" exact component={Overview} />
        <Route path="/rooms/new/reports" exact component={Reports} />
        <Route path="/rooms/new/reports/reports1" exact component={ReportsOne} />
        <Route path="/rooms/new/reports/reports2" exact component={ReportsTwo} />
        <Route path="/rooms/new/reports/reports3" exact component={ReportsThree} />
      </UserPlacesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
