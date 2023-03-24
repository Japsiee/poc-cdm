import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

// components
import { Home } from 'pages/Home';

// styles
import './App.css';

// pages
import { AppLayout } from 'layouts/AppLayout';
import { Login } from 'pages/Login';
import { AccountSettings } from 'pages/AccountSettings';

// mantine
import { Flex } from '@mantine/core';

export default function App() {

  return (
    <AppLayout>
      <Router>
        <Flex className="AppBar" justify="center">Clinical Data Management</Flex>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </Router>
    </AppLayout>
  );
}
