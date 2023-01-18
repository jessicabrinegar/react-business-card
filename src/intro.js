import React from "react";
import './App.css';
import self from "./img/self-pic.jpg";

const Intro = () => {
    return (
        <div className="d-flex flex-column justify-content-center">
        <img className="rounded" src={self} id="self-pic"></img>
        <h4 className="text-light text-center mb-0 mt-1">Jessica Brinegar</h4>
        <p className="text-center m-0" id="title">Web Developer</p>
        <p className="text-light text-center mb-1" id="website">
        <a className="text-reset text-decoration-none" href="https://github.com/jessicabrinegar">jessicabrinegar.website</a>
        </p>
        <div className="btn-group btn-group-sm justify-content-center" role="group">
            <a href="mailto:jessicabrinegar@outlook.com"><button className="my-btn mx-1 rounded border-0" type="button">
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" width="15" height="14" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg> Email</button></a>
        </div>
        </div>
    )
}
export default Intro;