import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes),
	provideHttpClient(),
	provideClientHydration(),
	importProvidersFrom([
	  provideFirebaseApp(() => initializeApp({
		apiKey: 'AIzaSyB9ZaV18chtU-OU6qUl-vqPWr0msflGGoA',
		authDomain: 'shalomrecepcioneseventos-608a4.firebaseapp.com',
		databaseURL: 'https://shalomrecepcioneseventos-608a4-default-rtdb.firebaseio.com',
		projectId: 'shalomrecepcioneseventos-608a4',
		storageBucket: 'shalomrecepcioneseventos-608a4.appspot.com',
		messagingSenderId: '953200397435',
		appId: '1:953200397435:web:9e2c8c5e9a73bff6da26de'
	  })),
	  provideFirestore(() => getFirestore()),
	])]
  };
