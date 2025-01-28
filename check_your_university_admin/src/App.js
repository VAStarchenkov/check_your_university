// для отслеживания состояния аутенфикации
import {useState} from "react";

// импортируем основные компоненты
import LoginForm from "./components/loginForm/LoginForm";
import ExcelEditor from "./components/excelEditor/ExcelEditor";

// импортируем основные стили
import "./styles/main.css";

// набор логинов-паролей для входа
const credentials = [
  { username: "a", password: "a" },
  { username: "user", password: "password" }
];

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (username, password) => {
    const isValid = credentials.some(
      (cred) => cred.username === username && cred.password === password
    );
    if (isValid) {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="App">

      
      {!isAuthenticated ? (
        <LoginForm onLogin={handleLogin} loginError={loginError} />
      ) : (
        <ExcelEditor />
      )}
    </div>
  );
}

export default App;