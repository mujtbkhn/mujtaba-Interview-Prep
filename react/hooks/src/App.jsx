import MyComponent from "./MyComponent";
import UseAuth from "./customHooks/useAuth";
import UseCallback from "./hooks/useCallback";
import UseMemo from "./hooks/useMemo";
import UseMemoWithExample from "./hooks/useMemoWithExample";
import UseCallbackWithExample from "./hooks/useCallbackWithExample";
import UseRef from "./hooks/useRef";
import useDebounce from "./customHooks/useDebounce";
import UsingDebounce from "./UsingDebounce"
import { ShoppingList } from "./hooks/useReducer";
import UseReducerWithExample from "./hooks/useReducerWithExample";

function App() {
  // const auth = UseAuth();
  // console.log(auth);
  return (
    <>
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <MyComponent /> */}
      {/* <UseMemoWithExample /> */}
      {/* <UseCallbackWithExample /> */}
      {/* <UsingDebounce /> */}
      {/* <h1 style={{color: "black"}}>ahfsadjf</h1> */}
      {/* <ShoppingList /> */}
      <UseReducerWithExample />
    </>
  );
}

export default App;

