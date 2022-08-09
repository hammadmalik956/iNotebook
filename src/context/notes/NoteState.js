import React, { useState } from "react";

import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const initialNotes =
    [
        {
          "_id": "62eb9dd50ad67c3cff66b13a",
          "user": "62e90781b182ae34f9968b2c",
          "title": "Sabaat",
          "description": "TV Serial",
          "tag": "Personal",
          "date": "2022-08-04T10:22:13.385Z",
          "__v": 0
        },
        {
          "_id": "62f0f897fd3d00052058cbac",
          "user": "62e90781b182ae34f9968b2c",
          "title": "Raqs E Bismil",
          "description": "TV Serial",
          "tag": "Personal",
          "date": "2022-08-08T11:50:47.260Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]= useState(initialNotes);


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
        <NoteContext.Provider value={{notes,setNotes}}>
          {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;