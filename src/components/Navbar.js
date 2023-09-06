import React from 'react'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.darkMode} `}>
  <div className="container-fluid ">
    <a className={`navbar-brand text-${props.darkMode === 'dark' ? 'white' : 'dark'} `} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.darkMode === 'dark' ? 'white' : 'dark'}`} aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link text-white" href="/">Link</a>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu text-white">
            <li><a className="dropdown-item " href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <a className={`nav-link disabled  text-${props.darkMode === 'dark' ? 'white' : 'dark'}`} aria-disabled="true" href='/'>{props.quot}</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
    {/* <div className="custom-control custom-switch">
  <input type="checkbox" className="custom-control-input" disabled id="customSwitch2"/>
  <label className="custom-control-label" for="customSwitch2">Disabled switch element</label>
</div> */}
    
    <div className="btn-group" role="group" aria-label="Basic example">
  {/* <button type="radio" onClick={props.toggleMode} className="btn btn-success">Light</button> */}
  <button type="radio" onClick={props.toggleMode} className="btn btn-success">Dark Mode</button>
</div>
{/* <div class= "custom-control custom-switch ">
  <input type="checkbox" class="custom-control-input " onClick={props.toggleMode} id="customSwitch1"/>
  <label className="custom-control-label text text-danger" htmlFor="customSwitch1">Dark Mode</label>
</div> */}

    </div>
    
  
</nav>
</>
  )
}
 
Navbar.defaultProps ={
    quot: '---------->'
};