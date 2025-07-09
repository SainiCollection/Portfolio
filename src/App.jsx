import { Routes, Route } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import UserForm from './components/UserForm';
import ProfilePage from './components/ProfilePage';
import PortfolioForm from './components/PortfolioForm';
import PortfolioPage from './components/Portfolio7.jsx';
import Portfolio1 from './components/Portfolio1.jsx';
import Portfolio2 from './components/Portfolio2';
import Portfolio3 from './components/Portfolio3';
import Portfolio4 from './components/Portfolio4';
import Portfolio5 from './components/Portfolio5';
import Portfolio6 from './components/Portfolio6';
import CV1 from './components/CV1';
import CV2 from './components/CV2';
import CV3 from './components/CV3';
import CV4 from './components/CV4';
import CV5 from './components/CV5';
import CV6 from './components/CV6';
import CV7 from './components/CV7';
import CV8 from './components/CV8';
import CV9 from './components/CV9';
import CV10 from './components/CV10';
import CV11 from './components/CV11.jsx';
import CV12 from './components/CV12.jsx';
import CV13 from './components/CV13.jsx';
import CV14 from './components/CV14.jsx';
import CV15 from './components/CV15.jsx';
import CV16 from './components/CV16.jsx';
import CV17 from './components/CV17.jsx';
import CV18 from './components/CV18.jsx';
import CV19 from './components/CV19.jsx';
import CV20 from './components/CV20.jsx';
import CV21 from './components/CV21.jsx';
import CV22 from './components/CV22.jsx';
import CV23 from './components/CV23.jsx';
import CVPage from './components/CVform.jsx';
import Companysite from './components/Companysite.jsx';

import Designpage from './components/Designpage.jsx';
import Designpreview from './components/Designpreview.jsx';
import Site2 from './components/Site2.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/PortfolioForm" element={<PortfolioForm />} />
      <Route path="/PortfolioPage" element={<PortfolioPage />} />
      <Route path="/Portfolio1" element={<Portfolio1 />} />
      <Route path="/Portfolio2" element={<Portfolio2 />} />
      <Route path="/Portfolio3" element={<Portfolio3 />} />
      <Route path="/CV1" element={<CV1 />} />
      <Route path="/CV2" element={<CV2 />} />
      <Route path="/CV3" element={<CV3 />} />
      <Route path="/CV4" element={<CV4 />} />
      <Route path="/CV5" element={<CV5 />} />
      <Route path="/CV6" element={<CV6 />} />
      <Route path="/CV7" element={<CV7 />} />
      <Route path="/CV8" element={<CV8 />} />
      <Route path="/Portfolio4" element={<Portfolio4 />} />
      <Route path="/Portfolio5" element={<Portfolio5 />} />
      <Route path="/Portfolio6" element={<Portfolio6 />} />
      <Route path="/CV9" element={<CV9 />} />
      <Route path="/CV10" element={<CV10 />} />
      <Route path="/CV11" element={<CV11 />} />
      <Route path="/CV12" element={<CV12 />} />
      <Route path="/CV13" element={<CV13/>} />
      <Route path="/CV14" element={<CV14/>} />
      <Route path="/CV15" element={<CV15/>} />
      <Route path="/CV16" element={<CV16/>} />
      <Route path="/CV17" element={<CV17/>} />
      <Route path="/CV18" element={<CV18/>} />
      <Route path="/CV19" element={<CV19/>} />
      <Route path="/CV20" element={<CV20/>} />
      <Route path="/CV21" element={<CV21/>} />
      <Route path="/CV22" element={<CV22/>} />
      <Route path="/CV23" element={<CV23/>} />
      <Route path="/Companysite" element={<Companysite />} />
      <Route path="/CVPage" element={<CVPage/>} />
      <Route path="/Site2" element={<Site2/>} />
      <Route path="/Designpage" element={<Designpage/>} />
      <Route path="/Designpreview/:type/:id" element={<Designpreview/>} />

    </Routes>
  );
}

export default App;
