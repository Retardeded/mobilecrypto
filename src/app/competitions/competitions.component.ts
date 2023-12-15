import { Component } from '@angular/core';
import { Competition } from './competition.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent {
  competitions: Competition[] = [
    {
      id: 1,
      name: 'Roger Korsgaard',
      alerts: 20,
      winRate: 85,
      yield: 11,
      profit: '+$7,500',
      percentage: 45,
      rank: '/assets/icons/1st-place.png',
      profileImage: '/assets/icons/roger-avatar.png',
      background: 'linear-gradient(147deg, #000000 0%, #434343 74%)'
    },
    {
      id: 2,
      name: 'Charlie Herwitz',
      alerts: 20,
      winRate: 85,
      yield: 11,
      profit: '+$1,430',
      percentage: 25,
      rank: '/assets/icons/2nd-place.png',
      profileImage: '/assets/icons/charlie-avatar.png',
      background: 'linear-gradient(147deg, #000000 0%, #2c3e50 74%)'
    },
    {
      id: 3,
      name: 'Ahmad Mango',
      alerts: 20,
      winRate: 85,
      yield: 11,
      profit: '-$1,500',
      percentage: 10,
      rank: '/assets/icons/3rd-place.png',
      profileImage: '/assets/icons/ahmad-avatar.png',
      background: 'linear-gradient(147deg, #000000 0%, #504e4e 74%)'
    },
  ];
}
