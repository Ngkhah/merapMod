import { Col, Row } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>

      <div className="homePage--Responsive">
        <Row
          className="dashboard--menu"
          style={{ margin: "0" }}
          gutter={[16, 16]}
        >
          <Col span={6}>
            <Link to='/notfound'>
              <div className="dashboard--item">
                <div className="title--App">
                  <img src="./img/icon 1.png" alt="" />
                  <h3 style={{ textAlign: "center" }}>HRM</h3>
                </div>
              </div></Link>
          </Col>
          <Col span={6}>
            <Link to='/notfound'>
              <div className="dashboard--item">
                <div className="title--App">
                  <img src="./img/icon 4.png" alt="" />
                  <h3 style={{ textAlign: "center" }}>DMS</h3>
                </div>
              </div></Link>
          </Col>
          <Col span={6}>
            <Link to='/notfound'>
              <div className="dashboard--item">
                <div className="title--App">
                  <img src="./img/icon 3.png" alt="" />

                  <h3 style={{ textAlign: "center" }}>CRM</h3>
                </div>
              </div></Link>
          </Col>
          <Col span={6}>
            <Link to='/notfound'>
              <div className="dashboard--item">
                <div className="title--App">
                  <img src="./img/icon 2.png" alt="" />
                  <h3 style={{ textAlign: "center" }}>ECOMMERCE</h3>
                </div>
              </div></Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
