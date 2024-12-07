import React, { useState, useEffect } from 'react';

function AddUser({ addUserCallback, userToEdit, handleEditCallback }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Active');
  const [roles, setRoles] = useState([]);
  const [roleOptions] = useState(["Admin", "Editor", "Viewer"]);

  useEffect(() => {
    if (userToEdit) {
      setUsername(userToEdit.username);
      setEmail(userToEdit.email);
      setStatus(userToEdit.status);
      setRoles(userToEdit.roles);
    }
  }, [userToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userToEdit) {
      handleEditCallback({ ...userToEdit, username, email, status, roles });
    } else {
      addUserCallback({ username, email, status, roles });
    }
    setUsername('');
    setEmail('');
    setStatus('Active');
    setRoles([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          className="form-control"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="roles">Roles</label>
        <select
          className="form-control"
          id="roles"
          multiple
          value={roles}
          onChange={(e) => setRoles([...e.target.selectedOptions].map(option => option.value))}
        >
          {roleOptions.map(role => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">{userToEdit ? 'Update User' : 'Add User'}</button>
    </form>
  );
}

export default AddUser;
