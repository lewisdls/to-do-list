import { useState, useEffect } from "react";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import HandleTask from "./HandleTask";

const API_URL = "http://localhost:8080/tasks";

const Task = ({ id, title, description, isChecked }) => {
  const [isMarked, setIsMarked] = useState(isChecked);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    setIsMarked(isChecked);
  }, []);

  const handleCheckbox = () => {
    setIsMarked(!isMarked);
    axios
      .put(`${API_URL}/${id}`, { isChecked: !isMarked })
      .catch((error) => console.error(error));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsFormOpen(false);
  };

  const handleDelete = () => {
    axios.delete(`${API_URL}/${id}`).catch((error) => console.error(error));
    window.location.reload();
  };

  return (
    <div className="bg-[#fef8de] p-6 rounded-md flex flex-col gap-4 h-fit">
      <div className="flex flex-col gap-3">
        <h2 className={`text-xl font-medium ${isMarked && "line-through"}`}>
          {title}
        </h2>
        {description && (
          <p className={`leading-relaxed ${isMarked && "line-through"}`}>
            {description}
          </p>
        )}
      </div>
      <div className="flex items-center mt-auto text-lg">
        <div
          className={`${
            isMarked ? "text-inherit" : "text-[#a5a293]"
          } flex items-center gap-1 cursor-pointer`}
          onClick={handleCheckbox}
        >
          <input
            type="checkbox"
            checked={isMarked}
            onChange={handleCheckbox}
            className="cursor-pointer"
          />
          <label htmlFor="" className="text-sm cursor-pointer">
            Listo
          </label>
        </div>
        <div className="flex items-center justify-end gap-2 w-full">
          <div
            className="cursor-pointer"
            onClick={() => setIsFormOpen(!isFormOpen)}
          >
            <FaRegEdit />
          </div>
          <div className="cursor-pointer" onClick={handleDelete}>
            <FaRegTrashAlt />
          </div>
        </div>
      </div>
      <HandleTask
        type="Editar"
        defTitle={title}
        defDescription={description}
        id={id}
        isOpen={isFormOpen}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default Task;
