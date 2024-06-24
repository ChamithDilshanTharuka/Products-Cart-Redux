import  {Outlet}  from "react-router-dom";
import NavbarPanel from './NavbarPanel';

const RootLayout = () => {
  return (
    <div>
        <NavbarPanel/>
        <h1>Navigation</h1>

        <main>
          <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout;