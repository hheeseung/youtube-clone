import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ApiProvider from "./context/ApiContext";

function App() {
  return (
    <>
      <Header />
      <ApiProvider>
        <Outlet />
      </ApiProvider>
    </>
  );
}

export default App;
