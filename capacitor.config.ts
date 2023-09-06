import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.raharja.bloodymary',
  appName: 'Bloody Mary',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
