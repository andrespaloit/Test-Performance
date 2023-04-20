import grpc from 'k6/net/grpc';
import { check } from 'k6';
import exec from 'k6/execution';

const client = new grpc.Client();
client.load(['definitions'], 'OTPVerify.proto');


export const options = { 
  vus: '1500',
  duration: '60s',
  iterations: 1500,
  maxRedirects: 4 };


export default () => {
  if (exec.vu.iterationInScenario == 0) {
    client.connect('localhost:9090', { plaintext: true });
  }
    const data = { "phone" : "1", "otpCode" : "123", "deviceId":"311", "deliveryTarget": "111" };
    const response = client.invoke('com.spin.grpc.OTPService/verifyOTP', data);

    check(response, {
      'status is OK': (r) => r && r.status === grpc.StatusOK,
    });

    client.close();

 };