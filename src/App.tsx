
import 'normalize.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '@components/Header/Header'
import Home from '@pages/Home/Home'
import Programs from '@pages/Programs/Programs';
import NotFound from '@pages/NotFound/NotFound';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default App
