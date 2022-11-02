// import { useState } from 'react'
// import { Link } from 'react-router-dom'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BRANDS } from "../data/data";

function ExploreBrands() {
  return (
    <div className="brandContainer">
      <div>
        <div className="mb-8">
          <h3 className="introTitle">Explore popular brands</h3>
          <div className="viewAll">
            <p className="">
              View all{" "}
              <span className=" ml-2">
                <ArrowForwardIcon />
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 w-fit mx-auto">
          {BRANDS.map(({ name, image }, index: number) => (
            <div key={index}>
              <div className="exploreBrandItem">
                <img src={image} alt="michaelkors" className="brandImage" />
                <div className="brandViewContainer">
                  <p className="brandView">View brand</p>
                  <span className="brandViewLine"></span>
                </div>
              </div>
              <div>
                <p className="brandTitle">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreBrands;
