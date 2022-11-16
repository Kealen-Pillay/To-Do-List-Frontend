import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import TaskScreen from "./components/TaskScreen";
import RegisterScreen from "./components/RegisterScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/tasks" element={<TaskScreen />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer limit={1}/>
    </>
  );
};

export default App;
