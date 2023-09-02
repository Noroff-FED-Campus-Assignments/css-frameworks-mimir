import { Outlet, Link } from "@tanstack/react-router";
import "./App.css";

function App() {
  return (
    <>

      <main>
        <Outlet />
      </main>

      <footer>
        <small className="text-red-400">Created with ❤️ by team Mimir</small>
      </footer>
    </>
  );
}

export default App;
