import "dotenv/config"
import mongoose from "mongoose";



async function main(){
    try {
        await mongoose.connect(process.env.MONGODB + process.env.DATABASE);
        console.log('Conectado com sucesso!')
    } catch (error) {
        console.log(error);
    }
}
main()

export default mongoose