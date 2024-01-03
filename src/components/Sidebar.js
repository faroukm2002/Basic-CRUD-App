import { Link } from "react-router-dom"

function Sidebar(){

return(
    <>
    <ul className="List-unstyled">
    <li>
        <Link to={'/products'}>get all Products </Link>
    </li>
    <li>
        <Link href="#">get all Categoies </Link>
    </li>
    </ul>
    
    </>
)

}

export default Sidebar