import { CONTACT_INFO, WHATSAPP_MESSAGES, COMPANY_INFO } from '@/app/lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-gray-300 mb-4">
              Instalator sanitar și termic autorizat în Iași. Intervenții rapide pentru urgențe, reparații și montaj centrale.
            </p>
            <div className="text-sm text-gray-400">
              <p>Garanție pe lucrări</p>
              <p>Intervenții non-stop</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="block font-medium">Telefon:</span>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-orange-400 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                <span className="block font-medium">WhatsApp:</span>
                <a href={`${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGES.normal)}`} className="hover:text-orange-400 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                <span className="block font-medium">Email:</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orange-400 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Zona Servicii</h3>
            <div className="text-gray-300">
              <p className="mb-2">Iași și împrejurimi</p>
              <p className="text-sm text-gray-400">
                Intervenții rapide în toată zona metropolitană Iași
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 CONFORT INSTAL. Toate drepturile rezervate.</p>
          <p className="mt-2">
            Servicii profesionale de instalații sanitare și termice în Iași
          </p>
        </div>
      </div>
    </footer>
  );
}