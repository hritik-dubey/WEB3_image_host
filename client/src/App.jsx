import {Web3Provider} from "./context/provideWb3context.jsx";
import {RouterProvider} from 'react-router-dom'
import {routes} from "./routes/routes.jsx";

function App() {
    return (
        <>
            <Web3Provider>
                <RouterProvider router={routes}>
                </RouterProvider>
            </Web3Provider>
        </>
    )
}

export default App
