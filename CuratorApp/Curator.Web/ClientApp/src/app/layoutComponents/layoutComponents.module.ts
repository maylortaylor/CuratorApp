import { NgModule } from '@angular/core';

import { BannerComponent } from './banner/banner.component';
import { YoutubeChannelCardComponent } from './youtube-channel-card/youtube-channel-card.component';

@NgModule({
    imports: [],
    exports: [
        BannerComponent,
        YoutubeChannelCardComponent
    ],
    declarations: [
        BannerComponent,
        YoutubeChannelCardComponent
    ],
    providers: [],
})
export class LayoutComponentsModule { }
