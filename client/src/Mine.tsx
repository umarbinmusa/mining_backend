import { useQuery } from '@apollo/client';
import { GET_TASKS_QUERY } from "./Queries"; 

interface Task {
  id: string;
  url: string;
  verify: string; // adjust types as necessary
}

const Mine = () => {
  const { loading, error, data } = useQuery(GET_TASKS_QUERY);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error fetching tasks: {error.message}</p>;

  return (
    <div className="bg-black flex justify-center">
      <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-10">
   
        </div>

        <div className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0">
          <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]">
            <div className="px-4 mt-6 flex justify-between gap-2">
              <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative"></div>
            </div>

            <div className="px-4 mt-4 flex justify-center"></div>
            <div>
              <ul>
                {data.getTasks.map((task: Task) => (
                  <li key={task.id}>
                    <a href="/www.youtube.com" target='blank' rel="noopener noreferrer">
                      <strong>URL:</strong> {task.url} <br />
                    </a>
                    <strong>Verify:</strong> {task.verify}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
       
      </div>
    </div>
  );
};

export default Mine;
