import { BACKEND_BASE_URL } from '$env/static/private';
import { parse_offer_list } from '$lib';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params, cookies }) => {
	const token = cookies.get('applicant_token')!;
	const response = await fetch(`${BACKEND_BASE_URL}/api/offer/all`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
	const data = parse_offer_list(await response.text());
	const result = data.find((offer) => offer.id === Number.parseInt(params.slug));
	if (!result) throw error(404);
	return result;
};
