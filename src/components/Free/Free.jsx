import React from "react";

import icon from "../../assets/icon.png";
import super1 from "../../assets/super1.png";
import release2 from "../../assets/release2.png";

import { Card } from "../Card/Card";

export const Free = () => {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Free NFT for early birds</h2>
          <p className="description">
            Sign up today and you"ll get a free NFT when we launch
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card-first">
          <Card
            image={super1}
            title="Purple Man"
            series="Floop Series"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card-second">
          <Card
            image={release2}
            title="Woman"
            series="Gloop Series"
            price={3.95}
            tag={12983}
            time={2}
          />
        </div>
      </div>
    </div>
  )
}
