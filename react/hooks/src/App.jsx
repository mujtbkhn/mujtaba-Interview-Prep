import UseAuth from "./customHooks/useAuth";
import UseMemoWithExample from "./hooks/useMemoWithExample";
import UseCallbackWithExample from "./hooks/useCallbackWithExample";
import UseRef from "./hooks/useRef";
import useDebounce from "./customHooks/useDebounce";
import { ShoppingList } from "./hooks/useReducer";
import UseReducerWithExample from "./hooks/useReducerWithExample";
import Previous from "./hooks/Previous";

function App() {
  // const auth = UseAuth();
  // console.log(auth);
  return (
    <>
      <UseRef />
      {/* <UseMemoWithExample /> */}
      {/* <UseCallbackWithExample /> */}
      {/* <h1 style={{color: "black"}}>ahfsadjf</h1> */}
      {/* <ShoppingList /> */}
      {/* <UseReducerWithExample /> */}
      {/* <Previous /> */}
    </>
  );
}

export default App;

