import "./App.css";
import { IoAdd } from "react-icons/io5";
import Task from "./components/Task";
import HandleTask from "./components/HandleTask";
import { useState } from "react";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCancel = (e) => {
    e.preventDefault();
    setIsFormOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-8 px-6 md:px-12 lg:px-24">
      <header className="flex items-center justify-between mb-8">
        <p className="text-2xl font-bold">To-Do List</p>
        <div
          className="text-3xl cursor-pointer"
          onClick={() => setIsFormOpen(true)}
        >
          <IoAdd />
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </main>
      <HandleTask type="Add" isOpen={isFormOpen} handleCancel={handleCancel} />
    </div>
  );
}

export default App;
