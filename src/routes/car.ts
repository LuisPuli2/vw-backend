import express from 'express'
import carsController from '../controller/cars'

const router = express.Router()

// Get all the cars
router.get('/',carsController.getCars)


export default router
