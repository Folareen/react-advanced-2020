import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...state,
        isModalOpen: true,
        people: [...state.people, action.payload],
        modalContent: "Person added",
      };
    case "EMPTY":
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Pls enter a value",
      };
  }
};

const defaultState = {
  people: [],
  isModalOpen: false,
  ModalContent: "",
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { id: new Date().getTime().toString(), name };
    if (name) {
      dispatch({ type: "ADD_PERSON", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "EMPTY" });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit}>
        <div className="form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn">
            Add
          </button>
        </div>
      </form>
      {state.people &&
        state.people.map(({ name, id }) => {
          return (
            <div key={id}>
              <h4>{name}</h4>
            </div>
          );
        })}
    </>
  );
};

export default Index;
