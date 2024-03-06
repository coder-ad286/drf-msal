import React from "react";
import {useNavigate} from  'react-router-dom'
function Navbar() {
    const naviagte = useNavigate()
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 text-white">
                        <span className="text-xl font-bold">OAuth</span>
                    </div>
                    <div className="flex items-center">
                        <button onClick={()=>naviagte('/login')} className="bg-gray-900 text-white px-3 py-2 rounded-md mr-2">Login</button>
                        <button onClick={()=>naviagte('/register')} className="bg-gray-900 text-white px-3 py-2 rounded-md">Signup</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
