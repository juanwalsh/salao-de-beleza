import { ServiceItem, Testimonial, GalleryItem, NavigationLink, TeamMember, AestheticServiceItem } from './types';

// Updated Order: Services -> Editorial -> The Salon -> Portfolio -> Contact
export const NAV_LINKS: NavigationLink[] = [
  { label: 'Serviços', href: '#services' },
  { label: 'Spa', href: '#aesthetics' },
  { label: 'Editorial', href: '#editorial' },
  { label: 'O Salão', href: '#about' },
  { label: 'Portfólio', href: '#gallery' },
  { label: 'Contato', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Corte & Styling Assinatura',
    description: 'Corte personalizado baseado na estrutura facial e textura do fio.',
    category: 'hair',
    price: 'R$ 196'
  },
  {
    id: '2',
    title: 'Loiros & Iluminação',
    description: 'Técnicas avançadas de mechas e iluminação preservando a saúde do fio.',
    category: 'hair',
    price: 'Sob Consulta'
  },
  {
    id: '3',
    title: 'Maquiagem Editorial',
    description: 'Maquiagem de longa duração com acabamento natural e sofisticado.',
    category: 'makeup',
    price: 'R$ 245'
  },
  {
    id: '4',
    title: 'Experiência Noivas',
    description: 'Consultoria completa para noivas, incluindo testes e acompanhamento.',
    category: 'bridal',
    price: 'Pacotes Especiais'
  },
  {
    id: '5',
    title: 'Terapia Capilar Spa',
    description: 'Tratamentos profundos de reconstrução e hidratação com produtos premium.',
    category: 'spa',
    price: 'R$ 210'
  },
  {
    id: '6',
    title: 'Correção de Cor',
    description: 'Correção de cor com diagnóstico preciso e técnicas seguras.',
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
    price: 'R$ 315'
  },
  {
    id: 'a2',
    title: 'Massagem Modeladora',
    description: 'Drenagem linfática combinada com massagem modeladora para contorno e relaxamento.',
    duration: '60 min',
    price: 'R$ 196'
  },
  {
    id: 'a3',
    title: 'Microagulhamento Premium',
    description: 'Estímulo de colágeno para renovar a textura da pele e reduzir cicatrizes.',
    duration: '60 min',
    price: 'R$ 420'
  },
  {
    id: 'a4',
    title: 'Spa de Mãos e Pés',
    description: 'Esfoliação, hidratação profunda e massagem reflexológica.',
    duration: '45 min',
    price: 'R$ 126'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  
  {
    id: 1,
    name: "Elena Vasconcelos",
    role: "Diretora Criativa & Hair Stylist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ricardo Mendes",
    role: "Especialista em Coloração",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1587&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Maquiadora Sênior",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1661&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Dra. Ana Paiva",
    role: "Especialista em Estética",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1587&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Uma experiência que transcende o serviço de beleza. O ambiente respira sofisticação e a equipe possui técnica impecável.",
    author: "Isabella V.",
    role: "Editora de Moda"
  },
  {
    id: 2,
    text: "Encontrei no Lumière o luxo silencioso que procurava. Meu cabelo nunca esteve tão saudável e a cor tão natural.",
    author: "Carolina M.",
    role: "Empresária"
  },
  {
    id: 3,
    text: "O atendimento é uma obra de arte. Do café de boas-vindas ao resultado final. Luxo em cada detalhe.",
    author: "Fernanda S.",
    role: "Arquiteta"
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1769&auto=format&fit=crop", 
    alt: "Cabelo Loiro Luminoso", 
    category: "Cor Assinatura", 
    span: "row-span-2" 
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?q=80&w=1587&auto=format&fit=crop", 
    alt: "Brilho em Morenas", 
    category: "Cabelo Saudável", 
    span: "col-span-1" 
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1287&auto=format&fit=crop", 
    alt: "Cuidados Masculinos", 
    category: "Masculino", 
    span: "col-span-1" 
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1770&auto=format&fit=crop", 
    alt: "Styling para Noivas", 
    category: "Noivas", 
    span: "row-span-2" 
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1769&auto=format&fit=crop", 
    alt: "Styling Editorial", 
    category: "Editorial", 
    span: "col-span-1" 
  },
];