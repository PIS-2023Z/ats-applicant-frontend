import { BACKEND_BASE_URL } from '$env/static/private';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return { slug: params.slug };
};

export const actions: Actions = {
	default: async ({ request, params, cookies }) => {
		const token = cookies.get('applicant_token')!;
		const data = await request.formData();
		const id = params.slug!;
		console.log({ id });
		let result = await fetch(`${BACKEND_BASE_URL}/api/application/apply/${id}`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`
			},
			body: data
		});
		console.log(result);
	}
};
