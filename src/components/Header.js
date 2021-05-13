import React from 'react';


function Header( ) {
  return (
   
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

      <div className="container">
        <a className="navbar-brand logo" href="index.html">Monica R. Hill</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav ml-auto mt-2 mt-lg-0">
            <a className="nav-link active" href="index.html">Home <span class="sr-only">(current)</span></a>
            <a className="nav-link" href="portfolio.html">Portfolio</a>
            <a className="nav-link" href="contact.html">Contact</a>
            <a className="nav-item nav-link dropdown dropdown-toggle " href="images/resume.pdf" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Resume</a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item"  href="images/resume.pdf"> Monica Hill: Jr. Web Developer</a>
           
          </div>
        </div>
      </div>
      </div>
    </nav>
   

  )
}

 export default Header;