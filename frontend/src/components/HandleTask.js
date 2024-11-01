import { useState } from "react";

const HandleTask = ({ type, isOpen, handleCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div
      className={`${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-[#00000060] fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 transition-all`}
    >
      <form
        action=""
        className="flex flex-col bg-white p-8 rounded-lg w-[500px]"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-xl font-medium">
              Título
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ingrese un título"
              name="title"
              className="text-sm p-3 rounded-md bg-[#F8F9F9]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-xl font-medium">
              Descripción
            </label>
            <textarea
              placeholder="Ingrese una descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              className="text-sm p-3 rounded-md bg-[#F8F9F9]"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 mt-8">
          <button onClick={handleCancel}>Cancelar</button>
          <button className="rounded-md px-4 py-1 bg-[#68665D] text-white">
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
};

export default HandleTask;
