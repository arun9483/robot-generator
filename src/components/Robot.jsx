import React, { useCallback } from 'react';
import './Robot.css';

function Robot({ title, onDelete }) {
  const url = `https://robohash.org/${title}.png`;
  const deleteHandler = useCallback(
    (event) => {
      onDelete(title);
    },
    [title, onDelete]
  );
  return (
    <span className="robot-container">
      <img src={url} alt={title} />
      <button className="destroy" onClick={deleteHandler} />
    </span>
  );
}

export default Robot;
