import { Link } from "react-router-dom"

function Sidebar(){

return(
    <>
    <ul className="List-unstyled">
    <li>
        <Link to={'/products'}>get all Products </Link>
    </li>
    <li>
        <a href="#">get all Categoies </a>
    </li>
    </ul>
    
    </>
)

}

export default Sidebar