import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
const CREATE_TASK_MUTATION = gql `
  mutation CreateTask($url: String!, $verify: String!) {
    create_task(url: $url, verify: $verify) {
      verify
      url
    }
  }
`;
const Task = () => {
    const navigate = useNavigate();
    const [url, setUrl] = useState('');
    const [verify, setVerify] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [createTask, { loading }] = useMutation(CREATE_TASK_MUTATION, {
        onCompleted: (data) => {
            if (data.create_task) {
                setUrl('');
                setVerify('');
                navigate('/Mine');
            }
            else {
                setErrorMessage('Failed to create task.');
            }
        },
        onError: (error) => {
            setErrorMessage('An error occurred. Please try again.');
            console.error('GraphQL error:', error);
        },
    });
    // Explicitly type the parameter 'e'
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!url || !verify) {
            setErrorMessage('All fields are required.');
            return;
        }
        try {
            await createTask({
                variables: {
                    url: url,
                    verify: verify,
                },
            });
        }
        catch (error) {
            setErrorMessage('An unexpected error occurred.');
            console.error('Error creating task:', error);
        }
    };
    return (_jsx("div", { className: "w-full p-10 bg-slate-950", children: _jsxs("form", { onSubmit: handleFormSubmit, className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4", children: [errorMessage && _jsx("p", { className: "text-red-600", children: errorMessage }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: "Enter URL" }), _jsx("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", type: "text", placeholder: "www.example.com", value: url, onChange: (e) => setUrl(e.target.value) })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: "Task Name" }), _jsx("input", { className: "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline", placeholder: "example YOUTUBE", value: verify, onChange: (e) => setVerify(e.target.value) })] }), _jsx("div", { className: "flex items-center justify-between", children: _jsx("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", type: "submit", disabled: loading, children: loading ? 'Creating...' : 'Create Task' }) })] }) }));
};
export default Task;
