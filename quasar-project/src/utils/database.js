import { ref } from 'vue';


const database = ref([
  {
    id:1,
    photo: 'https://example.com/graphics-card1.jpg',
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
    photo: 'https://example.com/graphics-card2.jpg',
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
    photo: 'https://example.com/processor1.jpg',
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
    photo: 'https://example.com/processor2.jpg',
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
    photo: 'https://example.com/hdd1.jpg',
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
    photo: 'https://example.com/hdd2.jpg',
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
  },
  {
    id:5,
    photo: 'https://images.morele.net/i1064/13123312_0_i1064.jpg',
    title: 'Komputer stacjonarny Apple Mac Mini M1',
    description: 'Kompaktowy komputer Apple z procesorem M1, idealny do zadań biurowych i kreatywnych.',
    price: 4999.99,
    buyers: 80,
    comment: {
      rating: 4.6,
      author: 'Sophie Brown',
      text: 'Bardzo wydajny i cichy. Świetny do pracy z wieloma aplikacjami jednocześnie.'
    },
    specifications: {
      procesor: 'Apple M1',
      ram: '16 GB LPDDR4x',
      pamiec: '512 GB SSD',
      system: 'macOS Monterey'
    }
  },
  {
    id:6,
    photo: 'https://images.morele.net/i1064/13154494_0_i1064.jpg',
    title: 'Komputer stacjonarny HP Pavilion Gaming TG01',
    description: 'Solidny komputer HP z procesorem Intel Core i5 i kartą graficzną NVIDIA GeForce GTX.',
    price: 5799.99,
    buyers: 95,
    comment: {
      rating: 4.3,
      author: 'David White',
      text: 'Dobrze się sprawuje w grach. Solidna konstrukcja.'
    },
    specifications: {
      procesor: 'Intel Core i5-11400F',
      ram: '16 GB DDR4',
      pamiec: '512 GB NVMe SSD',
      system: 'Windows 11 Home'
    }
  },
  {
    id:7,
    photo: 'https://images.morele.net/i1064/13186898_0_i1064.jpg',
    title: 'Komputer stacjonarny Dell Inspiron 3880',
    description: 'Uniwersalny komputer Dell z procesorem Intel Core i7 i wysoką wydajnością.',
    price: 6999.99,
    buyers: 110,
    comment: {
      rating: 4.7,
      author: 'Emily Martinez',
      text: 'Szybki i niezawodny. Dobrze sprawdza się do pracy biurowej.'
    },
    specifications: {
      procesor: 'Intel Core i7-10700',
      ram: '16 GB DDR4',
      pamiec: '512 GB SSD',
      system: 'Windows 10 Pro'
    }
  },
  {
    id:8,
    photo: 'https://images.morele.net/i1064/13186899_0_i1064.jpg',
    title: 'Komputer stacjonarny Lenovo ThinkCentre M80q',
    description: 'Kompaktowy komputer Lenovo z procesorem Intel Core i5 i dużą ilością portów.',
    price: 5499.99,
    buyers: 85,
    comment: {
      rating: 4.5,
      author: 'Noah Taylor',
      text: 'Mały i wydajny. Idealny do biura.'
    },
    specifications: {
      procesor: 'Intel Core i5-11400T',
      ram: '16 GB DDR4',
      pamiec: '256 GB PCIe NVMe SSD',
      system: 'Windows 10 Pro'
    }
  },
  {
    id:9,
    photo: 'https://images.morele.net/i1064/13186898_0_i1064.jpg',
    title: 'Komputer stacjonarny HP EliteDesk 800 G6',
    description: 'Wydajny komputer HP z procesorem Intel Core i7 i dużą ilością pamięci RAM.',
    price: 7999.99,
    buyers: 120,
    comment: {
      rating: 4.8,
      author: 'Sophia Davis',
      text: 'Szybki i solidny. Świetny do pracy z aplikacjami biurowymi.'
    },
    specifications: {
      procesor: 'Intel Core i7-10700',
      ram: '32 GB DDR4',
      pamiec: '1 TB NVMe SSD',
      system: 'Windows 10 Pro'
    }
  },
  {
    id:10,
    photo: 'https://images.morele.net/i1064/13186900_0_i1064.jpg',
    title: 'Komputer stacjonarny Dell OptiPlex 7080',
    description: 'Solidny komputer Dell z procesorem Intel Core i5 i dużą ilością pamięci masowej.',
    price: 6499.99,
    buyers: 100,
    comment: {
      rating: 4.7,
      author: 'Daniel Johnson',
      text: 'Stabilny i wydajny. Dobrze sprawdza się w pracy biurowej.'
    },
    specifications: {
      procesor: 'Intel Core i5-10500',
      ram: '16 GB DDR4',
      pamiec: '512 GB SSD + 1 TB HDD',
      system: 'Windows 10 Pro'
    }
  },
  {
    id:11,
    photo: 'https://images.morele.net/i1064/13213547_0_i1064.jpg',
    title: 'Komputer stacjonarny ASUS ROG Strix G15CK',
    description: 'Potężny komputer ASUS z procesorem Intel Core i7 i kartą graficzną NVIDIA GeForce RTX.',
    price: 8999.99,
    buyers: 130,
    comment: {
      rating: 4.9,
      author: 'Olivia Garcia',
      text: 'Idealny do gier i wymagających zadań graficznych. Bardzo stabilny.'
    },
    specifications: {
      procesor: 'Intel Core i7-11700KF',
      ram: '32 GB DDR4',
      pamiec: '1 TB PCIe NVMe SSD',
      system: 'Windows 11 Home'
    }
  },
  {
    id:12,
    photo: 'https://images.morele.net/i1064/13186900_0_i1064.jpg',
    title: 'Komputer stacjonarny Acer Aspire TC-895',
    description: 'Praktyczny komputer Acer z procesorem Intel Core i5 i dużą pamięcią masową.',
    price: 5799.99,
    buyers: 95,
    comment: {
      rating: 4.3,
      author: 'James Wilson',
      text: 'Solidny i funkcjonalny. Dobrze sprawdza się w domowym biurze.'
    },
    specifications: {
      procesor: 'Intel Core i5-10400',
      ram: '16 GB DDR4',
      pamiec: '512 GB NVMe SSD',
      system: 'Windows 10 Home'
    }
  },
  {
    id:13,
    photo: 'https://images.morele.net/i1064/13186899_0_i1064.jpg',
    title: 'Komputer stacjonarny Lenovo Legion T5',
    description: 'Potężny komputer Lenovo z procesorem AMD Ryzen i kartą graficzną NVIDIA GeForce GTX.',
    price: 7499.99,
    buyers: 110,
    comment: {
      rating: 4.7,
      author: 'Sophia Garcia',
      text: 'Idealny do gier. Szybki i stabilny.'
    },
    specifications: {
      procesor: 'AMD Ryzen 7 5800',
      ram: '16 GB DDR4',
      pamiec: '1 TB PCIe NVMe SSD',
      system: 'Windows 10 Home'
    }
  },
  {
    id:14,
    photo: 'https://images.morele.net/i1064/13154494_0_i1064.jpg',
    title: 'Komputer stacjonarny MSI Infinite S 10th',
    description: 'Wyjątkowy komputer MSI z procesorem Intel Core i7 i kartą graficzną NVIDIA GeForce GTX.',
    price: 8199.99,
    buyers: 120,
    comment: {
      rating: 4.9,
      author: 'Daniel Miller',
      text: 'Potężna maszyna. Bardzo wydajny i stabilny.'
    },
    specifications: {
      procesor: 'Intel Core i7-10700',
      ram: '32 GB DDR4',
      pamiec: '1 TB SSD + 2 TB HDD',
      system: 'Windows 10 Pro'
    }
  },
  {
    id:15,
    photo: 'https://images.morele.net/i1064/13205251_1_i1064.jpg',
    title: 'Laptop Dell XPS 13',
    description: 'Najnowszy laptop Dell z procesorem Intel Core i7 i wyświetlaczem Full HD.',
    price: 5999.99,
    buyers: 120,
    comment: {
      rating: 4.5,
      author: 'John Doe',
      text: 'Bardzo szybki i elegancki laptop. Jestem zadowolony z zakupu!'
    },
    specifications: {
      procesor: 'Intel Core i7-1185G7',
      ram: '16 GB LPDDR4x',
      pamiec: '512 GB PCIe NVMe SSD',
      ekran: '13.3" Full HD+ (1920x1200)',
      system: 'Windows 10 Home'
    }
  },
  {
    id:16,
    photo: 'https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg',
    title: 'Laptop Apple MacBook Pro 16"',
    description: 'Potężny laptop Apple z 16-calowym wyświetlaczem Retina i procesorem czterordzeniowym.',
    price: 8999.99,
    buyers: 150,
    comment: {
      rating: 5.0,
      author: 'Jane Smith',
      text: 'Fantastyczny laptop! Idealny do pracy graficznej.'
    },
    specifications: {
      procesor: 'Apple M1 Pro',
      ram: '32 GB LPDDR4x',
      pamiec: '1 TB SSD',
      ekran: '16" Retina (3072x1920)',
      system: 'macsystem Monterey'
    }
  },
  {
    id:17,
    photo: 'https://images.morele.net/i1064/13179204_0_i1064.jpg',
    title: 'Laptop HP Spectre x360 14"',
    description: 'Elegancki laptop HP z obrotowym 14-calowym wyświetlaczem 4K i długim czasem pracy na baterii.',
    price: 8499.99,
    buyers: 90,
    comment: {
      rating: 4.0,
      author: 'Sam Green',
      text: 'Bardzo lekki i poręczny laptop. Ekran OLED robi wrażenie!'
    },
    specifications: {
      procesor: 'Intel Core i7-1165G7',
      ram: '16 GB DDR4',
      pamiec: '1 TB PCIe NVMe SSD',
      ekran: '14" 4K UHD OLED Touchekran',
      system: 'Windows 11 Home'
    }
  },
  {
    id:18,
    photo: 'https://images.morele.net/i1064/12993724_5_i1064.jpg',
    title: 'Laptop ASUS ROG Zephyrus G14',
    description: 'Wyjątkowy laptop ASUS z wydajnym procesorem AMD Ryzen i dedykowaną kartą graficzną NVIDIA.',
    price: 7499.99,
    buyers: 110,
    comment: {
      rating: 4.2,
      author: 'Michael Brown',
      text: 'Świetny laptop do gier. Bardzo dobrze chłodzi się podczas długich sesji.'
    },
    specifications: {
      procesor: 'AMD Ryzen 9 5900HS',
      ram: '16 GB DDR4',
      pamiec: '1 TB PCIe NVMe SSD',
      ekran: '14" WQHD (2560x1440) 120Hz',
      system: 'Windows 11 Home'
    }
  },
  {
    id:19,
    photo: 'https://images.morele.net/i1064/13179204_0_i1064.jpg',
    title: 'Laptop Micrsystemoft Surface Laptop 4',
    description: 'Elegancki laptop Micrsystemoft z ekranem PixelSense i wydajnym procesorem Intel Core i5.',
    price: 6799.99,
    buyers: 95,
    comment: {
      rating: 4.7,
      author: 'Emily Clark',
      text: 'Bardzo lekki i poręczny. Ekran jest naprawdę systemtry i kolorowy.'
    },
    specifications: {
      procesor: 'Intel Core i5-1135G7',
      ram: '8 GB LPDDR4x',
      pamiec: '512 GB SSD',
      ekran: '13.5" PixelSense (2256x1504)',
      system: 'Windows 11 Home'
    }
  },
  {
    id:20,
    photo: 'https://images.morele.net/i1064/13219110_0_i1064.jpg',
    title: 'Laptop Acer Predator Helisystem 300',
    description: 'Potężny gamingowy laptop Acer z procesorem Intel Core i7 i kartą graficzną NVIDIA GeForce RTX 3060.',
    price: 8199.99,
    buyers: 130,
    comment: {
      rating: 4.9,
      author: 'David Wilson',
      text: 'Niesamowity laptop do gier. Bardzo wydajny i świetnie wygląda.'
    },
    specifications: {
      procesor: 'Intel Core i7-11800H',
      ram: '16 GB DDR4',
      pamiec: '1 TB PCIe NVMe SSD',
      ekran: '15.6" Full HD 144Hz IPS',
      system: 'Windows 10 Home'
    }
  },
  {
    id:21,
    photo: 'https://images.morele.net/i1064/13192898_0_i1064.jpg',
    title: 'Laptop Razer Blade 15',
    description: 'Zaawansowany laptop Razer z procesorem Intel Core i7 i ekranem Full HD o wysokiej częstotliwości odświeżania.',
    price: 7899.99,
    buyers: 100,
    comment: {
      rating: 4.8,
      author: 'Sophie Miller',
      text: 'Bardzo szybki laptop, idealny do pracy i gier. Solidna konstrukcja.'
    },
    specifications: {
      procesor: 'Intel Core i7-11800H',
      ram: '16 GB DDR4',
      pamiec: '512 GB PCIe NVMe SSD',
      ekran: '15.6" Full HD 240Hz IPS',
      system: 'Windows 10 Home'
    }
  },
  {
    id:22,
    photo: 'https://images.morele.net/i1064/12789172_0_i1064.jpg',
    title: 'Laptop Samsung Galaxy Book Pro 360',
    description: 'Zwinny laptop Samsung z obrotowym ekranem Super AMOLED i wydajnym procesorem Intel Core i7.',
    price: 6399.99,
    buyers: 85,
    comment: {
      rating: 4.3,
      author: 'Olivia Taylor',
      text: 'Ekran jest niesamowity. Bardzo praktyczny laptop do pracy.'
    },
    specifications: {
      procesor: 'Intel Core i7-1165G7',
      ram: '16 GB LPDDR4x',
      pamiec: '512 GB NVMe SSD',
      ekran: '13.3" Super AMOLED FHD+ (1920x1080)',
      system: 'Windows 10 Home'
    }
  },
  {
    id:23,
    photo: 'https://images.morele.net/i1064/13222597_15_i1064.jpg',
    title: 'Laptop Huawei MateBook X Pro',
    description: 'Elegancki laptop Huawei z wyświetlaczem 3K FullView i mocnym procesorem Intel Core i7.',
    price: 6699.99,
    buyers: 70,
    comment: {
      rating: 4.6,
      author: 'William Brown',
      text: 'Świetny laptop do pracy. Ekran jest naprawdę imponujący.'
    },
    specifications: {
      procesor: 'Intel Core i7-1165G7',
      ram: '16 GB LPDDR4x',
      pamiec: '1 TB PCIe NVMe SSD',
      ekran: '13.9" 3K FullView Touch',
      system: 'Windows 11 Home'
    }
  },
  {
    id:24,
    photo: 'https://images.morele.net/i1064/13151580_0_i1064.jpg',
    title: 'Laptop MSI GS66 Stealth',
    description: 'Gamingowy laptop MSI z procesorem Intel Core i9 i kartą graficzną NVIDIA GeForce RTX 3080.',
    price: 8999.99,
    buyers: 120,
    comment: {
      rating: 4.9,
      author: 'Daniel Johnson',
      text: 'To jest bestia! Bardzo szybki i idealny do najnowszych gier.'
    },
    specifications: {
      procesor: 'Intel Core i9-11900H',
      ram: '32 GB DDR4',
      pamiec: '1 TB PCIe NVMe SSD',
      ekran: '15.6" Full HD 300Hz IPS',
      system: 'Windows 10 Pro'
    }
  },
  {
    id:25,
    photo: 'https://images.morele.net/i1064/11202027_0_i1064.jpg',
    title: 'Laptop Lenovo Legion 5 Pro',
    description: 'Potężny laptop gamingowy Lenovo z procesorem AMD Ryzen 7 i ekranem 16-calowym o wysokiej częstotliwości odświeżania.',
    price: 7799.99,
    buyers: 110,
    comment: {
      rating: 4.7,
      author: 'Sophia Garcia',
      text: 'Idealny laptop do gier. Bardzo dobrze wykonany.'
    },
    specifications: {
      procesor: 'AMD Ryzen 7 5800H',
      ram: '16 GB DDR4',
      pamiec: '512 GB PCIe NVMe SSD',
      ekran: '16" WQXGA 165Hz IPS',
      system: 'Windows 10 Home'
    }
  },
  {
    id:26,
    photo: 'https://images.morele.net/i1064/13123191_1_i1064.jpg',
    title: 'Laptop ASUS VivoBook S15',
    description: 'Stylowy laptop ASUS z wydajnym procesorem Intel Core i5 i kolorowym wyświetlaczem NanoEdge.',
    price: 4999.99,
    buyers: 80,
    comment: {
      rating: 4.2,
      author: 'Ella Davis',
      text: 'Bardzo ładny wygląd z kolorowym ekranem. Solidna wydajność.'
    },
    specifications: {
      procesor: 'Intel Core i5-1135G7',
      ram: '8 GB DDR4',
      pamiec: '512 GB PCIe NVMe SSD',
      ekran: '15.6" Full HD NanoEdge',
      system: 'Windows 10 Home'
    }
  },
  {
    id:27,
    photo: 'https://images.morele.net/i1064/13147452_0_i1064.jpg',
    title: 'Laptop Dell Inspiron 15 5000',
    description: 'Praktyczny laptop Dell z procesorem Intel Core i5 i wygodną klawiaturą o podświetleniu LED.',
    price: 5699.99,
    buyers: 95,
    comment: {
      rating: 4.3,
      author: 'James Wilson',
      text: 'Bardzo solidny i funkcjonalny laptop do codziennego użytku.'
    },
    specifications: {
      procesor: 'Intel Core i5-1135G7',
      ram: '12 GB DDR4',
      pamiec: '256 GB PCIe NVMe SSD + 1 TB HDD',
      ekran: '15.6" Full HD Touchekran',
      system: 'Windows 10 Home'
    }
  },
  {
    id:27,
    photo: 'https://images.morele.net/i1064/13186836_0_i1064.jpg',
    title: 'Laptop HP Pavilion x360 14"',
    description: 'Uniwersalny laptop HP z obrotowym 14-calowym wyświetlaczem Full HD i długim czasem pracy na baterii.',
    price: 5299.99,
    buyers: 75,
    comment: {
      rating: 4.0,
      author: 'Lily Martin',
      text: 'Bardzo poręczny laptop. Dobrze działa w trybie tabletu.'
    },
    specifications: {
      procesor: 'Intel Core i5-1135G7',
      ram: '8 GB DDR4',
      pamiec: '256 GB PCIe NVMe SSD',
      ekran: '14" Full HD Touchekran',
      system: 'Windows 10 Home'
    }
  },
  {
    id:28,
    photo: 'https://images.morele.net/i1064/11095085_0_i1064.jpg',
    title: 'Laptop Acer Swift 5',
    description: 'Lekki i smukły laptop Acer z procesorem Intel Core i7 i wygodnym wyświetlaczem Full HD IPS.',
    price: 5799.99,
    buyers: 85,
    comment: {
      rating: 4.5,
      author: 'Noah Thompson',
      text: 'Bardzo lekki i szybki laptop. Idealny do pracy mobilnej.'
    },
    specifications: {
      procesor: 'Intel Core i7-1165G7',
      ram: '16 GB LPDDR4x',
      pamiec: '512 GB PCIe NVMe SSD',
      ekran: '14" Full HD IPS Touchekran',
      system: 'Windows 10 Home'
    }
  },
  {
    id:29,
    photo: 'https://images.morele.net/i1064/13179204_0_i1064.jpg',
    title: 'Laptop MSI Prestige 14 Evo',
    description: 'Elegancki i lekki laptop MSI z procesorem Intel Core i7 i długim czasem pracy na baterii.',
    price: 5999.99,
    buyers: 90,
    comment: {
      rating: 4.8,
      author: 'Mia Hall',
      text: 'Bardzo elegancki i wydajny laptop. Idealny do pracy biurowej.'
    },
    specifications: {
      procesor: 'Intel Core i7-1185G7',
      ram: '16 GB LPDDR4x',
      pamiec: '1 TB NVMe SSD',
      ekran: '14" Full HD IPS',
      system: 'Windows 11 Home'
    }
  },
  {
    id:30,
    photo: 'https://images.morele.net/i1064/13156048_0_i1064.jpg',
    title: 'Laptop Gigabyte AERO 15 OLED',
    description: 'Kreatywny laptop Gigabyte z ekranem OLED 4K i wydajnym procesorem Intel Core i7.',
    price: 7899.99,
    buyers: 100,
    comment: {
      rating: 4.9,
      author: 'Jacob White',
      text: 'Fantastyczny ekran OLED. Idealny dla grafików i projektantów.'
    },
    specifications: {
      procesor: 'Intel Core i7-11800H',
      ram: '32 GB DDR4',
      pamiec: '1 TB PCIe NVMe SSD',
      ekran: '15.6" 4K UHD OLED Touchekran',
      system: 'Windows 10 Pro'
    }
  },
  {
    id:31,
    photo: 'https://images.morele.net/i1064/13205251_1_i1064.jpg',
    title: 'Laptop Lenovo Yoga 9i 14"',
    description: 'Elegancki laptop Lenovo z obrotowym 14-calowym wyświetlaczem 4K i procesorem Intel Core i7.',
    price: 7099.99,
    buyers: 105,
    comment: {
      rating: 4.6,
      author: 'Benjamin Martinez',
      text: 'Bardzo poręczny laptop. Ekran 4K robi świetne wrażenie.'
    },
    specifications: {
      procesor: 'Intel Core i7-1185G7',
      ram: '16 GB LPDDR4x',
      pamiec: '1 TB PCIe NVMe SSD',
      ekran: '14" 4K UHD Touchekran',
      system: 'Windows 10 Home'
    }
  },
  {
    id:331,
    photo: 'https://images.morele.net/i1064/12993724_5_i1064.jpg',
    title: 'Laptop Micrsystemoft Surface Book 3',
    description: 'Innowacyjny laptop Micrsystemoft z wydajnym procesorem Intel Core i7 i modułem graficznym NVIDIA GeForce GTX.',
    price: 8399.99,
    buyers: 115,
    comment: {
      rating: 4.7,
      author: 'Lucas Garcia',
      text: 'Wspaniały laptop hybrydowy. Bardzo dobra jakość wykonania.'
    },
    specifications: {
      procesor: 'Intel Core i7-1065G7',
      ram: '32 GB LPDDR4x',
      pamiec: '1 TB PCIe NVMe SSD',
      ekran: '15" PixelSense (3240x2160)',
      system: 'Windows 10 Pro'
    }
  },
  {
    id:51,
    photo: 'https://images.morele.net/i1064/game1.jpg',
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
    id:61,
    photo: 'https://images.morele.net/i1064/game2.jpg',
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
    id:62,
    photo: 'https://images.morele.net/i1064/game3.jpg',
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
    id:871,
    photo: 'https://images.morele.net/i1064/game4.jpg',
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
    id:123,
    photo: 'https://images.morele.net/i1064/game5.jpg',
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
    id:321,
    photo: 'https://images.morele.net/i1064/game6.jpg',
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
    id:1111,
    photo: 'https://images.morele.net/i1064/game7.jpg',
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
    id:90,
    photo: 'https://images.morele.net/i1064/game8.jpg',
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
    id:1121,
    photo: 'https://images.morele.net/i1064/game9.jpg',
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
    id:81,
    photo: 'https://images.morele.net/i1064/game10.jpg',
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


export default database;
