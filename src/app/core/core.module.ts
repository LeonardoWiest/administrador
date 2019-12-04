import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { FooterComponent } from "src/app/core/components/footer/footer.component";
import { HeaderComponent } from "src/app/core/components/header/header.component";
import { LayoutComponent } from "src/app/core/components/layout/layout.component";

const components = [LayoutComponent, HeaderComponent, FooterComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule has already been loaded. You should only import Core modules in the AppModule only."
      );
    }
  }
}
