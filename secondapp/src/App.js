import Home from "./Components/Home";
import Content from "./Components/Content";
import Form from "./Components/Form";
import Webpage from "./Components/Webpage";


function App()
{
    const data=[
        {
            empid : 1,
            empname : "kavin"
        },
        {
            empid : 2,
            empname : "Ajay"
        },
        {
            empid : 3,
            empname : "Anbu"
        },
        {
            empid : 4,
            empname : "Srini"
        }
    ];

    function  myfunc(abc,xyz)
    {
            console.log(abc);
            console.log(xyz);
    }
    return <>
        <h1>Hello everyone</h1>
        <Home fname="Ranjith" lname="kumar" />
        <Content item={data}/>
        <Form/>
        <Webpage num={myfunc} marks="90"/>

    
    </>

}


export default App;