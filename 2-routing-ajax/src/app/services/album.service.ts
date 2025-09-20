import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AlbumService {

    constructor(private http: HttpClient) { }

    private apiURL = "https://jsonplaceholder.typicode.com";

    /* HTTP GET Methods*/

    // Method to get all albums
    getAlbums(): Observable<any> {
        return this.http.get<any>(`${this.apiURL}/albums`);
    } // getAlbums()

    // Method to get a specific album by its ID
    getAlbumById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiURL}/photos?albumId=${id}`);
    } // getAlbumsById()
}
