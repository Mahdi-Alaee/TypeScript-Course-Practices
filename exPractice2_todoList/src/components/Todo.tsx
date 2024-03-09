import { FaTrash } from "react-icons/fa";

interface TodoProps {
  title: string;
  isComplete: boolean;
  id: string;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

function Todo({ id, title, isComplete, onComplete, onDelete }: TodoProps) {
  return (
    <div className="Todo" key={id} onClick={onComplete.bind(null, id)}>
      <p
        className={`${isComplete ? "completed" : ""}`} // or completed className
      >
        {title}
      </p>
      <div onClick={onDelete.bind(null, id)}>
        <FaTrash style={{ color: "red" }} />
      </div>
    </div>
  );
}

export default Todo;
