import {createBrowserRouter} from "react-router-dom"
import {Wallet} from "../pages/Wallet.jsx";
import {Home} from "../pages/Home.jsx";

export const routes = createBrowserRouter([
    {path: '/', element: <Wallet/>},
    {path: '/home', element:(
        <div className=" w-screen h-full flex flex-col justify-center items-center">
        <Home/>
        </div>
        )}
])