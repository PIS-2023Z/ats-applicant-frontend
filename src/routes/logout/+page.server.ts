import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	cookies.delete('email', { path: '/' });
	cookies.delete('token', { path: '/' });
	redirect(302, '/');
};
