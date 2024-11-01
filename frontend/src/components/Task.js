import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const Task = () => {
  const [isMarked, setIsMarked] = useState(false);

  return (
    <div className="bg-[#fef8de] p-6 rounded-md flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h2 className={`text-xl font-medium ${isMarked && "line-through"}`}>
          Primer task
        </h2>
        <p className={`leading-relaxed ${isMarked && "line-through"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          expedita dicta consequuntur autem ut.
        </p>
      </div>
      <div className="flex items-center text-lg">
        <div
          className={`${
            isMarked ? "text-inherit" : "text-[#a5a293]"
          } flex items-center gap-1 cursor-pointer`}
          onClick={() => {
            setIsMarked(!isMarked);
          }}
        >
          <input
            type="checkbox"
            checked={isMarked}
            name=""
            id=""
            className="cursor-pointer"
          />
          <label htmlFor="" className="text-sm cursor-pointer">
            Listo
          </label>
        </div>
        <div className="flex items-center justify-end gap-2 w-full">
          <div className="cursor-pointer">
            <FaRegEdit />
          </div>
          <div className="cursor-pointer">
            <FaRegTrashAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
