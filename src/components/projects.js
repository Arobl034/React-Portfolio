import React, { } from "react";


function Projects() {
  return (
    <div>
      <h1 className="titlePage"></h1>
      <section>
        <div>
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Weather Fit</h2>
              <a href="https://mmmasrieh.github.io/Crew/">
                <img
                  src={require("../assets/Project1.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Note taker</h2>
              <a href="https://obscure-harbor-39963.herokuapp.com">
                <img
                  src={require("../assets/notetaker.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Fitness Tracker</h2>
              <a href="https://thawing-citadel-06698.herokuapp.com/?id=5eb8a15487a0f3001712072d">
                <img
                  src={require("../assets/ftracker.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Budget Tracker</h2>
              <a href="https://peaceful-brook-52779.herokuapp.com">
                <img
                  src={require("../assets/btracker.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Eat-Da-Burger</h2>
              <a href="https://arobl034.github.io/EatDaBurger.github.io/">
                <img
                  src={require("../assets/eatdaburger.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4">
              <h2 className="Project1">Local One Off</h2>
              <a href="https://local-one-off.herokuapp.com/">
                <img
                  src={require("../assets/Project2.png")}
                  height="200px"
                  width="200px"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
}

export default Projects;
