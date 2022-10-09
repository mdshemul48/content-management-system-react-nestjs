/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AddNewUser from "./AddNewUser";
import axiosInstance from "../../../utility/axiosInstance";

const Users = () => {
  const { auth } = useSelector((state) => state);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axiosInstance.get("/users", {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      setUsers(data);
    };
    fetch();
  }, []);

  return (
    <section className="mx-2 mt-2">
      <AddNewUser setUsers={setUsers} />
      <div className="mt-4">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Posts</th>
              <th scope="col">Categories</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?._count?.post || 0}</td>
                <td>{user?._count?.category || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
