import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		let email = data.get('email')!.toString();
		let password = data.get('password')!.toString();
		let body = { email, password };
		console.log(body);
	}
};
