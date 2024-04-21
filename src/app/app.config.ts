import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { firebaseConfig } from './constants/constants';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";


export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes),
	provideHttpClient(),
	provideClientHydration(),
	importProvidersFrom([
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		AngularFirestoreModule,
		]),
	],
  };
