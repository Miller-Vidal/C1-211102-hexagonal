import express  from "express";
import { 
    createUserController,
    getUserAllController,
    deleteUserController,
    getUserController,
    activeUserController,
    getInactiveUserController,
    updateFilterUserController,
    updatePasswordUserController,
    updateUserController
} from "./dependencies";

export const userRoutes = express.Router();


userRoutes.post(
    "/post",
    createUserController.addUser.bind(createUserController)
);
userRoutes.get(
    "/All",
    getUserAllController.listAllUsers.bind(getUserAllController)
);
userRoutes.delete(
    "/delete/:userId",
    deleteUserController.deleteUser.bind(deleteUserController)
)
userRoutes.get(
    "/getUser/:id",
    getUserController.getUserId.bind(getUserController)
)

userRoutes.put(
    "/activateUser/:id",
    activeUserController.run.bind(activeUserController)
)
userRoutes.get(
    "/inactiveUsers",
    getInactiveUserController.run.bind(getInactiveUserController)
)
userRoutes.get(
    '/filter/',
    updateFilterUserController.run.bind(updateFilterUserController)
);
userRoutes.put(
    '/updatePassword/',
    updatePasswordUserController.updatePassword.bind(updatePasswordUserController)
)
//actualizar datos del usuario
userRoutes.put(
    '/updateUser/',
    updateUserController.updateUser.bind(updateUserController)
)
