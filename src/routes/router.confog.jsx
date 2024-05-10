// import css
// import libraries
import { useRoutes } from "react-router-dom";

// import components
import MainLayout from "../layouts/main-layout/main-layout";
import Home from "../pages/home/home";
import AboutUs from "../pages/about-us/about-us";

// Variable declarations

// Component definition
export default function RouterConfig() {
    // State variables
    // Hooks
    // Event handlers
    // Helper functions
    // Return statement
    return(
        useRoutes(
            [
                {
                    path:'/',
                    element:<MainLayout/>,
                    children:[
                        {
                            index:true,
                            element:<Home/>,
                        },
                        {
                            path:'/about-us',
                            element:<AboutUs/>,
                        }
                    ]
                }
            ]
        )
    )
}