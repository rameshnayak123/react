import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  games = [
    { 
      name: 'Tap to Hold Game', 
      route: '/tap-to-hold', 
      image: 'assets/images/tap-to-hold.jpg'  // Add an image for the game
    },
    { 
      name: 'Puzzle Game', 
      route: '/game2', 
      image: 'assets/images/puzzle-game.jpg'
    },
    { 
      name: 'Adventure Quest', 
      route: '/game3', 
      image: 'assets/images/adventure-quest.jpg'
    },
    { 
      name: 'Match 3 Game', 
      route: '/game4', 
      image: 'assets/images/match-3.jpg'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  openGame(game: any) {
    this.router.navigate([game.route]); // Navigate to the selected game
  }
}
