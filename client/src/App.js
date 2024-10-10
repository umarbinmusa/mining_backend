import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Task from "./Task";
import Mine from "./Mine";
import Friends from "./Friends";
const App = () => {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/Task", element: _jsx(Task, {}) }), _jsx(Route, { path: "/Mine", element: _jsx(Mine, {}) }), _jsx(Route, { path: "/Friends", element: _jsx(Friends, {}) }), _jsx(Route, { index: true, element: _jsx(Layout, {}) })] }) }));
};
export default App;
