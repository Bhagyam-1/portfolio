import { useRoutes } from "react-router";
import { lazy } from "react";
import Layout from "./Layout";
import About from "../../pages/About";

const Home = lazy(() => import('../../pages/Home'));

const wrapRoutingInLayout = (component: React.ReactElement) => {
    return (
        <Layout>
            {component}
        </Layout>
    )
}

const Routes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: wrapRoutingInLayout(<Home />)
        },
        {
            path: '/about',
            element: wrapRoutingInLayout(<About />)
        }
    ]);

    return routes;
};

export default Routes;