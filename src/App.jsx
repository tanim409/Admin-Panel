import DashBoard from "./component/DashBoard";
import { BrowserRouter } from "react-router-dom";
import Routing from "./component/Routing";
function App() {
  return (
    <>
      <BrowserRouter>
        <DashBoard />
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
