import { ref } from 'vue';

const laptops = ref([
  {
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
    photo: 'https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg',
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
  }
]);

export default laptops;
