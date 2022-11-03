import React from 'react';
import {useRef, useState} from "react";

export const AccordionItem = ({ faq }) => {

  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const handleToggle = () => {
    setClicked((prev) => !prev)
  }

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <button className="button" onClick={handleToggle}>
        { faq.question }
        <span className="control">{clicked ? "-" : "+"}</span>
      </button>
      <div 
        ref={contentEl} 
        className="answer_wrapper"
        style={
          clicked
          ? {height: contentEl.current.scrollHeight}
          : {height: "0px"}
        }>
        <div className="answer">{ faq.answer }</div>
      </div>
    </li>
  )
}
