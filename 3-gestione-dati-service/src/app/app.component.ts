import { Component } from '@angular/core';
import { PostService } from './service/post.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = '3-gestione-dati-service';


    getPosts() {
        return "";
    }

    getPostsByCategory(category: string) {
        return "";
    }
}
