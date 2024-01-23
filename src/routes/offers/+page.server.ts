import { BACKEND_BASE_URL } from '$env/static/private';
import { parse_offer_list } from '$lib';
import type { ApiOfferResponse } from '$lib/types';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies, url }) => {
	const token = cookies.get('applicant_token') ?? '';
	const logged_in = token !== '';
	if (logged_in) {
		const query = url.searchParams.get('phrase');
		if (query === null || query === '') {
			const response = await fetch(`${BACKEND_BASE_URL}/api/offer/all`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			console.log(response.status);
			const text = await response.text();
			const data = parse_offer_list(text);
			return { data };
		} else {
			const response = await fetch(`${BACKEND_BASE_URL}/api/offer/get-by-fraze?word=${query}`, {
				method: 'GET',
				headers: { Authorization: `Bearer ${token}` }
			});
			const text = await response.text();
			if (text.length !== 0) {
				const data = parse_offer_list(text);
				return { data };
			} else {
				return { data: [] as ApiOfferResponse };
			}
		}
	} else {
		return { data: [] as ApiOfferResponse };
	}
};
export const actions: Actions = {
	default: async ({ url, request }) => {
		const data = await request.formData();
		const phrase = data.get('phrase')?.toString();
		if (phrase === undefined || phrase.trim().length === 0) {
			url.searchParams.delete('phrase');
			redirect(302, url);
		} else {
			url.searchParams.set('phrase', phrase);
			redirect(302, url);
		}
	}
};
