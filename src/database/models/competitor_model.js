import db from "../db.js";

const Schema = db.Schema

const competitorSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const Competitor = db.model("Competitor", competitorSchema);

export default Competitor