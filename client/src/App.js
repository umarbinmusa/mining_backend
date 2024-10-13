import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Friends from "./Friends";
import Mine from "./Mine";
import Task from "./Task";

const App = ()  => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="friends" element={<Friends />} />
        <Route path="Mine" element={<Mine />} />
        <Route path="Task" element={<Task />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
