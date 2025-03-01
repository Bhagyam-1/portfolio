import { useRoutes } from "react-router";
import { lazy } from "react";
import Layout from "./Layout";
import About from "../../pages/About";
import ProjectsTimeline from "../../pages/Projects";

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
        },
        {
            path: '/projects',
            element: wrapRoutingInLayout(<ProjectsTimeline />)
        }
    ]);

    return routes;
};

export default Routes;