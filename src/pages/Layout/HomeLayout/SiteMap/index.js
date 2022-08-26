import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import data from "./data";
import Header from "../Header";
import "./SiteMap.css";
import SiteMap from "./SiteMap";
import { Box } from "@mui/material";

const SitemapPage = () => {
  return (
    <Fragment>
      <Header />
      <Box sx={{
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
      }}>
        <nav style={{ margin: "6rem 2rem" }} className="primary">
          <h1 style={{ margin: "2rem 0" }}>Sitemap</h1>
          <ul>
            <li id="home">
              <Link to="/">{data.name}</Link>
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
