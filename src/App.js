import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserManager from './components/UserManager';
import RoleManager from './components/RoleManager';
import Footer from './components/common/Footer';  // Adjust the path based on your file structure


function App() {
  return (
    <div className="container mt-5">
      <h1>RBAC Admin Dashboard</h1>
      <UserManager />
      <RoleManager />
      <common />
    </div>
  );
}

export default App;
