import React from "react";
// import { robots } from "./Robot";

// let x = [];

// const display = x.map((ele) => {});

const Card = ({ robots }) => {
  // console.log(robots);
  // x = robots;
  return (
    <div className="cf pa2 main-div pa2">
      {robots.map((ele) => {
        return (
          <div
            className="tc grow bg-green ba br2 w-100 w-50-m w-25-l mw5 mv4 mr3"
            key={ele.id}
          >
            <img src={`https://robohash.org/${ele.name}?200*200`} alt="hello" />
            <h3>{ele.name}</h3>
            <p>{ele.email}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
