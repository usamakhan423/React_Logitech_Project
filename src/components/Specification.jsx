import React from "react";

import styles from "../style";
import { features, Physical, requirements, technical, tracking } from "../constants";

const Specification = () => {
  return (
    <div className="specification__container flex justify-between items-center flex-col p-20 bg-discount-gradient bg-black-gradient bg-gray-gradient ">
      <h1 className={`${styles.heading2} text-center py-10`}>Specification</h1>
      <div className="spec__content-container flex justify-between items-start gap-8">
        {Physical.map((item, index) => (
          <>
            {" "}
            <div className="left__container text-white flex flex-col px-20">
              <h3 className="text-white text-xl py-2">{item.title}</h3>
              <ul>
                <li className="text-gray-400 list-none flex flex-col justify-start items-start">
                  <a href={`#${item.height} text-white`}>Height : {item.height}</a>
                  <a href={`#${item.width}`}>Width : {item.width}</a>
                  <a href={`#${item.weight}`}>Weight :{item.weight}</a>
                </li>
              </ul>
              <div className="bottom__container py-2">
                {tracking.map((item, index) => (
                  <div className="tracking__content">
                    <h3 className="text-white text-xl py-2">{item.title}</h3>
                    <p className="w-80  py-2 text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="middle__container px-20">
              {technical.map((item, index) => (
                <div className="container text-gray-400 list-none flex flex-col justify-start items-start">
                  <h3 className="text-white text-xl py-2">{item.title}</h3>
                  <span>{item.sensor}</span>
                  <span>{item.technology}</span>
                  <span>{item.cableLength}</span>
                  <span>{item.resolution}</span>
                  <span>{item.connectivity}</span>
                </div>
              ))}
            </div>
            <div className="right__container">
              {features.map((item, index) => (
                <div className="top__container">
                <h3 className="text-white text-xl py-2">{item.title}</h3>
                <p className="w-80  py-2 text-gray-400">{item.description}</p>
                <p className="w-80 text-gray-400">{item.description}</p>
              </div>
              ))}

              <div className="bottom__container">
                <div className="requirements">
                  {requirements.map((item, index) => (
                    <div className="container text-white">
                      <h3 className="text-white text-xl py-2">{item.title}</h3>
                      <p className="w-80 text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Specification;
