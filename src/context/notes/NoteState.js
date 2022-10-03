import React, { useState } from "react";

import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "62eb9dd50ad67c3cff66b13a",
      user: "62e90781b182ae34f9968b2c",
      title: "Sabaat",
      description: "TV Serial",
      tag: "Personal",
      date: "2022-08-04T10:22:13.385Z",
      __v: 0,
    },
    {
      _id: "62f0f897fd3d00052058cbac",
      user: "62e90781b182ae34f9968b2c",
      title: "Raqs E Bismil",
      description: "TV Serial",
      tag: "Personal",
      date: "2022-08-08T11:50:47.260Z",
      __v: 0,
    },
    {
      _id: "62f0f897fd33d0d052058cbac",
      user: "62e90781b182ae34f9968b2c",
      title: "Raqs E Bismil",
      description: "TV Serial",
      tag: "Personal",
      date: "2022-08-08T11:50:47.260Z",
      __v: 0,
    },
    {
      _id: "62f0f897fd3d013052058cbac",
      user: "62e90781b182ae34f9968b2c",
      title: "Raqs E Bismil",
      description: "TV Serial",
      tag: "Personal",
      date: "2022-08-08T11:50:47.260Z",
      __v: 0,
    },
    {
      _id: "62f10f8974d3d00052058cbac",
      user: "62e90781b182ae34f9968b2c",
      title: "Raqs E Bismil",
      description: "TV Serial",
      tag: "Personal",
      date: "2022-08-08T11:50:47.260Z",
      __v: 0,
    },
    {
      _id: "62f0f897f13d030052058cbac",
      user: "62e90781b182ae34f9968b2c",
      title: "Raqs E Bismil",
      description: "TV Serial",
      tag: "Personal",
      date: "2022-08-08T11:50:47.260Z",
      __v: 0,
    },
    {
      _id: "62f0f8974d13d00052058cbac",
      user: "62e90781b182ae34f9968b2c",
      title: "Raqs E Bismil",
      description: "TV Serial",
      tag: "Personal",
      date: "2022-08-08T11:50:47.260Z",
      __v: 0,
    },
    {
      _id: "62f0f897f53d000542058cbac",
      user: "62e90781b182ae34f9968b2c",
      title: "Raqs E Bismil",
      description: "TV Serial",
      tag: "Personal",
      date: "2022-08-08T11:50:47.260Z",
      __v: 0,
    },
    {
      _id: "62f0f897fd3f010052058cbac",
      user: "62e90781b182ae34f9968b2c",
      title: "Raqs E Bismil",
      description: "TV Serial",
      tag: "Personal",
      date: "2022-08-08T11:50:47.260Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialNotes)

  // Add a Note
  const addNote = (title,description,tag) => {
    console.log("Adding a New Note");
    const note =  {
      _id: "62f0f897fd3f01032052058cbac",
      user: "62e90781b182ae34f9968b2c",
      title: title,
      description: description,
      tag: tag,
      date: "2022-08-08T11:50:47.260Z",
      __v: 0,
    };
    setNotes(notes.concat(note))
  };
  // Delete a Note
  const deleteNote = () => {

  };
  //Edit a Note
  const editNote = () => {

  };
  // const s1={
  //     "name": "Hammad",
  //     "class": "7c"
  // }
  // const [state,setState] = useState(s1);
  // const update =()=>{
  //     setTimeout(() => {
  //         setState({
  //             "name": "Malik Hammad",
  //             "class": "8c"
  //         })

  //     }, 2000);

  // }
  return (
    <NoteContext.Provider value={{ notes, setNotes,addNote,deleteNote,editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
