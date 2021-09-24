import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles/index.scss";

import "./styles/custom-slide-item.scss";

// swiper styling
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
