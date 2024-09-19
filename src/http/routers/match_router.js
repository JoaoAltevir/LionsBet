import match_controller from "../controllers/matchBet_controller.js"
import express from "express"
const router = express.Router();

router.put("/", match_controller.store)
router.get("/", match_controller.index)
router.get("/", match_controller.show)
router.update("/", match_controller.update)
router.delete("/", match_controller.destroy)

export default router