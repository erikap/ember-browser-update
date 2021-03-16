import browserUpdate from 'browser-update';

export function initialize(application) {
  if(typeof FastBoot === 'undefined') {
    if (application.hasRegistration('config:environment')) {
      const config = application.resolveRegistration('config:environment');
      browserUpdate(config['browserUpdate']);
    }
  }
}

export default {
  initialize
};
