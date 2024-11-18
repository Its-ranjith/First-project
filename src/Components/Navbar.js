import { BrowserRouter , Route, Link, Routes }from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Slider from './Slider';
import Home from './Home';




function Navbar()
{
    return <>

    <BrowserRouter>
     <div id="navbar">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact us</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

<Slider/>
</div>
<Routes>
           <Route path="/Home" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>

      </Routes>
    </BrowserRouter>
  
    </>
}
export default Navbar;