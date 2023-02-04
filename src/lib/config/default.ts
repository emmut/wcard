import { PUBLIC_BACKGROUND_IMAGE, PUBLIC_PROFILE_IMAGE } from '$env/static/public';

export const config = {
	backgroundImage: PUBLIC_BACKGROUND_IMAGE ?? '',
	profilePicture: PUBLIC_PROFILE_IMAGE ?? ''
};