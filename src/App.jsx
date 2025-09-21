import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import PatientReviews from './components/PatientReviews';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />

        {/* Patient Reviews Page */}
        <Route path="/reviews" element={
          <Layout>
            <PatientReviews />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
