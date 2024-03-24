
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { AuthProvider } from "./store/auth.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
