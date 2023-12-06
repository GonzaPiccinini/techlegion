import styles from './Layout.module.css'
import { Navbar } from "../../components"

interface ILayoutProps {
    children: React.ReactNode | JSX.Element
}

const Layout = ({ children }: ILayoutProps) => {
    return (
        <div className={styles.Layout}>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout