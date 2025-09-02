import resJson from "./resJson.js"
import readFile from "../utils/file_manager.js"

export default class dataController {
  getData = async (req, res) =>{
    try {
      const path_data = './public/responce.json'
      // const path = 
      const data = await readFile({ path: path_data })
      res.status(200).json(resJson({statusCode: 200, success: true, body: data})) 
    } catch (error) {
      res.status(500).json(resJson({statusCode: 500, success: false, body: {message: "Internal server error"}}))
    }
  }
}