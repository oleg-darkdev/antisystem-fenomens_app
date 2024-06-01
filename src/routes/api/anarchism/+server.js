import { json } from '@sveltejs/kit';
import { anarchism }  from '$shared'


export async function GET(event) {
	return json(anarchism);
}
