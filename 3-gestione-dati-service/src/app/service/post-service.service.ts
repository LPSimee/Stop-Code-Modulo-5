import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class PostServiceService {
    constructor(private http: HttpClient) { }

    private apiUrl = 'http://localhost:3000/posts';

    // Method to get all posts
    getPosts(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }

    // Method to get posts by category
    getPostsByCategory(category: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}?category=${category}`);
    }
}
