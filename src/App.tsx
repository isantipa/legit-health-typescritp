import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { DarkModeProvider } from './context/DarkModeContext';

import UserListPage from './pages/UserListPage';
import CreateUserPage from './pages/CreateUserPage';
import UserDetailsPage from './pages/UserDetailsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import DarkModeButton from './components/DarkModeButton';

import './assets/styles/App.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [darkMode] = useState(false);

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className={darkMode ? 'dark-mode' : 'light-mode'}>
              <main className='main'>
                <Header />
                <DarkModeButton />
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
    </DarkModeProvider>
  );
}

export default App;