import {Link} from 'react-router-dom'
import './bootstrap.css'
import Object from './Object'
import './Ninja.css'

function Ninja() {
  // let move=useNavigate()
  return (
     <>
          
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
          <a class="navbar-brand" href="#">OSlim Blog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav list">
        <li class="nav-item">
          <Link to='/' style={{color:'crimson'}} class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to='latest' style={{color:'crimson'}} class="nav-link">Create New Blog</Link>
        </li>
            </ul>
    </div>
  </div>
      </nav>
      <marquee behavior="" direction="">Welcome to OSlim Blog? Enjoy Reading some interesting Blogs here</marquee>

  
</>
  )
}

export default Ninja