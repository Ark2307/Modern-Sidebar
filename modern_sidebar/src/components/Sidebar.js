import React from 'react' ;
import "./Sidebar.scss" ;
import { Link } from "react-router-dom" ;

import profileImage from "../Aryan.jpeg" ;


function Sidebar() {
    return (
        <>
          <h1 className = 'Name'> Sidebar Menu </h1>

          <div className = "sideBar" id = "sidebar">

            <div className = 'logoDropdown'>
              <div className='logoTitle'> AryanCreation </div>  
                <i className='bx bx-menu' id = 'btn' />
            </div>

            <ul className='dropdownList'>
              
              <li>
                <i className='bx bx-search' />
                <input type= "text" placeholder='Type....' />
                <span className='tooltip'>Search</span>
              </li>

              <li>
                <Link to = "#" className='EditLink'>
                  <i className='bx bx-home-alt' />
                  <span className='iconsName'>HomePage</span>
                </Link>
                <span className='tooltip'>HomePAge</span>
              </li>

              <li>
                <Link to = "#" className='EditLink'>
                  <i className='bx bx-grid-alt' />
                  <span className='iconsName'>Dashboard</span>
                </Link>
                <span className='tooltip'>Dashboard</span>
              </li>

              <li>
                <Link to = "#" className='EditLink'>
                  <i className='bx bx-user' />
                  <span className='iconsName'>Profile</span>
                </Link>
                <span className='tooltip'>Profile</span>
              </li>

              <li>
                <Link to = "#" className='EditLink'>
                  <i className='bx bx-chat' />
                  <span className='iconsName'>Messages</span>
                </Link>
                <span className='tooltip'>Messages</span>
              </li>

              <li>
                <Link to = "#" className='EditLink'>
                  <i className='bx bx-folder' />
                  <span className='iconsName'>File Manager</span>
                </Link>
                <span className='tooltip'>Files</span>
              </li>

              <li>
                <Link to = "#" className='EditLink'>
                  <i className='bx bx-cart-alt' />
                  <span className='iconsName'>Orders</span>
                </Link>
                <span className='tooltip'>Orders</span>
              </li>

              <li>
                <Link to = "#" className='EditLink'>
                  <i className='bx bx-heart' />
                  <span className='iconsName'>Saved</span>
                </Link>
                <span className='tooltip'>Saved</span>
              </li>

              <li>
                <Link to = "#" className='EditLink'>
                  <i className='bx bx-cog' />
                  <span className='iconsName'>Settings</span>
                </Link>
                <span className='tooltip'>Settings</span>
              </li>

              <li className="profile">
                <div className="profileDetails">
                  <img src = {profileImage} alt = "Aryan" className='iconPhoto' />
                  <div className="description">
                    <div className="name">Aryan</div>
                    <div className="job">Cricket Lover </div>
                  </div>
                </div>
                <i className='bx bx-log-out' id="log_out" ></i>
              </li>

            </ul>
          </div>

          <section className="homeSection">
            <div className="text">Dashboard</div>
          </section>

        </>
    )
}

export default Sidebar ;
