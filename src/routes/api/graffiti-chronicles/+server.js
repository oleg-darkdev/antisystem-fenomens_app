import { json } from '@sveltejs/kit';
import { graffiti }  from '$shared'


export async function GET(event) {
	return json(graffiti);
}
