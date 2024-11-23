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
      name: 'Tap to Hold', 
      route: '/tap-to-hold', 
      image: 'https://media.tenor.com/XHkc2umHa8AAAAAi/degen-games-games.gif'  // Add an image for the game
    },
    { 
      name: 'Curvepath', 
      route: '/curve-path', 
      image: 'assets/images/puzzle-game.jpg'
    },
    { 
      name: 'Quest', 
      route: '/game3', 
      image: 'assets/images/adventure-quest.jpg'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  // Method to open game route
  openGame(game: any) {
    this.router.navigate([game.route]); // Navigate to the selected game
  }

  // Generate a random color for each game card (you can customize this further)
  getRandomColor(index: number): string {
    const colors = [
      '#f8cdda', // Soft pink (matches the end of the gradient)
      '#ff9a8b', // Coral (complements the pink)
      '#6b3f9c', // Purple (adds contrast to the gradient)
      '#b2b8e5', // Light lavender (works well with both pink and blue)
    ];
  
    return colors[index % colors.length]; // Ensures the color cycles through the array
  }
  
}
