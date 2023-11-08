import React, { useState } from "react";

const List2 = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setIsLogin(false);
    setMessage("Welocme re");
  };
  const handleClick2 = () => {
    setIsLogin(true);
    setMessage("Visit again re");
  };

  return (
    <>
      {isLogin ? (
        <div>
          <button onClick={handleClick}>LLogINN</button>
        </div>
      ) : (
        <div>
          <button onClick={handleClick2}>LLogOUTT</button>
        </div>
      )}
      <h4>{message}</h4>
    </>
  );
};

export default List2;
