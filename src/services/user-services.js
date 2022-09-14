import apiFetch from './api-fetch';

export async function getUser() {
  const { token, ...user } = await apiFetch('profile');
  return user;
}
