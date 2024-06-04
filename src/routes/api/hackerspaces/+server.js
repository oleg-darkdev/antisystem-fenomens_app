import { json } from '@sveltejs/kit';
import { squat }  from '$shared'


export async function GET(event) {
	return json(squat);
}
