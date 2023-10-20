import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Add from "./Add";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const id = nanoid();
  const [addModel, setAddModel] = useState(false);
  const [editModel, setEditModel] = useState(false);
  const [addInputTxt, setAddInputTxt] = useState("");
  const [addTxtArea, setTxtArea] = useState("");
  const [editInputTxt, setEditInputTxt] = useState("");
  const [editTxtArea, setEditTxtArea] = useState("");

  const [list, setList] = useState([
    { id: id, TaskName: "addInputTxt", TaskDescription: "addTxtArea" },
    { id: id, TaskName: "yoy", TaskDescription: "mariam" },
  ]);
  const [searchText, setSearchText] = useState("");

  const handleSave = () => {
    const newtask = {
      id: id,
      TaskName: addInputTxt,
      TaskDescription: addTxtArea,
    };
    const templist = [...list, newtask];
    setList(templist);
    console.log(templist);
    console.log(list);

    setAddInputTxt("");
    setTxtArea("");
    setAddModel(false);
  };
  const handleDelete = (index) => {
    console.log(index);
    const newlist = list.filter((item) => item.id !== index);
    setList(newlist);
  };
  useEffect(() => {
    console.log(list);
    setEditInputTxt(addInputTxt);
    setEditTxtArea(addTxtArea);
  }, [list]);
  const handleUpdate = (id) => {
    const newlist = list.filter((item) => item.id !== id);
    console.log(newlist);
    const newtask = {
      id: id,
      TaskName: editInputTxt,
      TaskDescription: editTxtArea,
    };
    console.log(newtask);
    const temlist = [...newlist, newtask];
    console.log(temlist);
    setList(temlist);
    setEditModel(false);
  };
  return (
    <div className="container">
      <div className="header">
        <Header searchText={searchText} handleSearchNote={setSearchText} />
      </div>
      <div className="sidebar">
        <Sidebar setAddModel={setAddModel} />
      </div>
      <div className="main">
        {addModel ? (
          <Add
            setAddModel={setAddModel}
            addInputTxt={addInputTxt}
            setAddInputTxt={setAddInputTxt}
            addTxtArea={addTxtArea}
            setTxtArea={setTxtArea}
            handleSave={handleSave}
          />
        ) : (
          <Main
            list={list}
            setList={setList}
            filteredList={list.filter((item) =>
              item.TaskName.toLowerCase().includes(searchText)
            )}
            handleDelete={handleDelete}
            editModel={editModel}
            setEditModel={setEditModel}
            searchText={searchText}
            setSearchText={setSearchText}
            handleUpdate={handleUpdate}
            editInputTxt={editInputTxt}
            setEditInputTxt={setEditInputTxt}
            setEditTxtArea={setEditTxtArea}
            editTxtArea={editTxtArea}
          />
        )}
      </div>
    </div>
  );
}

export default App;
