import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable()
export class MatIconsService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      `icon_label`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/unicorn_icon.svg")
    );
  }

}
