function Products ()
{
return (
    <>
    <h1>Products Page</h1>

        <button className="btn btn-success mt-2">Add New Product </button>
    <table class="table table-striped mt-5">
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Operations</th>

        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>product 1</td>
            <td>100</td>
            <td>
            <button className="btn btn-danger btn-sm">Delete </button>
            <button className="btn btn-info btn-sm">View </button>
            <button className="btn btn-primary btn-sm">Edit </button>

            </td>

        </tr>
    </tbody>
</table>
    </>
)

}

export default Products