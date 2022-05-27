import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage/Authcomponent';
import RecordData from './pages/RecordData/RecordDataComponent';
import DisplayRecord from './pages/DisplayRecord/DisplayRecordCompo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/record-data' element={<RecordData />} />
        <Route path='/students-record' element={<DisplayRecord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
