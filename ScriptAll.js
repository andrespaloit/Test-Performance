import { default as firstScenario } from './scriptRest.js';
import { default as secondScenario } from './ScriptGRPC.js';
var vus = 1;
var duration= '60s';
export const options = {
  scenarios: {
    scriptAuthenticatedScenario: {
      exec: 'myFirstScenario',
      executor: 'constant-vus',
      vus,
      duration,
    },
    scriptUnauthenticatedScenario: {
      exec: 'mySecondScenario',
      executor: 'constant-vus',
      vus,
      duration,
    },
  },
};

export function myFirstScenario() {
  firstScenario();
}

export function mySecondScenario() {
  secondScenario();
}
