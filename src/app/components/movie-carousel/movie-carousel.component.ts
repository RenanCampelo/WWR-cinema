import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Movie {
  title: string;
  genre: string;
  duration: string;
  age: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css'],
  imports: [CommonModule],
})
export class MovieCarouselComponent {
  selectedMovie: Movie | null = null;

  movies: Movie[] = [
    // Em Cartaz
    {
      title: 'Ainda Estou Aqui',
      genre: 'Em Cartaz',
      duration: '103 min',
      age: '14',
      image: 'img/Filmes/aindaEstouAqui.jpg',
      description: 'Um drama emocionante sobre recomeços e laços familiares.'
    },
    {
      title: 'Branca de Neve',
      genre: 'Em Cartaz',
      duration: '101 min',
      age: '10',
      image: 'img/Filmes/Branca_de_Neve.webp',
      description: 'Uma releitura encantadora do clássico conto de fadas.'
    },
    {
      title: 'Código Alarum',
      genre: 'Em Cartaz',
      duration: '110 min',
      age: '16',
      image: 'img/Filmes/CodigoAlarum.jpeg',
      description: 'Um thriller tecnológico cheio de reviravoltas.'
    },
    {
      title: 'Flow Gato',
      genre: 'Em Cartaz',
      duration: '85 min',
      age: 'L',
      image: 'img/Filmes/FLowGato.webp',
      description: 'Animação divertida sobre amizade e aventura.'
    },
    {
      title: 'KK Lendas',
      genre: 'Em Cartaz',
      duration: '120 min',
      age: '16',
      image: 'img/Filmes/KKLendas.jpg',
      description: 'Histórias de heróis lendários e batalhas épicas.'
    },
    {
      title: 'O Macaco',
      genre: 'Em Cartaz',
      duration: '100 min',
      age: '18',
      image: 'img/Filmes/OMacaco.webp',
      description: 'Suspense baseado em uma obra perturbadora.'
    },
    {
      title: 'Pecadores',
      genre: 'Em Cartaz',
      duration: '115 min',
      age: '16',
      image: 'img/Filmes/Pecadores.jpg',
      description: 'Conflitos humanos em uma narrativa intensa.'
    },
    {
      title: 'Quando Chega o Outono',
      genre: 'Em Cartaz',
      duration: '95 min',
      age: '14',
      image: 'img/Filmes/QuandoChegaOOutono.jpg',
      description: 'Uma história de amor que floresce com as estações.'
    },
    {
      title: 'Thunderbolts',
      genre: 'Em Cartaz',
      duration: '130 min',
      age: '16',
      image: 'img/Filmes/Thunderbolts.webp',
      description: 'Equipe improvável enfrentando ameaças globais.'
    },
    {
      title: 'Um Filme Minecraft',
      genre: 'Em Cartaz',
      duration: '100 min',
      age: 'L',
      image: 'img/Filmes/UmFilmeMinecraft.jpg',
      description: 'Aventura divertida no mundo pixelado do Minecraft.'
    },
    {
      title: 'Vitória',
      genre: 'Em Cartaz',
      duration: '105 min',
      age: '14',
      image: 'img/Filmes/Vitoria.webp',
      description: 'História inspiradora sobre perseverança e sucesso.'
    },
  
    // Em breve
    {
      title: 'Como Treinar Seu Dragão',
      genre: 'Em breve',
      duration: '98 min',
      age: 'L',
      image: 'img/Filmes/emBreve/ComoTreinarSeuDragao.jpg',
      description: 'Aventura épica de amizade entre humanos e dragões.'
    },
    {
      title: 'Elio',
      genre: 'Em breve',
      duration: '90 min',
      age: 'L',
      image: 'img/Filmes/emBreve/Elio.webp',
      description: 'Jornada de um garoto para descobrir sua identidade.'
    },
    {
      title: 'Fórmula 1',
      genre: 'Em breve',
      duration: '110 min',
      age: '14',
      image: 'img/Filmes/emBreve/FormulaUM.webp',
      description: 'Velocidade, adrenalina e desafios nas pistas.'
    },
    {
      title: 'JW Recomeço',
      genre: 'Em breve',
      duration: '112 min',
      age: '14',
      image: 'img/Filmes/emBreve/JWRecomeco.webp',
      description: 'História de redenção e novas oportunidades.'
    },
    {
      title: 'Lili & Stitch',
      genre: 'Em breve',
      duration: '90 min',
      age: 'L',
      image: 'img/Filmes/emBreve/Lili_Stitch.jpg',
      description: 'Amizade intergaláctica em uma animação emocionante.'
    },
    {
      title: 'Megan 2',
      genre: 'Em breve',
      duration: '105 min',
      age: '16',
      image: 'img/Filmes/emBreve/Megan2.webp',
      description: 'Terror psicológico e inteligência artificial.'
    },
    {
      title: 'Missão Impossível',
      genre: 'Em breve',
      duration: '130 min',
      age: '16',
      image: 'img/Filmes/emBreve/MissaoImpossivel.webp',
      description: 'Missões arriscadas e espionagem em alta velocidade.'
    },
    {
      title: 'Shrek 5',
      genre: 'Em breve',
      duration: '95 min',
      age: 'L',
      image: 'img/Filmes/emBreve/Shrek5.webp',
      description: 'A continuação das aventuras do ogro mais amado.'
    },
    {
      title: 'Superman',
      genre: 'Em breve',
      duration: '125 min',
      age: '14',
      image: 'img/Filmes/emBreve/Superman.webp',
      description: 'Herói lendário luta para salvar a humanidade.'
    },
    {
      title: 'Truque de Mestre 3',
      genre: 'Em breve',
      duration: '110 min',
      age: '14',
      image: 'img/Filmes/emBreve/TruqueDeMestre3.jpg',
      description: 'Ilusionismo e mistérios em um jogo de poder.'
    },
    {
      title: 'Vingadores Doomsday',
      genre: 'Em breve',
      duration: '140 min',
      age: '16',
      image: 'img/Filmes/emBreve/VingadoresDoomsday.webp',
      description: 'A batalha final dos heróis contra o apocalipse.'
    }
  ];
  

  // Índice atual para cada gênero, para controlar a "página" do carrossel
  currentIndexByGenre: { [genre: string]: number } = {};

  // Inicializa índices com 0 para cada gênero (opcional)
  constructor() {
    this.getGenres().forEach(genre => {
      this.currentIndexByGenre[genre] = 0;
    });
  }

  getGenres(): string[] {
    return [...new Set(this.movies.map(movie => movie.genre))];
  }

  getMoviesByGenre(genre: string): Movie[] {
    return this.movies.filter(movie => movie.genre === genre);
  }

  openDetails(movie: Movie) {
    this.selectedMovie = movie;
  }

  closeDetails() {
    this.selectedMovie = null;
  }

  // Navegar no carrossel, controlando índice
  scrollCarousel(genre: string, direction: 'left' | 'right') {
    const movies = this.getMoviesByGenre(genre);
    const maxIndex = Math.max(0, movies.length - 5); // limite para mostrar 5 filmes
    
    if (direction === 'left') {
      this.currentIndexByGenre[genre] = Math.max(0, this.currentIndexByGenre[genre] - 1); // passa 1 para trás
    } else {
      this.currentIndexByGenre[genre] = Math.min(maxIndex, this.currentIndexByGenre[genre] + 1); // passa 1 para frente
    }
  }

  getAgeColor(age: string): string {
    switch (age) {
      case 'L':
        return 'green';
      case '10':
        return 'aqua';
      case '12':
        return 'orange';
      case '14':
        return '#FC6C03';
      case '16':
        return 'red';
      case '18':
        return 'black';
      default:
        return 'gray';
    }
  }
  
  
}