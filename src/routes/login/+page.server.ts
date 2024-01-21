import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		let email = data.get('email')!.toString();
		let password = data.get('password')!.toString();

		let token = password;
		cookies.set('email', email, { path: '/' });
		cookies.set('token', token, { path: '/' });
		redirect(302, '/');
	}
};
