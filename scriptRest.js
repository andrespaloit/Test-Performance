import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

export const options = { 
	  vus: '1500',
    duration: '60s',
    iterations: 1500,
    maxRedirects: 4 };

export default function () {
  const data = JSON.stringify({
    phone: '310265478',
    otpCode: 'dsgdh55dfg156df4g6df',
    deviceId: '111',
    deliveryTarget: '12234dft453d'
  });
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  var response = http.post('http://localhost:8080/v1/spin/otp/verify', data, params);
  check(response, {
    'is status 200': (r) => r.status === 200,
  });
}