import { BACKEND_BASE_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const response = await fetch(
		`${BACKEND_BASE_URL}/api/offer/get-employers`
		// , {
		// 	headers: {
		// 		Authorization: `Bearer ${cookies.get("token")}`
		// 	}
		// }
	);
	console.log(response.status);
	console.log(await response.text());

};
