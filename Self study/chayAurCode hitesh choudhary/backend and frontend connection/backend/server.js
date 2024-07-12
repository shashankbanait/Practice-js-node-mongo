import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send("server is ready");
// })

// get a list of 5 jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "a joke",
            content: "this is a joke"
        },
        {
            id: 2,
            title: "range rover car kaise rehti",
            content: "this is another joke"
        },
        {
            id: 3,
            title: "portrait kaise le",
            content: "this is a joke"
        },
        {
            id: 4,
            title: "selfie kaise le joke",
            content: "this is another joke"
        },
        {
            id: 5,
            title: "kitna kaam hai",
            content: "khush kaise rhe"
        }
    ]
    res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost: ${port}`);
})