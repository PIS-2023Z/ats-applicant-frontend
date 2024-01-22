import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	cookies.delete('applicant_email', { path: '/' });
	cookies.delete('applicant_token', { path: '/' });
	redirect(302, '/');
};
