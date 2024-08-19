import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchData = () => {
  const [userData, setUserData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 10;

  useEffect(() => {
    fetchUsers();
    // fetchPosts();
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

  const fetchPosts = async () => {
    try {
      //   setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPostsData(response.data.slice(0, 10));
      //   console.log(postsData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
    // console.log(currentPage)
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
    // console.log(currentPage)
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost);

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
      {/* <table>
        <thead>
          <tr>
            <th>Names</th>
            <th>Emails</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr key={post.id}>
              <th>{post.body}</th>
              <th>{post.title}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button> */}
    </div>
  );
};

export default FetchData;
