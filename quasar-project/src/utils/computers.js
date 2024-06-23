import { ref } from 'vue';

const computers = ref([
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
  }
]);

export default computers;
