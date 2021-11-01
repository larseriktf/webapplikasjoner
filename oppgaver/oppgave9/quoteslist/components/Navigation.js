import Link from "next/Link";

export const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link href="/" passHref>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/seeQuotes">
                        <a className="first">See Existing Quotes</a>
                    </Link>
                </li>
                <li>
                    <Link href="/addQuote">
                        <a className="first">Add a Quote</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
