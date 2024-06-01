import { json } from '@sveltejs/kit';
import { ror }  from '$shared'


export async function GET(event) {
	return json(ror);
}
