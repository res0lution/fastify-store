import fastify from "fastify";
import * as userController from "../controller/user.controller";

const userRoutes = async (fastify, options) => {
  fastify.post("/users", userController.createUser);
};

export default userRoutes;
