import React from "react";
import { MdClose } from "react-icons/md";
const Edit = ({
  setEditModel,
  editModel,
  index,
  item,
  handleUpdate,
  editInputTxt,
  setEditInputTxt,
  editTxtArea,
  setEditTxtArea,
}) => {
  return (
    <div className="edit-main">
      <MdClose
        className="edit-close"
        onClick={() => {
          setEditModel(false);
        }}
      />
      <div className="top">
        <label>Task Name:</label>
        <input
          className="edit-text"
          type="text"
          value={editInputTxt}
          onChange={(e) => setEditInputTxt(e.target.value)}
        />
      </div>
      <div className="bottom">
        <label>Task Description:</label>
        <textarea
          className="edit-desc"
          rows="10"
          value={editTxtArea}
          onChange={(e) => setEditInputTxt(e.target.value)}
        />
      </div>

      <button className="edit-btn" onClick={() => handleUpdate(index)}>
        Update
      </button>
    </div>
  );
};

export default Edit;
