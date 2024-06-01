import { json } from '@sveltejs/kit';
import { lgbtqia }  from '$shared'


export async function GET(event) {
	return json(lgbtqia);
}
