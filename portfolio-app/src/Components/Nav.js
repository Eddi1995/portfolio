

function Nav(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary border border-4 ">
  <div className="container-fluid bg-black">
    <a className="navbar-brand bg-white " href="#">Navbar w/ text</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse bg-white" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active bg-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link bg-white" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link bg-white" href="#">Pricing</a>
        </li>
      </ul>
      <span className="navbar-text bg-white">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
        </>
    )
}
export default Nav;