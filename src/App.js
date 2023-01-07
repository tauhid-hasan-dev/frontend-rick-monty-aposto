import './App.css';
import Locations from './components/lists/Locations';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/router';
function App() {
  return (
    <div className="px-5 lg:px-20 ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
