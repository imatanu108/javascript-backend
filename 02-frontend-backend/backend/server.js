import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Server is ready.");
});

// a list of 5 jokes
app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: 'Joke 1',
            content: "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            id: 2,
            title: 'Joke 2',
            content: "How many programmers does it take to change a light bulb? None, that's a hardware problem."
        },
        {
            id: 3,
            title: 'Joke 3',
            content: "Why do Java developers wear glasses? Because they don't see sharp."
        },
        {
            id: 4,
            title: 'Joke 4',
            content: "I told my computer I needed a break, and now it won't stop sending me KitKats."
        },
        {
            id: 5,
            title: 'Joke 5',
            content: "Why was the developer always calm? Because they could handle stress testing."
        }
    ];

    res.json(jokes);
})

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})