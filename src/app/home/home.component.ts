import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  episodes = [];
  videoLink = null;
  chosenVideoID = null;
  loading = false;
  buttonText = `Obtenir l'épisode`;
  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 30; j++) {
        this.episodes.push(`choufli hal saison ${i} episode ${j}`);
      }
    }
    for (let i = 1; i <= 15; i++) {
      this.episodes.push(`choufli hal saison 6 episode ${i}`);
    }
  }

  findVideo(items): any {
    return items.find(
      (item) =>
        item.snippet.channelId.localeCompare('UCJW9gatYczI191TunQxMGbA') === 0 ||
        item.snippet.channelId.localeCompare('UCdvWVsmQBROkgcGzVep73oA') === 0
    ).id.videoId;
  }

  onEpisode(): void {
    this.loading = true;
    const selectedEp = Math.floor(Math.random() * this.episodes.length);
    this.youtubeService.getVideo(this.episodes[selectedEp]).subscribe(
      (res) => {
        this.chosenVideoID = this.findVideo(res.items);
        // this.chosenVideoID = res.items[0].id.videoId || null;
        this.videoLink = `https://www.youtube.com/embed/${this.chosenVideoID}`;
        this.loading = false;
        this.buttonText = `Obtenir une autre`;
        console.log(this.chosenVideoID);
      },
      () => this.loading = false
    );
  }
}
