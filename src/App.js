import './App.css';
import Locations from './components/lists/Locations';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/router';
function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
