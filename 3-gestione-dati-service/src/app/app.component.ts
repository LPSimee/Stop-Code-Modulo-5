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

    tabs = [
        { name: 'Tutti', category: '' }, // since 'all' is not a category in the API, we use an empty string to fetch all posts
        { name: 'Viaggi', category: 'travel' },
        { name: 'Cucina', category: 'food' },
        { name: 'Moda', category: 'fashion' }
    ];
    postList: any[]; // Array to hold the list of posts

    activeTabIndex = 0;
    activeTabCategory = 'all';

    favoritePosts: string[] = []; // Array to hold favorite posts

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

    getPostsByCategory(category: string) {
        this.postService.getPostsByCategory(category).subscribe(
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

    selectTab(index: number) {
        this.activeTabIndex = index;
        this.activeTabCategory = this.tabs[index].category;
        this.getPostsByCategory(this.activeTabCategory);
    }

    addToFavorites(postTitle: string) {
        if (!this.favoritePosts.includes(postTitle)) {
            this.favoritePosts.push(postTitle);
        }
    }

    removeFromFavorites(postTitle: string) {
        this.favoritePosts = this.favoritePosts.filter(title => title !== postTitle);
    }

    clearFavoriteList() {
        this.favoritePosts = [];
    }
}
