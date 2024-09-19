import user_controller from "../controllers/user_controller.js";
import express from "express"
const router = express.Router();

router.put("/", user_controller.store)
router.get("/", user_controller.index)
router.get("/:id", user_controller.show)
router.put("/:id", user_controller.update)
router.delete("/:id", user_controller.destroy)

export default router