import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

import ProtectedPage from "./ProtectedPage";
import PublicPage from "./PublicPage";

const NotFound = () => <div>Page not found</div>;

function App() {
    const [token, setToken] = useState(false);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route
                        path="login"
                        exact
                        element={<LoginPage setToken={setToken} />}
                    />
                    <Route path="public" exact element={<PublicPage />} />
                    <Route
                        path="protected"
                        exact
                        element={
                            <ProtectedPage token={token}>
                                <p>Some protected</p>
                            </ProtectedPage>
                        }
                    />
                    <Route
                        path="product"
                        exact
                        element={
                            <ProtectedPage token={token}>
                                <p>Another protected</p>
                            </ProtectedPage>
                        }
                    />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
