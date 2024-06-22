// "use client";
import EastIcon from "@mui/icons-material/East";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import UpdateBtn from "@/components/ui/UpdateBtn";
const Item = ({ task, deleteTodo, updateTodo, updateTask }) => {
  return (
    <div>
      <div className="">
        <div role="alert" className="alert">
          <div className="stroke-info shrink-0 w-6 h-6">
            <EastIcon />
          </div>
          <span>{task.task}</span>
          <div className="flex gap-1">
            <div onClick={() => updateTask(task.id)}>
              <UpdateBtn updateTodo={updateTodo} updateTask={updateTask} />
            </div>
            <IconButton aria-label="delete" onClick={() => deleteTodo(task.id)}>
              <DeleteIcon className="text-red-500" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
