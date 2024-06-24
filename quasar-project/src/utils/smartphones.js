import { ref } from 'vue';

const smartphones = ref([
  {
    id: 1000,
    photo: 'https://i.ebayimg.com/images/g/KLMAAOSwpbFhQtkr/s-l1200.webp',
    title: 'Apple iPhone 13 Pro',
    description: 'Najnowszy iPhone z ekranem Super Retina XDR, A15 Bionic i potrójnym aparatem.',
    price: 5899.99,
    buyers: 120,
    comment: {
      rating: 4.8,
      author: 'Sophie Brown',
      text: 'Doskonała jakość wykonania i wydajność. Idealny dla miłośników Apple.'
    },
    specifications: {
      system: 'iOS 15',
      ekran: '6.1 cala Super Retina XDR',
      procesor: 'Apple A15 Bionic',
      pamiec: '256 GB',
      aparat: 'Potrójny 12 MP'
    }
  },
  {
    id: 1001,
    photo: 'https://www.tradeinn.com/f/13913/139131173_4/samsung-galaxy-s22-ultra-5g-enterprise-edition-8gb-128gb-6.8-dual-sim.jpg',
    title: 'Samsung Galaxy S22 Ultra',
    description: 'Flagowy model Samsunga z ekranem Dynamic AMOLED 2X, Exynos 2200 i rewolucyjnym aparatem.',
    price: 6399.99,
    buyers: 110,
    comment: {
      rating: 4.7,
      author: 'David White',
      text: 'Fantastyczny ekran i aparat. Przekracza moje oczekiwania.'
    },
    specifications: {
      system: 'Android 12',
      ekran: '6.8 cala Dynamic AMOLED 2X',
      procesor: 'Exynos 2200',
      pamiec: '512 GB',
      aparat: 'Quad 108 MP'
    }
  },
  {
    id: 1002,
    photo: 'https://i02.appmifile.com/433_operator_sg/20/03/2023/f83b78c002f27b9dd40c646d671c3fd3.png',
    title: 'Xiaomi Mi 12 Pro',
    description: 'Smartfon Xiaomi z ekranem AMOLED, Snapdragon 8 Gen 1 i potrójnym aparatem.',
    price: 4599.99,
    buyers: 95,
    comment: {
      rating: 4.5,
      author: 'Emily Martinez',
      text: 'Świetna wartość za pieniądze. Bardzo szybki i wygodny w użyciu.'
    },
    specifications: {
      system: 'MIUI 14 (Android 12)',
      ekran: '6.7 cala AMOLED',
      procesor: 'Snapdragon 8 Gen 1',
      pamiec: '256 GB',
      aparat: 'Potrójny 50 MP'
    }
  },
  {
    id: 1003,
    photo: 'https://www.tabletowo.pl/wp-content/uploads/2021/11/OnePlus-10-Pro-render-zrodlo-@OnLeaks-@ZoutonUS-3.jpg',
    title: 'OnePlus 10 Pro',
    description: 'Flagowy smartfon OnePlus z ekranem Fluid AMOLED 2.0, Snapdragon 8 Gen 1 i potrójnym aparatem.',
    price: 5099.99,
    buyers: 100,
    comment: {
      rating: 4.6,
      author: 'Noah Taylor',
      text: 'Świetna jakość i szybkość działania. OnePlus robi krok naprzód.'
    },
    specifications: {
      system: 'OxygenOS 13 (Android 12)',
      ekran: '6.8 cala Fluid AMOLED 2.0',
      procesor: 'Snapdragon 8 Gen 1',
      pamiec: '256 GB',
      aparat: 'Potrójny 48 MP'
    }
  },
  {
    id: 1004,
    photo: 'https://static.pepper.pl/threads/raw/zYX7g/790949_1/re/1024x1024/qt/60/790949_1.jpg',
    title: 'Google Pixel 7 Pro',
    description: 'Nowoczesny smartfon Google z ekranem OLED, Snapdragon 8 Gen 1 i potrójnym aparatem.',
    price: 4799.99,
    buyers: 90,
    comment: {
      rating: 4.4,
      author: 'Sophia Davis',
      text: 'Czysty Android i świetne zdjęcia. Idealny dla fanów Google.'
    },
    specifications: {
      system: 'Android 12',
      ekran: '6.5 cala OLED',
      procesor: 'Snapdragon 8 Gen 1',
      pamiec: '128 GB',
      aparat: 'Potrójny 12 MP'
    }
  }
]);

export default smartphones;
