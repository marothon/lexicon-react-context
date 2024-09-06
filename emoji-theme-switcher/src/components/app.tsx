import { NavLink, Outlet } from 'react-router-dom'
import '../css/app.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
