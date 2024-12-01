import React from 'react';
import { FaFigma, FaBook, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa'; // Import icon dari react-icons

const Tools = () => {
  return (
    <section className="tools">
      <h2>Tools I Use</h2>
      <div className="tools-container">
        <div className="tool-item">
          <FaFigma size={50} />
          <p>Figma</p>
        </div>
        <div className="tool-item">
          <FaGithub size={50} />
          <p>VS Code</p>
        </div>
        <div className="tool-item">
          <FaHtml5 size={50} />
          <p>HTML</p>
        </div>
        <div className="tool-item">
          <FaCss3Alt size={50} />
          <p>CSS</p>
        </div>
        <div className="tool-item">
          <FaGithub size={50} />
          <p>Github</p>
        </div>
      </div>
    </section>
  );
};

export default Tools;
