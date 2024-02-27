import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { DeviceDetail, HomePage } from "../pages";

export const menuRoutes = [
    {
        to: "/",
        icon: "fa-solid fa-spell-check",
        title: "Home Page",
        description: "Corregir ortografía",
        component: <HomePage />
    },
    {
        to: "/detail/1",
        icon: "fa-solid fa-code-compare",
        title: "Detail Page",
        description: "Comparar pros y contras",
        component: <DeviceDetail />
    }
];

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            ...menuRoutes.map(route => ({
                path: route.to,
                element: route.component
            })),
            {
                path:'',
                element:<Navigate to={menuRoutes[0].to}/>
            }
        ]
    }
])