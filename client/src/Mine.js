import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useQuery } from '@apollo/client';
import { GET_TASKS_QUERY } from "./Queries";
const Mine = () => {
    const { loading, error, data } = useQuery(GET_TASKS_QUERY);
    if (loading)
        return _jsx("p", { children: "Loading tasks..." });
    if (error)
        return _jsxs("p", { children: ["Error fetching tasks: ", error.message] });
    return (_jsxs("div", { className: "bg-black flex justify-center", children: [_jsxs("div", { className: "w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl", children: [_jsx("div", { className: "px-4 z-10" }), _jsx("div", { className: "flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0", children: _jsxs("div", { className: "absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]", children: [_jsx("div", { className: "px-4 mt-6 flex justify-between gap-2", children: _jsx("div", { className: "bg-[#272a2f] rounded-lg px-4 py-2 w-full relative" }) }), _jsx("div", { className: "px-4 mt-4 flex justify-center" }), _jsx("div", { children: _jsx("ul", { children: data.getTasks.map((task) => (_jsxs("li", { children: [_jsxs("a", { href: "/www.youtube.com", target: 'blank', rel: "noopener noreferrer", children: [_jsx("strong", { children: "URL:" }), " ", task.url, " ", _jsx("br", {})] }), _jsx("strong", { children: "Verify:" }), " ", task.verify] }, task.id))) }) })] }) })] }), _jsx("div", { className: "fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs" })] }));
};
export default Mine;
