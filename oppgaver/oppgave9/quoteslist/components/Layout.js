import { Navigation } from './Navigation'

export const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <main className="layout">{children}</main>
        </>
    )
}