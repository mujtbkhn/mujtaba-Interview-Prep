import { ErrorBoundary } from "react-error-boundary";
import User from "./User";
import WithLoader from "./WithLoader";
import Fallback from "./Test";
import { checkPermissions, PrivateComponent, WithAuthorization } from "./WithAuthorization";

function App() {
  const UserWithLoader = WithLoader(User);
  const PrivateCompWithAuth = WithAuthorization(PrivateComponent, checkPermissions)
  return (
    <>
      {/* <ErrorBoundary FallbackComponent={Fallback} onReset={""}>
        <UserWithLoader />
      </ErrorBoundary> */}
        <PrivateCompWithAuth userRole="Admin" />
        {/* <PrivateCompWithAuth userRole="guest" /> */}
    </>
  );
}

export default App;
