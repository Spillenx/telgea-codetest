import express from 'express';
import convertRest from './routes/convert-rest';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api', convertRest);

app.get('/', (_req, res) => {
	res.send('Hello, Telgea!');
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
