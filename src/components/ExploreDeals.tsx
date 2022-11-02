// import React from 'react'
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DEALS } from "../data/data";
import Card from "./Card";

function ExploreDeals() {
  return (
    <div className="mx-3">
      <div>
        <div className="mb-8">
          <h3 className="introTitle">Daily deals just for you</h3>
          <div className="viewAll">
            <p className="">
              View all{" "}
              <span className=" ml-2">
                <ArrowForwardIcon />
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
          {DEALS?.map((obj, index: number) => (
            <div key={index}>
              <Card itemDetails={obj} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreDeals;
