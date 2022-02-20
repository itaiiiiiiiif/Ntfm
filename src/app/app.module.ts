import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { WeatherComponent } from './Netafim/widgets/weather/weather/weather.component';
import { WeatherWidgetComponent } from './Netafim/widgets/weather/weather-widget/weather-widget.component';
import { SearchInputComponent } from './Netafim/widgets/weather/search-input/search-input.component';
import { DateViewComponent } from './Netafim/widgets/weather/date-view/date-view.component';
import { HomeComponent } from './Netafim/home/home.component';
import { AppRoutingModule } from './router/app-routing-module';
import { MaterialModule } from './modules/material/material.module';
import { PageNotFoundComponent } from './Netafim/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NAViewComponent } from './Netafim/widgets/weather/naview/naview.component';
import { ApiService } from './Netafim/api.service';
import { EmptyComponent } from './Netafim/empty/empty/empty.component';

const appInitializerFn = (apiService: ApiService) => {
  return () => {
    return apiService.loadInfo();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PageNotFoundComponent,
    NAViewComponent,
    WeatherComponent,
    WeatherWidgetComponent,
    SearchInputComponent,
    DateViewComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ApiService]
    },
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
