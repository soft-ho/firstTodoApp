import React from "react";
import { MdClose } from "react-icons/md";
const Add = ({
  setAddModel,
  addInputTxt,
  setAddInputTxt,
  addTxtArea,
  setTxtArea,
  handleSave,
}) => {
  const handleClose = () => {
    setAddModel(false);
  };
  return (
    <div className="add-main">
      <MdClose className="add-close" onClick={handleClose} />

      <input
        className="add-text"
        type="text"
        value={addInputTxt}
        onChange={(e) => {
          setAddInputTxt(e.target.value);
        }}
      />
      <textarea
        className="add-desc"
        rows="10"
        value={addTxtArea}
        onChange={(e) => {
          setTxtArea(e.target.value);
        }}
      ></textarea>

      <button className="add-btn" onClick={handleSave}>
        Add New
      </button>
    </div>
  );
};

export default Add;
