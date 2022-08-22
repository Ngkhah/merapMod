import React from "react";
import "./Profile.css";
import { TiCamera } from "react-icons/ti";
import { Col, Row } from "antd";
import "antd/dist/antd.css";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div className="profile">
        <div className="profileCover">
          <img src="./img/cover2.jpg" alt="" />
        </div>
      </div>
      <div className="profileForm">
        <Row>
          <Col span={7}>
            <div className="profileAvatar">
              <img className="avatar" src="./img/ava2.png" alt="" />
              <div className="updateAva">
                <TiCamera />
              </div>
            </div>
          </Col>
          <Col span={7}>
            <div className="title">
              <h1>Khanh Nguyen</h1>
              <h4>Front-end Developer</h4>
              <h5>Fresher</h5>
              
            </div>
          </Col>
          <Col span={10}></Col>
        </Row>
      </div>
    </div>
  );
};

export default ProfilePage;
