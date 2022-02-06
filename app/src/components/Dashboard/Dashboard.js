import { Link } from "react-router-dom";

function Dashboard() {
    return(
    <>
      <h2>Dashboard</h2>
      <nav>
          <Link to="/login">Login </Link>
          <Link to="/matches">Matchs </Link>
          <Link to="/users">Users</Link>
      </nav>
    </>
    );
}

export default Dashboard;
