const remoteUrl = 'https://api.gbaranski.com/api';

export const login = async () => {
  const headers = new Headers();
  headers.append('username', localStorage.getItem('username') || '');
  headers.append('password', localStorage.getItem('password') || '');
  const loginPageUrl = `${remoteUrl}/login`;
  const res = await fetch(loginPageUrl, {
    method: 'POST',
    headers,
  });
  return res.status === 200;
};
