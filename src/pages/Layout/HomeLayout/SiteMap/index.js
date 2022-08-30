import React, { Fragment } from "react";
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from "react-router-dom";
import data from "./data";
import "./SiteMap.css";

import { Box } from "@mui/material";
import Menu from "../Header/Menu";


const SiteMap = ({data}) => {
  return (
    <div>
      {data.map(item => <li><Link to="/">{item.permission_key}</Link></li>)}
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
          <h1 style={{ margin: "2rem 0" }}>Sitemap</h1>
          <ul>
            <li id="home">
              <Link to="/"><GiShoppingCart style={{fontSize:'18px'}}/> {data.name}</Link>
              <ul>
                {data.items.map((item) => (
                  <li key={item.menu_name}>
                    <Link to="/"> {item.menu_name}</Link>
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


