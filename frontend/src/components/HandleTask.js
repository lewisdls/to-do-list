import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/tasks";

const HandleTask = ({
  type,
  id,
  defTitle,
  defDescription,
  isOpen,
  handleCancel,
}) => {
  const [title, setTitle] = useState(defTitle);
  const [description, setDescription] = useState(defDescription);

  const addTask = (e) => {
    e.preventDefault();
    axios
      .post(API_URL, { title, description })
      .catch((error) => console.error(error));
    window.location.reload();
  };

  const editTask = (e) => {
    e.preventDefault();
    axios
      .put(`${API_URL}/${id}`, { title, description })
      .catch((error) => console.error(error));
    window.location.reload();
  };

  return (
    <div
      className={`${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-[#00000060] fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 transition-all`}
    >
      <form
        onSubmit={type === "Crear" ? addTask : editTask}
        className="flex flex-col bg-white p-8 rounded-lg w-[500px]"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-xl font-medium">
              Título
            </label>
            <input
              type="text"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ingrese un título"
              name="title"
              className="text-sm p-3 rounded-md bg-[#f3f6f6]"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-xl font-medium flex gap-1 items-center"
            >
              Descripción{" "}
              <span className="text-sm font-normal text-gray-400">
                (opcional)
              </span>
            </label>
            <textarea
              placeholder="Ingrese una descripción"
              value={description || ""}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              className="text-sm p-3 rounded-md bg-[#f3f6f6]"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 mt-8">
          <button onClick={handleCancel}>Cancelar</button>
          <button className="rounded-md px-4 py-1 bg-[#68665D] text-white">
            {type}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HandleTask;
