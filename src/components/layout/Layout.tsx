import Header from "./Header";
import { LayoutProps } from "../../models/ComponentProps.model"

const Layout = ({ children }: LayoutProps) => {

    return (
        <div className="w-screen h-screen bg-light-background-alt dark:bg-dark-background-alt flex flex-col">
            <Header />

            <main role="main"
                className="text-light-text dark:text-dark-text p-4 flex-grow overflow-y-auto"
                tabIndex={0}
            >
                {children}
            </main>
        </div>
    );
};

export default Layout;
