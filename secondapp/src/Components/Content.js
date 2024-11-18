
function Content(det)
{
    return <>
        <h1 text align="center">Employee Table</h1>
        <table border="2" width="40%" table align="center">
            <tr>
                <th>Employee ID</th><th>Employee name</th>
            </tr>
            {det.item.map((data)=>
            <tr>
                <td>{data.empid}</td><td>{data.empname}</td>
            </tr>
            )}
           
        </table>
    </>
}

export default Content;
