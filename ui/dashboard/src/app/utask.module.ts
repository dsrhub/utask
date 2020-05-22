import { NgModule } from '@angular/core';
import { ApiService } from './@services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { GraphService } from './@services/graph.service';
import { ResolutionService } from './@services/resolution.service';
import { TaskService } from './@services/task.service';
import { RequestService } from './@services/request.service';

const components: any[] = [
];

@NgModule({
  declarations: components,
  imports: [
    HttpClientModule,
  ],
  providers: [
    ApiService,
    GraphService,
    ResolutionService,
    TaskService,
    RequestService,
  ],
  bootstrap: [],
  entryComponents: [
  ]
})
export class UTaskModule { }
