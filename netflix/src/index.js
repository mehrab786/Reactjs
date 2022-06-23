import React from "react";
import  ReactDOM from "react-dom";
import Card from "./Card"; 
import Sdata from "./Sdata";
import "./index.css";

ReactDOM.render(
    <>
    <h1 className="heading_style">List of top Netflix series in 2022</h1>
        {Sdata.map((val)=> {
            return(
            <Card
            key={val.id}
            imgsrc={val.imgsrrc}
            title={val.tittle}
            sname={val.ssname}
            link={val.liink}
            />
            );
        })}
         
    </>

    ,document.getElementById('root'));