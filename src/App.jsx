import "./App.css";
import { HomeOutlined, StepBackwardOutlined } from "@ant-design/icons";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
function App() {
  return (
    <div className="body-container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
