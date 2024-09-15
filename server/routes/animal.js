import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import {
    createRoute,
    findAllRoute,
    homeRoute,
    showRoute,
    updateRoute,
    deleteRoute,
} from "../controllers/animal.js";
const router = express.Router();
router.get("/", wrapAsync(homeRoute));
router.post("/animal", wrapAsync(createRoute));
router.get("/animal/", wrapAsync(findAllRoute));
router.get("/animal/:id", wrapAsync(showRoute));
router.patch("/animal/:id", wrapAsync(updateRoute));
router.delete("/animal/:id/", wrapAsync(deleteRoute));
export default router;
