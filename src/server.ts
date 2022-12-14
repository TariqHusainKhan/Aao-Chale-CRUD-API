require('dotenv').config()
import { App } from "./App"

const PORT: number = parseInt(process.env.PORT as string)

const main = async () => {
    try {
        // call express api object
        let app = new App()
        app.app.listen(PORT, () => {
            return console.log(`Karma project is running on port : `, PORT)
        })
    } catch (error: any) {
        return error
    }
}

main()