import { BACKEND_BASE_URL } from '$env/static/private';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		let email = data.get('email')!.toString();
		let password = data.get('password')!.toString();
		let phone = data.get('phone')!.toString();
		let body = {
			accountRole: 'EMPLOYEE',
			email,
			password,
			phone
		};
		const response = await fetch(`${BACKEND_BASE_URL}/api/auth/create`, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' }
		});
		console.log(response.status);
		redirect(302, '/');
	}
};
