import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	let token = cookies.get('applicant_token');
	return {
		logged_in: token !== undefined && token.length !== 0,
		email: cookies.get('applicant_email')
	};
};
