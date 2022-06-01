import { useState } from "react";

function LoginPage({ setToken }) {
    const [usernameValue, setUsername] = useState(false);
    const [passwordValue, setPassword] = useState(false);
    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                const body = {
                    grant_type: "client_credentials",
                    client_id: usernameValue,
                    client_secret: passwordValue,
                };
                var formBody = [];
                for (var property in body) {
                    var encodedKey = encodeURIComponent(property);
                    var encodedValue = encodeURIComponent(body[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");
                const backendResponse = await fetch(
                    "http://localhost:8004/rpc/login/token",
                    {
                        headers: {
                            "Content-Type":
                                "application/x-www-form-urlencoded;charset=UTF-8",
                        },
                        method: "POST",
                        body: formBody,
                    }
                );
                const json = await backendResponse.json();
                if (json.access_token) {
                    setToken(json.access_token);
                }
            }}
        >
            <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default LoginPage;
