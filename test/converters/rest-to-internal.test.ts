import { readFileSync } from 'fs';
import { join } from 'path';
import { convertRestToInternal } from '../../src/converters/rest-to-internal';
import { RestUsageResponse } from '../../src/types/rest';

const loadRestMock = (): RestUsageResponse => {
	const jsonPath = join(__dirname, '../mocks/mvno_rest_spec.json');
	const data = readFileSync(jsonPath, 'utf-8');
	return JSON.parse(data);
};

// Tests for REST to internal format converter, using the mvno_rest_spec.json mock
describe('convertRestToInternal', () => {
	it('should map REST response JSON to internal format', () => {
		const mock = loadRestMock();
		const result = convertRestToInternal(mock);

		expect(result.telgea_user_id).toBe('abc123');
		expect(result.msisdn).toBe('+46701234567');
		expect(result.usage_data?.total_mb).toBe(845.23);
		expect(result.billing_period?.start).toBe('2025-04-01T00:00:00Z');
	});
});
