import mongoose from "mongoose";

const mongoDB = "mongodb+srv://jaaaoo:ut6CHrvuGxcus5k7@cluster0.rf1c2.mongodb.net/"
const database = "LionsBet"

async function main(){
    try {
        await mongoose.connect(mongoDB + database);
        console.log('Conectado com sucesso!')
    } catch (error) {
        console.log(error);
    }
}
main()

export default mongoose