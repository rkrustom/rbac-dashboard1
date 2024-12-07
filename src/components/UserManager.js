
import React, { useState } from 'react';
import users from '../data/users';
import AddUser from './AddUser';

function UserManager() {
  const [userList, setUserList] = useState(users);
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = (newUser) => {
    setUserList([...userList, { ...newUser, id: Date.now() }]);
  };

  const handleEditUser = (editedUser) => {
    const updatedUsers = userList.map(user =>
      user.id === editedUser.id ? editedUser : user
    );
    setUserList(updatedUsers);
    setEditingUser(null); // Reset editing mode after saving
  };

  const handleDelete = (id) => {
    setUserList(userList.filter(user => user.id !== id));
  };

  return (
    <div>
      <h2 className="mb-3">User Management</h2>
      <AddUser
        addUserCallback={handleAddUser}
        userToEdit={editingUser}
        handleEditCallback={handleEditUser}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>{user.roles.join(", ")}</td>
              <td>
                <button className="btn btn-info mr-2" onClick={() => setEditingUser(user)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManager;
