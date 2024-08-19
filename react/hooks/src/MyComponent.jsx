import useFetch from "./customHooks/useFetch";

const MyComponent = () => {
  const { data, isLoading, error } = useFetch(
    "https://api.github.com/users/mujtbkhn"
  );

  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>User Info</h2>
      {data ? (
        <ul>
          <li>ID: {data.id}</li>
          <li>Name: {data.name}</li>
          <li>Username: {data.login}</li>
          <li>
            URL: <a href={data.html_url}>{data.html_url}</a>
          </li>
        </ul>
      ) : (
        <div>No user data found</div>
      )}
    </div>
  );
};

export default MyComponent;
