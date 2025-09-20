import { Component } from '@angular/core';
import { AlbumService } from '../services/album.service';
@Component({
    selector: 'app-album-list',
    standalone: false,
    templateUrl: './album-list.component.html',
    styleUrl: './album-list.component.scss'
})
export class AlbumListComponent {
    albumList: any[]; // Array to hold the list of albums

    constructor(private httpService: AlbumService) { }

    ngOnInit(): void {
        this.getAlbums();
    }

    getAlbums(): void {
        this.httpService.getAlbums().subscribe(
            {
                next: (data) => {
                    console.log(data)
                    this.albumList = data;
                },
                error: (error) => console.error("Error:", error)
            }
        );
    }
}
