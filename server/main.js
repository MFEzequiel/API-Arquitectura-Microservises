import exprese from 'express' 
import { PORT } from './utils/config.js'
import dataLoca from './views/data.js'

const app = exprese() 
app.disable('x-powered-by')

app.use(exprese.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/data', dataLoca())

app.use((req, res) => res.status(404).send('Not Found 404'))

app.listen(PORT)