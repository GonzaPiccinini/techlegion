import { Navbar } from "../../components/Navbar"

interface ILayoutProps {
    children: React.ReactNode | JSX.Element
}

const Layout = ({ children }: ILayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout