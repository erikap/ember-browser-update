import browserUpdate from 'browser-update';

export function initialize(application) {
  if (application.hasRegistration('config:environment')) {
    const config = application.resolveRegistration('config:environment');
    browserUpdate(config['browserUpdate']);
  }
}

export default {
  initialize
};
