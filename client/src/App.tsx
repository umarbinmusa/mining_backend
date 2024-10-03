import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Task from "./Task";
import Mine from "./Mine";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Task" element={<Task />}/>
        <Route path="/Mine" element={<Mine />}/>
          <Route index element={<Layout />} >
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
