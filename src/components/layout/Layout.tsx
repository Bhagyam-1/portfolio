import Header from "./Header"

interface LayoutProps {
    children: React.ReactElement;
}

const Layout = ({ children }: LayoutProps) => {

    return (
        <section className="w-screen h-screen bg-light-background dark:bg-dark-background flex flex-col">
            <Header />
            <main className="text-light-primary dark:text-dark-primary p-4 flex-grow overflow-y-auto">{children}</main>
        </section>
    )
}

export default Layout;