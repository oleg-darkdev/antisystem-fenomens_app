import { json } from '@sveltejs/kit';
import { eco }  from '$shared'


export async function GET(event) {
	return json(eco);
}
