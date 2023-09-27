import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserListPage from './pages/UserListPage';
import CreateUserPage from './pages/CreateUserPage';
import UserDetailsPage from './pages/UserDetailsPage';
import Nav from './components/Nav';
import Header from './components/Header';
import './App.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <main>
          <Header />
          <Nav />
          <Routes>
            <Route path="/page/:pageNumber" element={<UserListPage />} />
            <Route path="/userpage/:id" element={<UserDetailsPage />} />
            <Route path="/create-user" element={<CreateUserPage />} />
            <Route path="*" element={<UserListPage />} />
          </Routes>
        </main>
      </Router>
    </QueryClientProvider>
  );
}

export default App;