import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyPage from './layouts/MyPage';

function App() {


  return (
    <Router>
      <Routes>
        {/* Other routes go here */}
        <Route path="/page" element={<MyPage />} />
      </Routes>
    </Router>
  )
}

export default App
