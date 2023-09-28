import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import UserListPage from './pages/UserListPage';
import CreateUserPage from './pages/CreateUserPage';
import UserDetailsPage from './pages/UserDetailsPage';
import Header from './components/Header';
import Footer from './components/Footer';

import './assets/styles/App.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <main>
              <Header />
              <button className="toggle-dark-mode" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
              <ToastContainer/>
              <Routes>
                <Route path="/page/:pageNumber" element={<UserListPage />} />
                <Route path="/userpage/:id" element={<UserDetailsPage />} />
                <Route path="/create-user" element={<CreateUserPage />} />
                <Route path="*" element={<UserListPage />} />
              </Routes>
              <Footer />
            </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;