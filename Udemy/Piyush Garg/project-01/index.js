const express = require("express");
const users = require("./MOCK_DATA.json")
const app = express();
const PORT = 8000;
const fs = require("fs")

// Middleware - Plugin
app.use(express.urlencoded({extended: false}))

app.use((req, res, next)=>{
    console.log("Hellow from middleware 1")
    // return res.json({msg: "Hello from middleware 1"})    // rokne ke liye
    next();     // predefined: next function/middleware tak pahuchane ke liye
})

app.use((req, res, next)=>{
    console.log("Hellow from middleware 2")// rokne ke liye
    next();     // predefined: next function tak pahuchane ke liye
})

// Routes
app.get("/api/users", (req, res)=>{
    // res.setHeader("myName", "Piyush Garg");         // sets the header response
    console.log(req.headers);       // prints all the headers which are coming from the client
    return res.json(users);
})

app.get("/users", (req, res)=>{
    const html = `
    <ul>
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <div style="font-size: 24px; margin-bottom: 10px; background-color: red">${users.map(user=>`<li>${user.first_name}</li>`).join("")}</div>
    </ul>
    `
    res.send(html);
})


// this is the long way of using different methods: get, put, post, delete

// app.get("/api/users/:id", (req, res) => {
// TODO: gets the users by id
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     return res.json(user);
// })

// app.patch('/api/users:id', (req, res) => {
//     // TODO: Edit the user with id
//     return res.json({status: "pending"})
// })

// app.delete('/api/users:id', (req, res) => {
//     // TODO: Delete the user with id
//     return res.json({status: "pending"})
// })

// app.post('/api/users', (req, res) => {
//     // TODO: Create new user
//     return res.json({status: "pending"})
// })

// this is mentos way
app.route("/api/users/:id")
    .get((req, res) => {  
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        return res.json(user);
    })
    .put((req, res) => {
        return res.json({status: "pending"});
    })
    .patch((req, res)=> {
        return res.json({status: "pending"});
    })
    .delete((req, res) => {
        return res.json({status: "pending"})
    })


app.post("/api/users", (req, res)=>{
    const body = req.body;
    users.push({...body, id: users.length + 1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.status(201).json({status: "success", id: users.length});
    })
});

app.listen(PORT, ()=> console.log(`Server started at PORT: ${PORT}`))