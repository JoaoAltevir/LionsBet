import user_router from "./http/routers/user_router.js";
import match_router from "./http/routers/match_router.js"
import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

app.use("/user", user_router);
app.use("/match", match_router);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

