import { ref } from 'vue';


const components = ref([
  {
    id:1,
    photo: 'https://allegro.stati.pl/AllegroIMG/PRODUCENCI/GIGABYTE/GV-N308TGAMING-OC-12GD/1-karta-graficzna-box.jpg',
    title: 'NVIDIA GeForce RTX 3080 Ti',
    description: 'Super wydajna karta graficzna do gamingu w 4K.',
    price: 2999.99,
    buyers: 120,
    specifications: {
      chipset: 'RTX 3080 Ti',
      memory: '12 GB GDDR6X',
      interface: 'PCI Express 4.0',
      outputs: '3x DisplayPort, 2x HDMI',
      power: '750W PSU required'
    },
    comments: [
      {
        rating: 4.9,
        author: 'Mark Johnson',
        text: 'Fantastyczna karta graficzna. Idealna do gier w 4K.'
      },
      {
        rating: 4.7,
        author: 'Anna Kowalska',
        text: 'Świetna wydajność w grach. Cieszę się, że wybrałem ten model.'
      }
    ]
  },
  {
    id:2,
    photo: 'https://cdn.al.to/i/setup/images/prod/big/product-new-big,,2020/11/pr_2020_11_25_15_39_24_118_04.jpg',
    title: 'AMD Radeon RX 6800 XT',
    description: 'Potężna karta graficzna AMD dla entuzjastów gamingu.',
    price: 2499.99,
    buyers: 95,
    specifications: {
      chipset: 'RX 6800 XT',
      memory: '16 GB GDDR6',
      interface: 'PCI Express 4.0',
      outputs: '2x DisplayPort, 2x HDMI',
      power: '750W PSU recommended'
    },
    comments: [
      {
        rating: 4.6,
        author: 'Peter Brown',
        text: 'Super wydajność w grach. Zdecydowanie polecam.'
      },
      {
        rating: 4.8,
        author: 'Sophie Green',
        text: 'Świetna karta do obróbki grafiki. Szybka i stabilna.'
      }
    ]
  },
  {
    id:12345,
    photo: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/12/pr_2021_12_23_9_45_10_282_00.jpg',
    title: 'Intel Core i9-12900K',
    description: 'Flagowy procesor Intel z serii Alder Lake dla wymagających użytkowników.',
    price: 699.99,
    buyers: 150,
    specifications: {
      cores: '16 (8+8)',
      threads: '24',
      baseClock: '3.2 GHz',
      boostClock: '5.2 GHz',
      socket: 'LGA 1700',
      power: '125W TDP'
    },
    comments: [
      {
        rating: 4.8,
        author: 'John Smith',
        text: 'Wyjątkowa wydajność. Idealna do gamingu i profesjonalnych zastosowań.'
      },
      {
        rating: 4.7,
        author: 'Sophia Brown',
        text: 'Szybki i niezawodny. Spełnia moje oczekiwania.'
      }
    ]
  },
  {
    id:3,
    photo: 'https://komputerymarkowe.pl/39787-large_default/procesor-amd-ryzen-7-5800x.jpg',
    title: 'AMD Ryzen 7 5800X',
    description: 'Wydajny procesor AMD dla entuzjastów gamingu i profesjonalistów.',
    price: 499.99,
    buyers: 120,
    specifications: {
      cores: '8',
      threads: '16',
      baseClock: '3.8 GHz',
      boostClock: '4.7 GHz',
      socket: 'AM4',
      power: '105W TDP'
    },
    comments: [
      {
        rating: 4.6,
        author: 'Emma Davis',
        text: 'Dobry procesor do gier i pracy biurowej.'
      },
      {
        rating: 4.4,
        author: 'Oliver Wilson',
        text: 'Stabilny i wydajny. Polecam dla użytkowników wymagających.'
      },
    ],
  },
  {
    id:4,
    photo: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/17/1787845/SAMSUNG-970-Evo-Plus-1TB-bez-linku.jpg',
    title: 'Samsung 970 Evo Plus 1TB NVMe SSD',
    description: 'Szybki i niezawodny dysk SSD NVMe dla profesjonalistów.',
    price: 299.99,
    buyers: 80,
    specifications: {
      capacity: '1 TB',
      interface: 'NVMe PCIe Gen 3.0 x4',
      readSpeed: 'up to 3500 MB/s',
      writeSpeed: 'up to 3300 MB/s',
      formFactor: 'M.2 2280'
    },
    comments: [
      {
        rating: 4.9,
        author: 'Emily Brown',
        text: 'Niebywała prędkość i niezawodność. Najlepszy dysk NVMe na rynku.'
      },
      {
        rating: 4.7,
        author: 'Daniel Wilson',
        text: 'Świetny wybór do gamingu i profesjonalnych zastosowań.'
      }
    ]
  },
  {
    id:5,
    photo: 'https://images.merstatic.com/imgcache/resized/images/offer/2024/05/15/597290_6644b1dea261c.jpeg',
    title: 'Western Digital WD Blue 2TB HDD',
    description: 'Pojemny i niezawodny dysk HDD dla użytkowników domowych.',
    price: 149.99,
    buyers: 100,
    specifications: {
      capacity: '2 TB',
      interface: 'SATA 6 Gb/s',
      speed: '5400 RPM',
      cache: '256 MB',
      formFactor: '3.5 inch'
    },
    comments: [
      {
        rating: 4.5,
        author: 'Sophia Johnson',
        text: 'Solidny wybór dla osób potrzebujących dużo miejsca na dane.'
      },
      {
        rating: 4.2,
        author: 'Michael Smith',
        text: 'Dobra cena za dużą pojemność. Polecam dla użytkowników domowych.'
      }
    ]
  }
]);


export default components;
