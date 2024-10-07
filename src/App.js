import logo from './logo.svg';
import './App.css';
import { Home } from './component/Home';
import { AdminLogin } from './component/AdminLogin';
import { Dashboard } from './component/Dashboard';
import { Applicant } from './component/Applicant';
import { UserPage } from './component/UserPage';
import { Usernav } from './component/Usernav';
import { Apply } from './component/Apply';
import { AddJob } from './component/AddJob';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { UserLogin } from './component/UserLogin';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="login" element={<AdminLogin />} />
        <Route exact path="user" element={<UserPage />} />
        <Route exact path="dash" element={<Dashboard />} />
        <Route exact path="create-user" element={<Applicant />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
