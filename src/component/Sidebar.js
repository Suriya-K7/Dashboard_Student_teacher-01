import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ toggle, handleToggle }) => {
  return (
    <>
      <ul
        className={
          toggle
            ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion "
            : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
        }
        id="accordionSidebar"
      >
        <li className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon">
            <i className="fa-sharp fa-solid fa-school"></i>
          </div>
          <div className="sidebar-brand-text mx-3">GUVI</div>
        </li>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link
            className="nav-link  d-flex align-items-center justify-content-center flex-column"
            to="/"
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>{" "}
            <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="sidebar-heading text-center">Management</div>
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link
            to="/student"
            className="nav-link collapsed  d-flex align-items-center justify-content-center  flex-column"
          >
            <i className="fas fa-fw fa-users"></i> <span>Students</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link
            to="/student"
            className="nav-link collapsed  d-flex align-items-center justify-content-center flex-column"
          >
            <i className="fas fa-sold fa-chalkboard-user"></i>{" "}
            <span>Mentotrs</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={handleToggle}
          ></button>
        </div>
      </ul>
    </>
  );
};

export default Sidebar;
