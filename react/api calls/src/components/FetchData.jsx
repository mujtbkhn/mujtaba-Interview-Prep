import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchData = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data);
      setUserData(response.data);
      //   console.log(userData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  if (loading) return <div>...Loading</div>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Names</th>
            <th>Emails</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <th>{user.name}</th>
              <th>{user.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchData;
