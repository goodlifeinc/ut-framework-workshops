import { Outlet, Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="App">
            <h1>Demo App</h1>
            <ul>
                <li>
                    <Link to="login">Login</Link>
                </li>
                <li>
                    <Link to="public">Public</Link>
                </li>
                <li>
                    <Link to="protected">Protected</Link>
                </li>
                <li>
                    <Link to="product">Product</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default HomePage;
