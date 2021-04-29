import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import carRoute from './routes/car'

dotenv.config()

const app = express();
const port = process.env.PORT || 3001

const options: cors.CorsOptions = {
	allowedHeaders: [
		'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
	],
	credentials: true,
	methods: 'GET',
	origin: '*'
}

app.use(cors(options))

app.options('*', cors(options))
// Routes
app.use('/cars', carRoute)

app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});