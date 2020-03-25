import React, { useContext } from "react";
import MProvider from "../provider/MessageProvider";

const ProFunc = () => {
  const messContext = useContext(MProvider);
  return (
    <div>
      <p>나는 함수 컴포넌트</p>
      <p>{messContext.message}</p>
    </div>
  );
};

export default ProFunc;
