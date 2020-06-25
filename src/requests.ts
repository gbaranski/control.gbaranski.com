import {AlarmclockData} from '@gbaranski/types';

const remoteUrl = 'https://api.gbaranski.com/api';

function getHeaders() {
  const headers = new Headers();
  headers.append('username', localStorage.getItem('username') || '');
  headers.append('password', localStorage.getItem('password') || '');
  return headers;
}

export const login = async () => {
  const loginPageUrl = `${remoteUrl}/login`;
  const res = await fetch(loginPageUrl, {
    method: 'POST',
    headers: getHeaders(),
  });
  return res.status === 200;
};

export async function getAlarmClockData(): Promise<AlarmclockData> {
  const alarmClockDataUrl = `${remoteUrl}/alarmclock/getData`;
  const res = await fetch(alarmClockDataUrl, {
    method: 'POST',
    headers: getHeaders(),
  });
  const json = await res.json();

  console.log(JSON.parse(await json));
  return await JSON.parse(json);
}

export async function sendTimeRequest(date: Date) {
  const formattedTime = `${date.getHours()}:${date.getMinutes()}`;
  const headers = getHeaders();
  headers.append('time', formattedTime);
  const res = await fetch(`${remoteUrl}/alarmclock/setTime`, {
    method: 'POST',
    headers,
  });
  return res.ok;
}

export async function switchAlarmState(state: number) {
  const headers = getHeaders();

  headers.append('state', String(+!state));
  const res = await fetch(`${remoteUrl}/alarmclock/switchState`, {
    method: 'POST',
    headers,
  });
  return res.ok;
}
