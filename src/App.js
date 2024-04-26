

import {BrowserRouter as Router , NavLink , Routes ,Route } from 'react-router-dom'
import Stock from './Components/Stock';
import Watchlist from './Components/Watchlist';


function App() {
  return (
    <Router>

    

        <nav>
          <NavLink to="/stocks"> STOCKS </NavLink>

          <NavLink to="/watchlist"> WATCHLIST </NavLink>
        </nav>

        <Routes>

        <Route path="/stocks" element={<Stock />}> </Route>
        <Route path="/watchlist" element={<Watchlist />}> </Route>



        </Routes>

    </Router>
    
  );
}

export default App;
