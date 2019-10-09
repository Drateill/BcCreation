import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatComponent } from './stat/stat.component';
import { StatsService } from './stats.service';
import { InfamyComponent } from './infamy/infamy.component';
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    StatComponent,
    InfamyComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
