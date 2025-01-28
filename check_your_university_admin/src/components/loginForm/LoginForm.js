//импорт для отслеживания ввода
import {useState} from "react";

//импорт стилей для полей ввода
import "./style.css";

const LoginForm = ({ onLogin, loginError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <h1>Вход на сайт происходит по корпоративному логину</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Вход</button>
        {loginError && (
          <p className="error">Введен неверный логин или пароль. Повторите попытку.</p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;