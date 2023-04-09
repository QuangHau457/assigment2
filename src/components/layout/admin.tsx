import {Outlet} from 'react-router-dom'

const AdminLayout = () => {
    return <div className="container mx-auto">
      <header className="bg-sky-500 flex">
            <div className="  flex items-center gap-4 py-2">
                <img className="w-[50px] ml-40" src="/logo.png" alt="" />
                <input className="w-[600px] h-[30px] rounded-lg " type="text" placeholder="search" />
            </div>
            <h1 className='ml-60 mt-[15px] text-gray-50'>Xin chào nguyễn quang hậu </h1>
        </header>
        <Outlet/>
        <footer>
            Footer
        </footer>
    </div>
}

export default AdminLayout