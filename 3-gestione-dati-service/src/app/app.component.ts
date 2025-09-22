import { Component } from '@angular/core';
import { PostService } from './service/post.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.scss'
})
export class AppComponent {
    postList: any[]; // Array to hold the list of posts

    constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.postService.getPosts().subscribe(
            {
                next: (data) => {
                    console.log(data);
                    this.postList = data;
                },
                error: (error) => console.error("Error:", error),
                complete: () => console.log("Completed")
            }
        );
    }

    // getPosts() {
    //     return this.postService.getPosts();
    // }

    getPostsByCategory(category: string) {
        return this.postService.getPostsByCategory(category);
    }
}
