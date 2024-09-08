import React from 'react'
import profile from "../image/background.png";
import shootingGameImage from "../image/ShootingGameImage.png";
import bankSimulatorImage from "../image/ATMSimulatorImage.png";
import japaneseWebsiteImage from "../image/JapaneseWebsiteImage.png";
import reactimage from "../image/react.png";
import pythonimage from "../image/python.png";
import cplusplusimage from "../image/cplusplus.png";
const Home = () => {
  return (
    <div className="container text-center">
        <img src={profile} className="profileImage" />
     <p>
     I'm Whitelist。This website is my portfolio designed by myself using react js, My main program language is python/C++/React, interesting in every language and programing. <br/>
    </p>
    <section class="page-section" id="services">

        <div className="service">
        {/* I'm using bootstrap system to design the grid of each project */}
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              These are the my project history.
            </h3>
          
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              {/* These is the first image of my project
               set the image style of the project */}
              <img src={shootingGameImage} alt="Shooting Game" className="project-image" />
              <h4 class="my-3">Shooting Game</h4>
              {/* The descrption of the project */}
              <p class="text-success">
                I've used python to design the completed 2D pixel 
                shooting game and using tiles to create the map.
              </p>
              <button type="button" class="btn project-button" onClick={() => /*window.location.href = "https://github.com/Shirolist/shooting-game"*/
                                                                                window.open("https://github.com/Shirolist/shooting-game", "_blank")}>
                View GitHub Repository
              </button>
            </div>
            <div class="col-md-4">
              {/* set the image style of the project */}
              <img src={bankSimulatorImage} alt="Bank Simulator" className="project-image" />
              <h4 class="my-3">Bank simulator</h4>
              {/* The descrption of the project */}
              <p class="text-success">
                I'm using java to design the real-life ATM simluation, 
                and check every error handling in my learning experience.
              </p>
              <button type="button" class="btn project-button" onClick={() => /*window.location.href = "https://drive.google.com/drive/folders/1EdO8IezEKoKaq9wk4xpt5d1bhXR36fM4?usp=sharing"*/
                                                                              window.open("https://drive.google.com/drive/folders/1EdO8IezEKoKaq9wk4xpt5d1bhXR36fM4?usp=sharing", "_blank")}>
                View GitHub Repository
              </button>
            </div>
            <div class="col-md-4">
              {/* set the image style of the project */}
              <img src={japaneseWebsiteImage} alt="Japanese Self-Learning Website" className="project-image" />
              <h4 class="my-3">Japanese self-learning website<br/>(still doing)</h4>
              {/* The descrption of the project */}
              <p class="text-success">
                The first website I'm using the MPA(Multi-Page Web 
                Applications) to record every book content and help 
                people learn the japanese.
              </p>
              <button type="button" class="btn project-button" onClick={() => /*window.location.href = "https://shirolist.github.io/japanese-learning/"*/
                                                                              window.open("https://shirolist.github.io/japanese-learning/", "_blank")}>
                View GitHub Repository
              </button>
            </div>
          </div>
        </div>
    </section>

    <section id="skill">
        <div class="text-center">
          <h1 class="title">Skill</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactimage} />
              <h4>React</h4>
              <p>This is react language.</p>
            </div>
            <div class="col-md-4 services">
              <img src={pythonimage} />
              <h4>python</h4>
              <p>This is python language.</p>
            </div>
            <div class="col-md-4 services">
              <img src={cplusplusimage} />
              <h4>C++</h4>
              <p>This is C++ language.</p>
            </div>
            
          </div>
          <button type="button" class="btn btn-primary" onClick={() => /*window.location.href = "https://github.com/Shirolist"*/
                                                                         window.open("https://github.com/Shirolist", "_blank")}>
            See the project
          </button>
        </div>
      </section>
   </div>
  )
}

export default Home
