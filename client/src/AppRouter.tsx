import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login from './pages/Login';
import AdminRoutes from './routes/AdminRoutes';
import ClientRoutes from './routes/ClientRoutes';

function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ClientRoutes/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<AdminRoutes/>}/>
      </Routes>
    </Router>
  );
}

export default AppRouter;