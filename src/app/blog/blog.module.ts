import { BGVComponent } from "./bgv/bgv.component";
import { BWSComponent } from "./bws/bws.component";
import { BlogComponent } from "./blog.component";
import { RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "BGV", component: BGVComponent },
      { path: "BWS", component: BWSComponent },
      { path: "singleblog", component: BlogComponent },
    ]),
  ],
  declarations: [BlogComponent, BWSComponent, BGVComponent],
})
export class BlogModule {}
