import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Injectable()
export class HomeDataService {

    constructor(
        private api: ApiService
    ) { }

    getHomeData() {
        return this.api.get('values');
    }
}