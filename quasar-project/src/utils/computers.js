import { ref } from 'vue';

const computers = ref([
  {
    id: 5,
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAH-8ZIa9u3ZCbLCEBZV0_phyA2_wTfQ9qQ&s',
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
    photo: 'https://a.allegroimg.com/s1024/0c8039/878d95e049e980aca54d67af7e7e',
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
    photo: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/inspiron-desktops/inspiron-3880/global-spi/ng/desktop-inspiron-3880-mt-non-odd-relsize-500-ng.psd?fmt=jpg&wid=500&hei=500&fit=constrain%2C1&qlt=95',
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
    photo: 'https://elenovo.pl/12034-thickbox_default/lenovo-thinkcentre-m80q-gen-3-intel-core-i5-12500t-16-gb-256gb-ssd-w11-p.jpg',
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
    photo: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_106427597?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402',
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
    photo: 'https://f00.esfr.pl/foto/7/143065416657/f1c68fa513ae158fb22e918315978254/msi-pc-msi-14nue7667-i714-4070s-16g-1t-w11h,143065416657_3.jpg',
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
