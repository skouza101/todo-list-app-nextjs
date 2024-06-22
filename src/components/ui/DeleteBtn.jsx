import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteBtn = () => {
  return (
    <IconButton aria-label="delete">
      <DeleteIcon className="text-red-500" />
    </IconButton>
  );
};

export default DeleteBtn;
