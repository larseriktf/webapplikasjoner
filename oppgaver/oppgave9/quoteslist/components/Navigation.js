import Link from "next/Link";

export const Navigation = () => {
    return (
        <nav className="navigation">
            <link href="/" passHref>
                <a>Home</a>
            </link>
            <link href="/quotes">
                <a className="first">
                    Quotes page
                </a>
            </link>
        </nav>
    )
}