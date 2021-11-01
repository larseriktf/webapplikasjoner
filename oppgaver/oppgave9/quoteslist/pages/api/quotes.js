// /pages/api/quotes

const quotes = [
    {
        author: "Ludwig",
        quote: "Yee shall not quote me on this",
        year: 2000,
    },
    {
        author: "Ludwig",
        quote: "Yee shall not quote me on this either",
        year: 2001,
    },
    {
        author: "Ella GitsFerald",
        quote: "Not quite sure what to say",
        year: 1810,
    },
    {
        author: "Nickolas",
        quote: "Coding is fun",
        year: 1771,
    },
];

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json({ success: true, data: quotes });
    } else if (req.method === "POST") {
        if (req.body?.question === false)
            res.status(400).json({ success: false, error: "Invalid data" });
        else {
            quotes.push(req.body);
            res.status(201).json({ success: true, data: quotes });
        }
    } else if (req.method === "PUT" || req.method === "DELETE") {
        res.status(405).end();
    }
}
