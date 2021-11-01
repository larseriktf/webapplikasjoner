import axios from 'axios'
import { useEffect, useState } from 'react'

export default function ReviewQuote() {
    const [quote, setQuote] = useState([]);

    const getQuotes = async () => {
        try {
            const response = await axios.get("/api/quotes")

            if (response?.data?.success === true)
                setQuote(response.data.data)
        } catch (error) {
            console.log("There has been an error fetching the data");
        }
    }

    useEffect(() => {
        getQuotes()
    }, []);

    return (
        <>
            <h1>Quote</h1>
            <section> {JSON.stringify(quote)} </section>
        </>
    );
}