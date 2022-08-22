import React from "react";
import { Link } from "react-router-dom";
import GifNotFound from "./GifNotFound";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="notfound-page">
        <div className="notfound-page-404">
          <div style={{ alignItems: "center", width: "215px" }}>
            <GifNotFound />
            <div className="notFound">
              <h2>404</h2>
              <h4>Không tìm thấy trang</h4>
              <Link to="/"><button className="btn-notfound btn btn-stripe">
                Trở về DashBoard
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
