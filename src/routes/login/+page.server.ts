import { BACKEND_BASE_URL } from '$env/static/private';
import { AccountRole } from '$lib';
import type { AccountData } from '$lib/types';
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
		const text = await response.text();
		const account_data = JSON.parse(text) as AccountData;
		console.log(account_data.accountRole);
		if ((account_data.accountRole as AccountRole) !== AccountRole.EMPLOYEE) {
			error(400, "given account doesn't exist");
		}
		const token = response.headers.get('token')!;
		console.log(text);
		cookies.set('applicant_email', email, { path: '/' });
		cookies.set('applicant_token', token, { path: '/' });
		redirect(302, '/');
	}
};
