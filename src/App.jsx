import { Outlet, Link } from "@tanstack/react-router";
import "./App.css";

function App() {
  return (
    <>

      <main>
        <Outlet />
      </main>

      <footer>
        <small className="text-red-500">Created with ❤️ by _REPLACE_</small>
      </footer>
    </>
  );
}

export default App;
