import { json } from '@sveltejs/kit';
import { hs }  from '$shared'


export async function GET(event) {
	return json(hs);
}
