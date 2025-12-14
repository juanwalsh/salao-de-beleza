import React from 'react';
import Button from './ui/Button';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-lumiere-900 text-lumiere-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-lumiere-800 pb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-4xl tracking-widest">LUMIÈRE FREIRE</h2>
              <span className="text-[0.6rem] uppercase tracking-[0.4em] text-lumiere-300 block mt-1">Salon & Spa</span>
            </div>
            <p className="text-lumiere-300 text-sm font-light leading-relaxed">
              Elevando a beleza ao estado de arte.
              Um ambiente projetado para sua renovação completa.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-lumiere-200 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-lumiere-200 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-lumiere-200">Localização</h3>
            <div className="flex items-start space-x-3 text-sm font-light text-lumiere-100">
              <MapPin size={18} className="mt-1 flex-shrink-0 text-lumiere-400" />
              <p>Av. Europa, 1200<br/>Jardins, São Paulo - SP<br/>CEP 01449-000</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-lumiere-200">Contato</h3>
            <div className="flex items-center space-x-3 text-sm font-light text-lumiere-100">
              <Phone size={18} className="text-lumiere-400" />
              <p>+55 (11) 99999-9999</p>
            </div>
            <div className="flex items-center space-x-3 text-sm font-light text-lumiere-100">
              <Mail size={18} className="text-lumiere-400" />
              <p>concierge@lumiere.com.br</p>
            </div>
            <Button variant="outline" className="mt-4 border-lumiere-700 text-lumiere-200 hover:bg-lumiere-800 hover:border-lumiere-800 hover:text-white w-full text-center justify-center flex">
              WhatsApp
            </Button>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-lumiere-200">Horários</h3>
            <div className="space-y-2 text-sm font-light text-lumiere-100">
              <div className="flex justify-between border-b border-lumiere-800 pb-2">
                <span>Ter - Sex</span>
                <span>10:00 - 20:00</span>
              </div>
              <div className="flex justify-between border-b border-lumiere-800 pb-2">
                <span>Sábado</span>
                <span>09:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-lumiere-400">
                <span>Dom - Seg</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>

        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[0.65rem] uppercase tracking-wider text-lumiere-500 font-sans">
          <p>© 2024 Lumière Salon. Todos os direitos reservados.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-lumiere-300 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-lumiere-300 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;