import { Router } from "express";
import { login, register } from "../Controllers/register.js";

const authrouter = Router();
authrouter.route("/").post(register);
authrouter.route("/login").post(login);
export default authrouter;
