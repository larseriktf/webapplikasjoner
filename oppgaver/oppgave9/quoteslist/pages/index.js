import { useState } from "react";

import axios from "axios";

export default function AddQuote() {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState("");
    const [error, setError] = useState(null);

    const handleQuoteChange = (e) => setQuote(e.target.value);

    const createQuotes = async () => {
        try {
            const response = await axios.post("/api/quotes", { quote });

            if (response?.data?.success === true) setQuotes(response.data.data);
        } catch (err) {
            setError(err?.response?.data?.error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createQuotes();
    };

    if (error) {
        return <p>Something went wrong: {error}</p>;
    }

    return (
        <>
            <h1>Create Quiz</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="quote">Add Quote</label>
                <input
                    id="quote"
                    type="text"
                    name="quote"
                    value={quote}
                    onChange={handleQuoteChange}
                />
                <button type="submit">Send</button>
            </form>
            <section>{JSON.stringify(quotes)}</section>
        </>
    );
}
