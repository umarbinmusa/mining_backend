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
    return (
  <div className="w-full p-10 bg-slate-950">
    <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Enter URL</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="www.example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Task Name</label>
        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="example YOUTUBE"
          value={verify}
          onChange={(e) => setVerify(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Task'}
        </button>
      </div>
    </form>
  </div>
);

    };
export default Task;
