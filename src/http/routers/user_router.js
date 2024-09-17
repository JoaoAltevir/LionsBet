import user_controller from "../controllers/user_controller";
import express from "express"
const router = express.Router();

router.put("/", user_controller.store)
router.get("/", user_controller.index)
router.get("/", user_controller.show)
router.update("/", user_controller.update)
router.delete("/", user_controller.destroy)

export default router