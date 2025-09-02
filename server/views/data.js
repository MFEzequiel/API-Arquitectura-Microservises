import { Router } from "express"
import dataController from "../controllers/data.js"

export default function dataLoca() {
  const r = Router()
  const controllerData = new dataController()
  
  r.get('/', controllerData.getData)
  
  return r
}