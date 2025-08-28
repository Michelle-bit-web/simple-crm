import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDn91OaIeYPSCCzFXUeYkDNiC0hzNrsvbA",
  authDomain: "simple-crm-9f911.firebaseapp.com",
  projectId: "simple-crm-9f911",
  storageBucket: "simple-crm-9f911.firebasestorage.app",
  messagingSenderId: "218963384441",
  appId: "1:218963384441:web:b134d76ab7b90cbf6cdca8"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({ projectId: "simple-crm-9f911", appId: "1:218963384441:web:b134d76ab7b90cbf6cdca8", storageBucket: "simple-crm-9f911.firebasestorage.app", apiKey: "AIzaSyDn91OaIeYPSCCzFXUeYkDNiC0hzNrsvbA", authDomain: "simple-crm-9f911.firebaseapp.com", messagingSenderId: "218963384441" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
