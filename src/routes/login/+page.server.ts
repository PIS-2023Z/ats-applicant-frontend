import { BACKEND_BASE_URL } from '$env/static/private';
import { error, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		let email = data.get('email')!.toString();
		let password = data.get('password')!.toString();
		let body = { email, password };

		const response = await fetch(`${BACKEND_BASE_URL}/api/auth/authenticate`, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		});
		if (response.status === 400) {
			error(400, "given account doesn't exist");
		}
		const token = response.headers.get('token')!;
		console.log(response.status);
		cookies.set('email', email, { path: '/' });
		cookies.set('token', token, { path: '/' });
		redirect(302, '/');
	}
};
