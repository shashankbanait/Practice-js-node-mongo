const express = require("express")
const router = express.Router();
const { handleGetAllUsers, 
    handleGetUserById, 
    handleDeleteUserById,
    handleUpdateUserById,
    handleCreateNewUser } = require('../controllers/user')

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

module.exports = router;