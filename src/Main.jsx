import React from "react";
import { MdClose } from "react-icons/md";
import Card from "./Card";

const Main = ({
  list,
  setList,
  handleDelete,
  setEditModel,
  editModel,
  editInputTxt,
  setEditInputTxt,
  editTxtArea,
  setEditTxtArea,
  searchText,
  setSearchText,
  filteredList,
  handleUpdate,
}) => {
  return (
    <div className="main-wrapper">
      <div className="todo">
        <div className="todo-main">
          <div className="todo-top">
            <h3 className="todo-title1">To Do </h3>
            <MdClose className="todo-close" />
          </div>
          <div className="todo-mid">
            {filteredList.map((item) => (
              <Card
                key={item.id}
                index={item.id}
                item={item}
                name={item.TaskName}
                description={item.TaskDescription}
                handleDelete={handleDelete}
                editModel={editModel}
                setEditModel={setEditModel}
                editInputTxt={editInputTxt}
                setEditInputTxt={setEditInputTxt}
                editTxtArea={editTxtArea}
                setEditTxtArea={setEditTxtArea}
                filteredList={filteredList}
                handleUpdate={handleUpdate}
              />
            ))}
          </div>
          <div className="todo-bottom"></div>
        </div>
      </div>
      <div className="doing">
        <div className="todo-main">
          <div className="todo-top">
            <h3 className="todo-title1">Doing </h3>
            <MdClose className="todo-close" />
          </div>
          <div className="todo-mid">
            <Card />
          </div>
          <div className="todo-bottom"></div>
        </div>
      </div>
      <div className="done">
        <div className="todo-main">
          <div className="todo-top">
            <h3 className="todo-title1">Done </h3>
            <MdClose className="todo-close" />
          </div>
          <div className="todo-mid">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="todo-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
