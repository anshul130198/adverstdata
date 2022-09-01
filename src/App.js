import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login'
import JobList from './components/Jobs/JobList'
import NotFound from './components/NotFound/NotFound'
import { TempNav } from './components/TempNav';
import JobDetails from './components/Jobs/JobDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <TempNav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:jobId" element={<JobDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
