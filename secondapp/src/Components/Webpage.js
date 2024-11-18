

function Webpage(props)
{
    let pi=3.14;
    let name="Ranjith kumar";
    props.num(name,pi);
    return <>
        <h1>Props examples</h1>
        <h3>Marks :{props.marks}</h3>
    </>
}

export default Webpage;