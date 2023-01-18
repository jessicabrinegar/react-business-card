import React from "react";
import './App.css';
import github from "./img/GitHubIcon.png";
import twitter from "./img/TwitterIcon.png";
import linked from "./img/linkedin.png";

const About = () => {
    return (
        <div className="w-100 d-flex flex-column mb-5">
        <p className="text-light float-start m-0 p-0">About</p>
        <p className="text-light fw-lighter lh-sm">I have a B.S. in Biology with a professional background in healthcare and academia. I found programming while in a Cognitive Science Master's program and never looked back. I have knowledge and skills in many different languages and frameworks, with a breadth of curiosity that drives my motivation for consistent learning.</p>
        <p className="text-light float-start m-0 p-0">Interests</p>
        <p className="text-light text-wrap fw-lighter lh-sm">Although I aim for experience in full-stack development, I have particular interest in back-end security and data management. My long-term goal is to work in data science and machine learning.</p>
        <div className="d-flex justify-content-center">
            <a className="mx-2" href="https://github.com/jessicabrinegar"><img src={github} alt="github icon"></img></a>
            <a className="mx-2" href="https://twitter.com/jessmaebrin"><img src={twitter} alt="twitter icon"></img></a>
            <a className="mx-2" href="https://www.linkedin.com/in/jessica-brinegar-636227208/"><img src={linked} alt="linkedin icon"></img></a>
        </div>
        </div>
    )
}
export default About;