import { ErrorBoundary } from "react-error-boundary";
import User from "./User";
import WithLoader from "./WithLoader";
import Fallback from "./Test";
import { checkPermissions, PrivateComponent, WithAuthorization } from "./WithAuthorization";
import WithDataFetch from "./WithDataFetch";
import UserList from "./UserList";

function App() {
  const UserWithLoader = WithLoader(User);
  const UserListWithData = WithDataFetch(UserList);
  const PrivateCompWithAuth = WithAuthorization(PrivateComponent, checkPermissions)
  return (
    <>
      <ErrorBoundary FallbackComponent={Fallback} onReset={""}>
        <UserWithLoader />
      </ErrorBoundary>
      <UserListWithData url="https://jsonplaceholder.typicode.com/users" />
      {/* <PrivateCompWithAuth userRole="Admin" /> */}
      {/* <PrivateCompWithAuth userRole="guest" /> */}
    </>
  );
}

export default App;
