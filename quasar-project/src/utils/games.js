import { ref } from 'vue';

const games = ref([
  {
    id: 51,
    photo: 'https://ocdn.eu/sport-images-transforms/1/xlfk9lBaHR0cHM6Ly9vY2RuLmV1L3B1bHNjbXMvTURBXy8xYjY3M2M5OTJlYjE3NWY2YTI3NTNjODRjYjE4MjNmNy5qcGeTlQMAAM0HgM0EOJUCzQSwAMLDkwmmNDQwNjBhBt4AAqEwAaExAQ/cyberpunk-2077.jpg',
    title: 'Cyberpunk 2077',
    description: 'Otwarty świat, akcja RPG osadzona w futurystycznym mieście Night City.',
    price: 199.99,
    buyers: 500,
    comments: [
      {
        rating: 4.5,
        author: 'Adam Smith',
        text: 'Gra ma niesamowity klimat i głęboką fabułę. Polecam każdemu fanowi RPG.'
      },
      {
        rating: 4.8,
        author: 'Eve Johnson',
        text: 'Świetna gra, chociaż wymaga mocnego sprzętu. Grafika jest oszałamiająca.'
      }
    ]
  },
  {
    id: 52,
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4e17krUMGAfE22wZAowU6mZCF-8KOXn1esw&s',
    title: 'The Witcher 3: Wild Hunt',
    description: 'Epicka gra RPG osadzona w świecie mrocznych fantasy, stworzona przez CD Projekt RED.',
    price: 149.99,
    buyers: 600,
    comments: [
      {
        rating: 4.9,
        author: 'Sophie Brown',
        text: 'Jedna z najlepszych gier, jakie kiedykolwiek grałem. Fabuła jest poruszająca i pełna zwrotów akcji.'
      },
      {
        rating: 4.7,
        author: 'John Doe',
        text: 'Świetna gra, znakomita grafika i mechanika. Polecam każdemu fanowi RPG.'
      }
    ]
  },
  {
    id: 53,
    photo: 'https://store-images.s-microsoft.com/image/apps.58752.13942869738016799.078aba97-2f28-440f-97b6-b852e1af307a.95fdf1a1-efd6-4938-8100-8abae91695d6?q=90&w=480&h=270',
    title: 'Red Dead Redemption 2',
    description: 'Klimatyczny western od Rockstar Games z otwartym światem i rozbudowaną fabułą.',
    price: 179.99,
    buyers: 550,
    comments: [
      {
        rating: 4.8,
        author: 'Emily White',
        text: 'Gra jest absolutnie niesamowita, od grafiki po fabułę. Czuć się jak w prawdziwym westernie.'
      },
      {
        rating: 4.6,
        author: 'Michael Green',
        text: 'Przepiękna gra z ogromnym światem do eksploracji. Historia jest wciągająca i pełna emocji.'
      }
    ]
  },
  {
    id: 54,
    photo: 'https://lowcygier.pl/wp-content/uploads/2022/06/god-of-war-ragnarok-facebook-720x378.jpg',
    title: 'God of War',
    description: 'Przygodowa gra akcji osadzona w mitologii nordyckiej, z dynamiczną walką i głęboką fabułą.',
    price: 199.99,
    buyers: 400,
    comments: [
      {
        rating: 4.9,
        author: 'Laura Brown',
        text: 'Fenomenalna gra, która łączy niesamowitą historię z wspaniałą mechaniką walki.'
      },
      {
        rating: 4.8,
        author: 'David Blue',
        text: 'Świetna fabuła i postacie. Gra jest przepiękna wizualnie.'
      }
    ]
  },
  {
    id: 55,
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8r0T4HjsbfayJzmOnjki2pEt37u7TbLHkBQ&s',
    title: 'Assassin’s Creed Valhalla',
    description: 'Gra akcji RPG, w której wcielasz się w wikinga podbijającego Anglię.',
    price: 159.99,
    buyers: 450,
    comments: [
      {
        rating: 4.7,
        author: 'Jessica Green',
        text: 'Świetna gra, która oddaje klimat wikingów i oferuje ogromny świat do eksploracji.'
      },
      {
        rating: 4.5,
        author: 'Chris Red',
        text: 'Mechanika walki jest świetna, a fabuła wciągająca.'
      }
    ]
  },
  {
    id: 56,
    photo: 'https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899.jpg?h=270&quality=medium&resize=1&w=480',
    title: 'Horizon Zero Dawn',
    description: 'Postapokaliptyczna gra akcji z otwartym światem, pełnym tajemnic i mechanicznych stworzeń.',
    price: 139.99,
    buyers: 520,
    comments: [
      {
        rating: 4.8,
        author: 'Sarah Black',
        text: 'Przepiękny świat i wciągająca fabuła. Gra daje dużo frajdy z eksploracji.'
      },
      {
        rating: 4.7,
        author: 'Mark Yellow',
        text: 'Świetna gra z unikalną mechaniką i fascynującą historią.'
      }
    ]
  },
  {
    id: 57,
    photo: 'https://gamemusichub.files.wordpress.com/2021/04/diapositiva7.png?w=1024&h=666&crop=1',
    title: 'Ghost of Tsushima',
    description: 'Przygodowa gra akcji osadzona w feudalnej Japonii, z piękną grafiką i głęboką fabułą.',
    price: 179.99,
    buyers: 480,
    comments: [
      {
        rating: 4.9,
        author: 'Alex Brown',
        text: 'Niesamowita gra, która oddaje klimat samurajów i oferuje przepiękny świat do eksploracji.'
      },
      {
        rating: 4.7,
        author: 'Mia White',
        text: 'Fabuła i postacie są świetnie napisane. Gra jest piękna wizualnie.'
      }
    ]
  },
  {
    id: 58,
    photo: 'https://image.api.playstation.com/vulcan/img/rnd/202009/2921/8lUGKoEzuAQE7pWDsHIDqLd5.jpg',
    title: 'Death Stranding',
    description: 'Unikalna gra akcji stworzona przez Hideo Kojimę, z nietypową fabułą i mechaniką.',
    price: 199.99,
    buyers: 370,
    comments: [
      {
        rating: 4.6,
        author: 'Oliver Black',
        text: 'Gra jest bardzo oryginalna i oferuje coś zupełnie innego niż typowe gry akcji.'
      },
      {
        rating: 4.5,
        author: 'Emily Grey',
        text: 'Nietypowa fabuła i wyjątkowa mechanika. Gra zdecydowanie warta uwagi.'
      }
    ]
  },
  {
    id: 59,
    photo: 'https://fanatical.imgix.net/product/original/c35ad0a5-bfe2-42fc-a7db-cd4e4e794952.jpeg?auto=compress,format&w=870&fit=crop&h=489',
    title: 'Doom Eternal',
    description: 'Dynamiczna strzelanka pierwszoosobowa z szybką akcją i intensywną walką.',
    price: 129.99,
    buyers: 490,
    comments: [
      {
        rating: 4.7,
        author: 'Nathan Red',
        text: 'Niesamowicie dynamiczna i intensywna gra. Świetna dla fanów strzelanek.'
      },
      {
        rating: 4.6,
        author: 'Sophia Blue',
        text: 'Akcja jest szybka i brutalna, dokładnie tego oczekiwałam po tej grze.'
      }
    ]
  },
  {
    id: 60,
    photo: 'https://cdn1.epicgames.com/offer/6f43ab8025ad42d18510aa91e9eb688b/EGS_FINALFANTASYVIIREMAKEINTERGRADE_SquareEnix_S1_2560x1440-85f829541a833442eaace75d02e0f07d',
    title: 'Final Fantasy VII Remake',
    description: 'Remake klasycznej gry RPG z nowoczesną grafiką i rozbudowaną fabułą.',
    price: 189.99,
    buyers: 430,
    comments: [
      {
        rating: 4.8,
        author: 'Liam Green',
        text: 'Świetny remake, który zachowuje ducha oryginału, ale dodaje wiele nowości.'
      },
      {
        rating: 4.7,
        author: 'Olivia Black',
        text: 'Piękna gra z wciągającą fabułą. Remake na najwyższym poziomie.'
      }
    ]
  }
]);

export default games;
