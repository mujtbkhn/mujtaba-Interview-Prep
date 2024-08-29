import { ErrorBoundary } from "react-error-boundary";
import User from "./User";
import WithLoader from "./WithLoader";
import Fallback from "./Test";
import { checkPermissions, PrivateComponent, WithAuthorization } from "./WithAuthorization";
import WithNewLoader from "./WithNewLoader";

function App() {
  const UserWithLoader = WithLoader(User);
  const PrivateCompWithAuth = WithAuthorization(PrivateComponent, checkPermissions)
  const NewUserWithNewLoader = WithNewLoader(User);
  return (
    <>
      {/* <ErrorBoundary FallbackComponent={Fallback} onReset={""}>
        <UserWithLoader />
      </ErrorBoundary> */}
      {/* <PrivateCompWithAuth userRole="Admin" /> */}
      {/* <PrivateCompWithAuth userRole="guest" /> */}
      <NewUserWithNewLoader />
    </>
  );
}

export default App;
