import { Box } from "@mui/material";
import React, { Fragment } from "react";
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from "react-router-dom";
import Menu from "../Header/Menu";
import data from "./data";
import "./SiteMap.css";


const SiteMap = ({ data }) => {
  return (
    <div>
      {data.map(item => <li key={item.id_permission}><Link to="/"><span className="material-icons" style={{ marginRight: '5px' }}>{item.icon}</span>{item.permission_key}</Link></li>)}
    </div>
  )
}

const SitemapPage = () => {
  return (
    <Fragment>
      <Menu />
      <Box sx={{
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
      }}>
        <nav style={{ margin: "2rem 2rem" }} className="primary">
          <h1 style={{ margin: "2rem 0", color: "#00A79D" }}>Sitemap</h1>
          <ul>
            <li id="home">
              <Link to="/" style={{ color: "#00A79D" }}><GiShoppingCart style={{ fontSize: '18px' }} /> {data.name}</Link>

              <ul>
                {data.items.map((item) => (
                  <li key={item.id_menu}>
                    <Link to="/"><span className="material-icons" style={{ marginRight: '5px' }}>{item.icon}</span>{item.menu_name}</Link>
                    <ul>
                      <SiteMap data={item.permission} />
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav></Box>
    </Fragment>
  );
};

export default SitemapPage;


