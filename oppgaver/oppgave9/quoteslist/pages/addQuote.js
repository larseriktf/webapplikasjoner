import { useState } from "react";
import { Layout } from "../components/Layout";
import axios from "axios";

export default function AddQuote() {
    const [error, setError] = useState(null);
    const [quotes, setQuotes] = useState([]);
    const [author, setAuthor] = useState("Richard");
    const [quote, setQuote] = useState("Stand down and sit up!");
    const [year, setYear] = useState(2021);

    const handleAuthorChange = (e) => setAuthor(e.target.value);
    const handleQuoteChange = (e) => setQuote(e.target.value);
    const handleYearChange = (e) => setYear(e.target.value);

    const createQuotes = async () => {
        try {
            console.log(quote);
            const response = await axios.post("/api/quotes",
            {
                author,
                quote,
                year
            });

            if (response?.data?.success === true) setQuotes(response.data.data);
        } catch (err) {
            setError(err?.response?.data?.error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createQuotes();
    };

    if (error)
        return <p>Something went wrong: {error}</p>;

    return (
        <>
            <h1>Create Quiz</h1>
            <Layout/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="quote">Add Quote</label>
                <input
                    id="author"
                    type="text"
                    name="author"
                    value={author}
                    onChange={handleAuthorChange}
                    placeholder="Author"
                />
                <input
                    id="quote"
                    type="text"
                    name="quote"
                    value={quote}
                    onChange={handleQuoteChange}
                    placeholder="Quote"
                />
                <input
                    id="year"
                    type="number"
                    name="year"
                    value={year}
                    onChange={handleYearChange}
                    placeholder="2000"
                />
                <button type="submit">Send</button>
            </form>
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
