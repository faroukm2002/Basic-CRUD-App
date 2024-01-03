
import { Link } from "react-router-dom"
function Navbar(){

return(
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
  <Link class="navbar-brand" to="/">Logo</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ms-auto">
      <li class="nav-item active">
        <Link class="nav-link" to='/'>Home <span class="sr-only"></span></Link>
      </li>
    
    
    </ul>
    
  </div>
  </div>
</nav>
    
    </>
)

}

export default Navbar 