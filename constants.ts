import { ServiceItem, Testimonial, GalleryItem, NavigationLink, TeamMember, AestheticServiceItem } from './types';

// Updated Order: Serviços -> Editorial -> O Salão -> Portfolio -> Contato
export const NAV_LINKS: NavigationLink[] = [
  { label: 'Serviços', href: '#services' },
  { label: 'Spa', href: '#aesthetics' },
  { label: 'Editorial', href: '#editorial' },
  { label: 'O Salão', href: '#about' },
  { label: 'Portfolio', href: '#gallery' },
  { label: 'Contato', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Signature Cut & Style',
    description: 'Corte personalizado baseado na estrutura do rosto e textura do fio.',
    category: 'hair',
    price: 'R$ 280'
  },
  {
    id: '2',
    title: 'Blonde Ambition',
    description: 'Técnicas avançadas de mechas e iluminação com preservação da saúde capilar.',
    category: 'hair',
    price: 'Sob Consulta'
  },
  {
    id: '3',
    title: 'Editorial Makeup',
    description: 'Maquiagem de longa duração com acabamento natural e sofisticado.',
    category: 'makeup',
    price: 'R$ 350'
  },
  {
    id: '4',
    title: 'Bridal Experience',
    description: 'Consultoria completa para noivas, incluindo testes e acompanhamento.',
    category: 'bridal',
    price: 'Pacotes Especiais'
  },
  {
    id: '5',
    title: 'Hair Spa Therapy',
    description: 'Tratamentos profundos para reconstrução e hidratação com produtos premium.',
    category: 'spa',
    price: 'R$ 300'
  },
  {
    id: '6',
    title: 'Color Correction',
    description: 'Correção de cor com diagnóstico preciso e técnica segura.',
    category: 'hair',
    price: 'Sob Consulta'
  }
];

export const AESTHETIC_SERVICES: AestheticServiceItem[] = [
  {
    id: 'a1',
    title: 'Lumière Facial Glow',
    description: 'Limpeza profunda seguida de hidratação com ouro 24k e massagem lifting facial.',
    duration: '90 min',
    price: 'R$ 450'
  },
  {
    id: 'a2',
    title: 'Body Contour Massage',
    description: 'Drenagem linfática combinada com modeladora para redução de medidas e relaxamento.',
    duration: '60 min',
    price: 'R$ 280'
  },
  {
    id: 'a3',
    title: 'Microagulhamento Premium',
    description: 'Estimulação de colágeno para renovação da textura da pele e redução de cicatrizes.',
    duration: '60 min',
    price: 'R$ 600'
  },
  {
    id: 'a4',
    title: 'Spa dos Pés & Mãos',
    description: 'Esfoliação, hidratação profunda e massagem reflexológica.',
    duration: '45 min',
    price: 'R$ 180'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Elena Vasconcelos",
    role: "Creative Director & Hair Stylist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ricardo Mendes",
    role: "Colorist Expert",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1587&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Senior Makeup Artist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1661&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Dr. Ana Paiva",
    role: "Biomédica Esteta",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1587&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Uma experiência que transcende o serviço de beleza. O ambiente respira sofisticação e a equipe possui uma técnica impecável.",
    author: "Isabella V.",
    role: "Editora de Moda"
  },
  {
    id: 2,
    text: "Encontrei no Lumière a elegância silenciosa que buscava. Meu cabelo nunca esteve tão saudável e com uma cor tão natural.",
    author: "Carolina M.",
    role: "Empresária"
  },
  {
    id: 3,
    text: "O atendimento é uma obra de arte. Desde o café de boas-vindas até o resultado final. Luxo em cada detalhe.",
    author: "Fernanda S.",
    role: "Arquiteta"
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1769&auto=format&fit=crop", 
    alt: "Luminous Blonde Hair", 
    category: "Signature Color", 
    span: "row-span-2" 
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?q=80&w=1587&auto=format&fit=crop", 
    alt: "Brunette Shine", 
    category: "Healthy Hair", 
    span: "col-span-1" 
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1287&auto=format&fit=crop", 
    alt: "Men's Grooming", 
    category: "Grooming", 
    span: "col-span-1" 
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1770&auto=format&fit=crop", 
    alt: "Bridal Styling", 
    category: "Bridal", 
    span: "row-span-2" 
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1769&auto=format&fit=crop", 
    alt: "Editorial Styling", 
    category: "Editorial", 
    span: "col-span-1" 
  },
];