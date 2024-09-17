import db from "../db.js"

const Schema = db.Schema;

const rechargeSchema = new Schema({
    value: {
        type: Schema.Types.Number,
        min: 10
    },
    status: {
        type: Schema.Types.String,
        enum: ["FINALIZADO", "PENDENTE", "RECUSADA", "CANCELADA"],
        default: "PENDENTE"
    }
})

const walletSchema = new Schema({
    balance: {
        type: Schema.Types.Number,
        default: 0,
        min: 0
    },
    password: {
        type: Schema.Types.String,
        minLength: 4,
        maxLength: 4
    },
    recharges: [rechargeSchema],
})

const userSchema = new Schema({
    email: {

    },
    cpf: {
        type: Schema.Types.String,
        minLength: 11,
        maxLength: 11,
        validate: {
            validator: function (v) {
                return /^\d+$/.test(v)
            }
        },
    },
    nickname: {
        type: Schema.Types.String,
        required: true
    },
    password: {
        type: Schema.Types.String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v)
            }
        },
    },
    wallet: walletSchema,
    acceptedTerms: {
        type: Schema.Types.String,
        required: true
    }
});


const User = db.model("User", userSchema);

export default User