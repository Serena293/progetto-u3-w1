import React from "react";
import netflix_logo from '../assets/netflix_logo.png';
import kids_icon from '../assets/kids_icon.png'

const MyNavbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={netflix_logo} alt="netflix_logo" width="150" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tvshow">
                  Tv Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#movies">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#new">
                  Recently Added
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mylist">
                  My List
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 d-none"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-link d-flex" type="submit">
                <img
                  src="./assets/Icons/search.svg"
                  alt="search icon"
                  className="align-self-center"
                />
              </button>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#kids">
                    KIDS
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#home"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={kids_icon} width="30" alt='kidsIcon'/>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#profile">
                        Serena
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#profile">
                        Joe
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    );
  };
  
  export default MyNavbar;
  