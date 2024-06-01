import { json } from '@sveltejs/kit';
import { fnb }  from '$shared'


export async function GET(event) {
	return json(fnb);
}
