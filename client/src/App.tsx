import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Task from "./Task";
import Mine from "./Mine";
import Friends from "./Friends";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Task" element={<Task />}/>
        <Route path="/Mine" element={<Mine />}/>
        <Route path="/Friends" element={<Friends />}/>
          <Route index element={<Layout />} >
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
