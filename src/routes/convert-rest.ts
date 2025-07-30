// Converts a REST payload to an internal format
import { Router } from 'express';
import { convertRestToInternal } from '../converters/rest-to-internal';

const router = Router();

router.post('/convert/rest', (req, res) => {
	try {
		const normalized = convertRestToInternal(req.body);
		res.json(normalized);
	} catch (error) {
		console.error('Conversion error:', error);
		res.status(400).json({ error: 'Invalid REST payload', details: error });
	}
});

export default router;
