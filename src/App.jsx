import { Link, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Thanks">Remerciement</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;