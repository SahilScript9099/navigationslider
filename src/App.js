import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Analytics from './pages/Analytics';
import Dashboard from './pages/Dashboard';
import FileManager from './pages/FileManager';
import Messages from './pages/Messages';
import Order from './pages/Order';
import Saved from './pages/Saved';
import Setting from './pages/Setting';
import Users from './pages/Users';
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/messages" element={<Messages />} />
            <Route exact path="/analytics" element={<Analytics />} />
            <Route exact path="/filemanager" element={<FileManager />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/saved" element={<Saved />} />
            <Route exact path="/settings" element={<Setting />} />
            <Route exact path="*" element={<> not found</>} />
          </Routes>
        </Sidebar>
      </div>
    </Router>
  );
}

export default App;
