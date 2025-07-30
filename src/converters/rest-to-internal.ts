import { RestUsageResponse } from '../types/rest';
import { InternalFormat } from '../types/internal';

export function convertRestToInternal(
	data: RestUsageResponse
): Partial<InternalFormat> {
	return {
		telgea_user_id: data.user_id,
		msisdn: data.msisdn,
		usage_data: {
			total_mb: data.usage.data.total_mb,
			roaming_mb: data.usage.data.roaming_mb,
			country: data.usage.data.country,
			network_type: data.network.type,
			provider_code: data.network.provider_code
		},
		billing_period: {
			start: data.usage.period.start,
			end: data.usage.period.end
		}
	};
}
