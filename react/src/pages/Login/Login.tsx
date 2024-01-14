import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigator = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notMatched, setNotMatched] = useState(false);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const url = new URL("users", "http://localhost:3000");
          url.searchParams.append("userName", username);
          url.searchParams.append("password", password);
          fetch(url)
            .then(async (response) => {
              const data = await response.json();
              if (data.length > 0) {
                navigator("/");
              } else {
                setNotMatched(true);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <input
          placeholder="user name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Login</button>
        {notMatched && <> Cannot find the user </>}
      </form>
    </>
  );
}
