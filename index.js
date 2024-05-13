import express from "express"

const app = express()

const port = process.env.PORT || 3000;



/* app.get('/', (req, res) => {
    res.send("server is working ")
}) */

app.get("/api/jokes", (req, res) => {

    const jokes = [
        {
            id: "1",
            title: "Joke 1",
            joke: "This is a joke"

        },
        {
            id: "2",
            title: "joke 2",
            joke: "This is second joke"

        },
        {
            id: "3",
            title: "joke3",
            joke: "this is third joke"

        },
        {
            id: "4",
            title: "joke4",
            joke: "This is fourth joke"

        },
    ];

    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Server is ready at ${port}`);
})