import "./App.css";
import { IoAdd } from "react-icons/io5";
import Task from "./components/Task";
import HandleTask from "./components/HandleTask";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setTasks(res.data))
      .catch((error) => console.error(error));
  }, []);

  const handleCancel = (e) => {
    e.preventDefault();
    setIsFormOpen(false);
  };

  return (
    <div className="py-8 px-6 md:px-12 lg:px-24">
      <header className="flex items-center justify-between mb-8">
        <p className="text-2xl font-bold">To-Do List</p>
        <div
          className="cursor-pointer border-gray-500 border-2 rounded-lg py-1 px-3 flex items-center gap-1"
          onClick={() => setIsFormOpen(true)}
        >
          <p className="text-md">Crear task</p>
          <div className="text-2xl">
            <IoAdd />
          </div>
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              isChecked={task.isChecked}
            />
          ))
        ) : (
          <p>No tienes nada que hacer :c</p>
        )}
      </main>
      <HandleTask
        type="Crear"
        isOpen={isFormOpen}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default App;
