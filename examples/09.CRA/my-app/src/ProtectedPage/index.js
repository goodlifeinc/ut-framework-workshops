import { Navigate } from "react-router-dom";

function ProtectedPage({ token, children }) {
    if (!token) return <Navigate to="/login" />;

    return (
        <div>
            <h2>Protected route</h2>
            {children}
        </div>
    );
}

export default ProtectedPage;
