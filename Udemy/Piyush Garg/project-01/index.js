const express = require("express");
const app = express();
const PORT = 8000;
const fs = require("fs");
const mongoose = require("mongoose");

// Connection
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Mongo error", err));

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String
    },
    gender: {
        type: String
    }
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Add this line to parse JSON bodies

app.use((req, res, next) => {
    console.log("Hello from middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("Hello from middleware 2");
    next();
});

// Routes
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find({});
        return res.json(users);
    } catch (err) {
        return res.status(500).json({ msg: "Error retrieving users", error: err });
    }
});

app.get("/users", async (req, res) => {
    try {
        const allDbUsers = await User.find({});
        const html = `
        <ul>
            ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
        </ul>
        `;
        res.send(html);
    } catch (err) {
        res.status(500).send("Error loading users");
    }
});

app.route("/api/users/:id")
    .get(async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ msg: "User not found" });
            }
            return res.json(user);
        } catch (err) {
            return res.status(500).json({ msg: "Error retrieving user", error: err });
        }
    })
    .put(async (req, res) => {
        return res.json({ status: "pending" });
    })
    .patch(async (req, res) => {
        return res.json({ status: "pending" });
    })
    .delete(async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findByIdAndDelete(id);
            if (!user) {
                return res.status(404).json({ msg: "User not found" });
            }
            return res.json({ msg: "User deleted successfully" });
        } catch (err) {
            return res.status(500).json({ msg: "Error deleting user", error: err });
        }
    });

app.post("/api/users", async (req, res) => {
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json({ msg: "All fields are required." });
    }

    try {
        const result = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTitle: body.job_title
        });
        return res.status(201).json({ msg: "success", user: result });
    } catch (err) {
        return res.status(500).json({ msg: "Error creating user", error: err });
    }
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
