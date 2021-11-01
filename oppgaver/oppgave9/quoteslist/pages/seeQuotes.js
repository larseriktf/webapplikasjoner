import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";

export default function ReviewQuote() {
    const [quotes, setQuotes] = useState([]);

    const getQuotes = async () => {
        try {
            const response = await axios.get("/api/quotes");

            if (response?.data?.success === true) setQuotes(response.data.data);
        } catch (error) {
            console.log("There has been an error fetching the data");
        }
    };

    useEffect(
        () => {
        getQuotes();
    }, []);

    const rawJsonStr = JSON.stringify(quotes);

    return (
        <>
            <h1>All Quotes</h1>
            <Layout/>
            <section>
                <p>Quotes: {quotes.length}</p>
                <ul>
                    {quotes.map((quote, key) => {
                        return (
                            <li key={key} name={quote}>
                                <p>Author: {quote.author && quote.author}</p>
                                <p>Quote: {quote.quote && quote.quote}</p>
                                <p>Year: {quote.year && quote.year}</p>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    );
}
