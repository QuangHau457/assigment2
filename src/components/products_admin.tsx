import { Outlet } from "react-router-dom";

const adminlayout = () => {
    return <div className="container mx-auto">
        <h1>dashboard</h1>
        <Outlet/>
        <footer>
            Footer
        </footer>
    </div>
}