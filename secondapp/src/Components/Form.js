import React from 'react';

export default class Form extends React.Component
{
constructor()
{
    super();
    this.state={
        empid :0,
        empname : null
    }

}
    myform()
    {
        console.log(this.state);
    }

    render()
    {
        return <>
            <h2>Employee deatils</h2>
            <hr/>
            Enter employee ID :<br />
            <input type="text" name="empid" onChange={(e)=>this.setState({empid : e.target.value})}></input><br />
            Enter employee name :<br />
            <input type="text" name="empname" onChange={(e)=>this.setState({empname : e.target.value})}></input><br />
            <button onClick={()=>this.myform()}>Submit</button>
        </>
    }
}