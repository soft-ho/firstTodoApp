import React from "react";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineAccessTime, MdOutlineDeleteSweep } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { TiAttachment } from "react-icons/ti";
import Edit from "./Edit";

const Card = ({
  index,
  name,
  description,
  handleDelete,
  setEditModel,
  editModel,
  item,
  editInputTxt,
  setEditInputTxt,
  editTxtArea,
  setEditTxtArea,
  filteredList,
  handleUpdate,
}) => {
  return (
    <>
      {editModel ? (
        <Edit
          setEditModel={setEditModel}
          editModel={editModel}
          index={index}
          item={item}
          filteredList={filteredList}
          handleUpdate={handleUpdate}
          editInputTxt={editInputTxt}
          setEditInputTxt={setEditInputTxt}
          setEditTxtArea={setEditTxtArea}
          editTxtArea={editTxtArea}
        />
      ) : (
        <>
          <div className="main-card" key={index}>
            <div className="top-card">
              <h3 className="name-text">{name}</h3>

              <p className="desc-text">{description}</p>
            </div>
            <div className="bottom-card">
              <div className="left">
                <FaRegComment className="comment" />
                <MdOutlineAccessTime className="time" />

                <TiAttachment className="atta" />
              </div>
              <div className="right">
                <TbEdit className="edit" onClick={() => setEditModel(true)} />
                <MdOutlineDeleteSweep
                  className="delete"
                  onClick={() => handleDelete(index)}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Card;
