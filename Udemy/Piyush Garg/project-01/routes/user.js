const express = require("express")
const router = express.Router();



// router.get("/", async (req, res) => {
//     try {
//         const allDbUsers = await User.find({});
//         const html = `
//         <ul>
//             ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//         </ul>
//         `;
//         res.send(html);
//     } catch (err) {
//         res.status(500).send("Error loading users");
//     }
// });

router.get("/", async (req, res) => {
    const allDbUsers = await User.find({});

    res.setHeader("X-MyName", "Prabhat");   // Custom Header
    // Always add X to custom headers
    return res.json(allDbUsers);
});

router.route("/:id")
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
        await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"})  // this lastname is hard coded
        return res.json({ status: "Success" });
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

router.post("/", async (req, res) => {
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

module.exports = router;