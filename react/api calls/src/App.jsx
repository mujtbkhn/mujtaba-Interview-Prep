import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import TestProtectedRoute from "./components/TestProtectedRoute";
import ProtectedRoute from "./components/ProtectedRoute";

const FetchData = lazy(() => import("./components/FetchData"))
const DictionaryComponent = lazy(() => import("./components/Dictionary"))
const Test1 = lazy(() => import("./components/Test1"))
const Test2 = lazy(() => import("./components/Test2"))
const Test3 = lazy(() => import("./components/Test3"))
const Test4 = lazy(() => import("./components/Test4"))
const FetchUsersWithManipulations = lazy(() => import("./components/FetchUsersWithManipulations"))

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<ProtectedRoute Component={FetchUsersWithManipulations} />} />
          <Route path="/fetchData" element={<ProtectedRoute Component={<FetchData />} />} />
          <Route path="/dict"
            element={<Suspense fallback={"Dictionary Loading..."}><DictionaryWithErrorBoundary /></Suspense>}
          />
          <Route path="test1" element={<TestProtectedRoute Component={Test1} />} />
          <Route path="test2" element={<TestProtectedRoute Component={Test2} />} />
          <Route path="test3" element={<TestProtectedRoute Component={Test3} />} />
          <Route path="test4" element={<TestProtectedRoute Component={Test4} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const FallbackComponent = ({ error }) => {
  return (
    <>
      <h3>something went wrong</h3>
      <p style={{ color: "red" }}>{error.message}</p>
    </>
  )
}

const DictionaryWithErrorBoundary = () => {
  const Dictionary = DictionaryComponent

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <Dictionary />
    </ErrorBoundary>
  )
}

export default App;