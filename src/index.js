import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // reportWebVitals가 실제로 존재하는지 확인

import Library from "./chapter_03/Library"; // 파일 경로가 올바른지 확인
import Clock from "./chapter_04/Clock"; // 파일 경로가 올바른지 확인
import CommentList from "./chapter_05/CommentList"; // 파일 경로가 올바른지 확인

// createRoot를 사용하여 root를 생성합니다.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // 이 함수가 제대로 정의되어 있는지 확인
