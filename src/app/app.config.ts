import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {  RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),       importProvidersFrom(RouterModule.forRoot(routes))
  ]
};
