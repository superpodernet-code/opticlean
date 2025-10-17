/**
 * OPTICLEAN SOLUCIONES - SCRIPT PRINCIPAL
 * 
 * Este archivo contiene toda la funcionalidad JavaScript para el sitio web
 * de OptiClean Soluciones, incluyendo:
 * - Sistema de traducción multiidioma
 * - Gestión del carrito de cotizaciones
 * - Interactividad de la interfaz
 * - Manejo de modales
 * 
 * @version 1.0.0
 * @author OptiClean Soluciones
 */

// ==========================================================================
// CONFIGURACIÓN DE TAILWIND CSS
// ==========================================================================

// Configuración de Tailwind CSS
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'lima': '#a3e635',
                'aguamarina': '#20b2aa',
                'gris-claro': '#f3f4f6',
                'op-blue': '#008cba',
                'op-green': '#65a30d',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        }
    }
};

// ==========================================================================
// CONFIGURACIÓN Y CONSTANTES
// ==========================================================================

/**
 * Diccionario de traducciones para soporte multiidioma
 */
const translations = {
    es: {
        language: 'Idioma',
        lang_es: 'Español',
        lang_en: 'English',
        lang_pt: 'Português',
        whatsapp_contact: 'Contáctanos',
        hero_title: 'OptiClean Soluciones: La Limpieza Inteligente',
        hero_subtitle: 'Excelencia, Tecnología de Vanguardia y Compromiso Ecológico para su Empresa o Residencia.',
        hero_cta: 'Descubra Nuestros Servicios',
        about_us_title: 'Nuestra Propuesta de Valor',
        mission_title: 'Misión',
        mission_content: 'Ofrecer servicios de aseo y mantenimiento de alta calidad a empresas y conjuntos residenciales en la región, garantizando la óptima limpieza y desinfección de sus espacios. Cumplimos nuestra promesa mediante la implementación de tecnología de vanguardia, un equipo humano calificado y experimentado, y la priorización de prácticas ecológicas que minimizan el impacto ambiental.',
        vision_title: 'Visión',
        vision_content: 'Ser la empresa líder en soluciones integrales de aseo empresarial y residencial en el suroccidente colombiano, reconocida por nuestra excelencia operativa impulsada por la innovación tecnológica y un firme compromiso con la sostenibilidad. Buscamos transformar la percepción del servicio de limpieza.',
        values_title: 'Nuestros Valores: El Motor de la Excelencia',
        value1_title: 'Innovación Tecnológica',
        value1_content: 'Usamos maquinaria de última generación para optimizar procesos y garantizar resultados superiores.',
        value2_title: 'Excelence y Calidad',
        value2_content: 'Nos comprometemos con los más altos estándares, ofreciendo limpieza y desinfección impecable.',
        value3_title: 'Sostenibilidad Ambiental',
        value3_content: 'Priorizamos productos y métodos ecológicos para minimizar el impacto en nuestro mundo.',
        value4_title: 'Talento Humano',
        value4_content: 'Equipo calificado y experimentado, garantizando la calidad y la eficiencia del servicio.',
        value5_title: 'Confianza y Cumplimiento',
        value5_content: 'Transparencia y riguroso cumplimiento de los acuerdos para construir relaciones duraderas.',
        services_title: 'Nuestros Servicios Especializados',
        service1_title: 'Conjuntos Residenciales',
        service1_content: 'Mantenimiento de zonas comunes, piscinas, escaleras y áreas sociales, asegurando el bienestar y la calidad de vida de los residentes.',
        service2_title: 'Aseo Empresarial e Industrial',
        service2_content: 'Limpieza profunda y desinfección de oficinas, fachadas, áreas de producción y zonas de alto tráfico con equipos tecnológicos.',
        service3_title: 'Limpieza de Parqueaderos y Áreas Duras',
        service3_content: 'Utilizamos maquinaria especializada para la limpieza profunda de pisos y parqueaderos, eliminando manchas difíciles con eficiencia.',
        services_cta: 'Solicitar Cotización Ahora',
        footer_phone: 'Contacto Directo: +57 318 218 0179',
        footer_web: 'opticlean.xyz.com',
        footer_address: 'Sede en Colombia. Sirviendo al suroccidente colombiano.',
        footer_whatsapp: 'WhatsApp',
        about_us_link: 'Sobre Nosotros',
        services_link: 'Servicios',
        footer_copyright: '© 2025 OptiClean Soluciones. Todos los derechos reservados.',
        cart_title: 'Cesta de Cotización',
        cart_empty: 'Aún no has añadido servicios a tu cotización. Explora nuestros planes.',
        modal_close: 'Cerrar',
        modal_request: 'Solicitar Cotización',
        add_to_quote: 'Añadir a Cotización',
        added_to_quote: '¡Añadido!'
    },
    en: {
        language: 'Language',
        lang_es: 'Spanish',
        lang_en: 'English',
        lang_pt: 'Portuguese',
        whatsapp_contact: 'Contact Us',
        hero_title: 'OptiClean Soluciones: Intelligent Cleaning',
        hero_subtitle: 'Excellence, Cutting-Edge Technology, and Eco-Commitment for your Business or Residence.',
        hero_cta: 'Discover Our Services',
        about_us_title: 'Our Value Proposition',
        mission_title: 'Mission',
        mission_content: 'To offer high-quality cleaning and maintenance services to companies and residential complexes in the region, ensuring optimal cleanliness and disinfection of their spaces. We fulfill our promise through the implementation of cutting-edge technology, a qualified and experienced human team, and the prioritization of ecological practices that minimize environmental impact.',
        vision_title: 'Vision',
        vision_content: 'To be the leading company in comprehensive business and residential cleaning solutions in southwestern Colombia, recognized for our operational excellence driven by technological innovation and a firm commitment to sustainability. We seek to transform the perception of cleaning services.',
        values_title: 'Our Values: The Engine of Excellence',
        value1_title: 'Technological Innovation',
        value1_content: 'We use the latest generation machinery to optimize processes and guarantee superior results.',
        value2_title: 'Excellence and Quality',
        value2_content: 'We are committed to the highest standards, offering impeccable cleaning and disinfection.',
        value3_title: 'Environmental Sustainability',
        value3_content: 'We prioritize ecological products and methods to minimize the impact on our world.',
        value4_title: 'Human Talent',
        value4_content: 'Qualified and experienced team, guaranteeing the quality and efficiency of the service.',
        value5_title: 'Trust and Compliance',
        value5_content: 'Transparency and rigorous compliance with agreements to build lasting relationships.',
        services_title: 'Our Specialized Services',
        service1_title: 'Residential Complexes',
        service1_content: 'Maintenance of common areas, swimming pools, stairwells, and social areas, ensuring the well-being and quality of life of residents.',
        service2_title: 'Business and Industrial Cleaning',
        service2_content: 'Deep cleaning and disinfection of offices, facades, production areas, and high-traffic zones with technological equipment.',
        service3_title: 'Parking Lot and Hard Area Cleaning',
        service3_content: 'We use specialized machinery for the deep cleaning of floors and parking lots, efficiently eliminating stubborn stains.',
        services_cta: 'Request a Quote Now',
        footer_phone: 'Direct Contact: +57 318 218 0179',
        footer_web: 'opticlean.xyz.com',
        footer_address: 'Headquarters in Colombia. Serving the Colombian southwest.',
        footer_whatsapp: 'WhatsApp',
        about_us_link: 'About Us',
        services_link: 'Services',
        footer_copyright: '© 2025 OptiClean Soluciones. All rights reserved.',
        cart_title: 'Quotation Cart',
        cart_empty: 'You haven\'t added services to your quote yet. Explore our plans.',
        modal_close: 'Close',
        modal_request: 'Request Quote',
        add_to_quote: 'Add to Quote',
        added_to_quote: 'Added!'
    },
    pt: {
        language: 'Língua',
        lang_es: 'Espanhol',
        lang_en: 'Inglês',
        lang_pt: 'Português',
        whatsapp_contact: 'Contate-nos',
        hero_title: 'OptiClean Soluções: Limpeza Inteligente',
        hero_subtitle: 'Excelência, Tecnologia de Ponta e Compromisso Ecológico para sua Empresa ou Residência.',
        hero_cta: 'Descubra Nossos Serviços',
        about_us_title: 'Nossa Proposta de Valor',
        mission_title: 'Missão',
        mission_content: 'Oferecer serviços de limpeza e manutenção de alta qualidade para empresas e condomínios residenciais na região, garantindo a limpeza e desinfecção ideais de seus espaços. Cumprimos nossa promessa através da implementação de tecnologia de ponta, uma equipe humana qualificada e experiente, e priorizando práticas ecológicas que minimizam o impacto ambiental.',
        vision_title: 'Visão',
        vision_content: 'Ser a empresa líder em soluções integrais de limpeza empresarial e residencial no sudoeste colombiano, reconhecida pela nossa excelência operacional impulsionada pela inovação tecnológica e um firme compromisso com a sustentabilidade. Buscamos transformar a percepção do serviço de limpeza.',
        values_title: 'Nossos Valores: O Motor da Excelência',
        value1_title: 'Inovação Tecnológica',
        value1_content: 'Utilizamos máquinas de última geração para otimizar processos e garantir resultados superiores.',
        value2_title: 'Excelência e Qualidade',
        value2_content: 'Comprometemo-nos com os mais altos padrões, oferecendo limpeza e desinfecção impecável.',
        value3_title: 'Sostenibilidade Ambiental',
        value3_content: 'Priorizamos produtos e métodos ecológicos para minimizar o impacto em nosso mundo.',
        value4_title: 'Talento Humano',
        value4_content: 'Equipe qualificada e experiente, garantindo a qualidade e eficiência do serviço.',
        value5_title: 'Confiança e Cumprimento',
        value5_content: 'Transparência e cumprimento rigoroso dos acordos para construir relacionamentos duradouros.',
        services_title: 'Nossos Serviços Especializados',
        service1_title: 'Condomínios Residenciais',
        service1_content: 'Manutenção de áreas comuns, piscinas, escadas e áreas sociais, garantindo o bem-estar e a qualidade de vida dos moradores.',
        service2_title: 'Limpeza Empresarial e Industrial',
        service2_content: 'Limpeza profunda e desinfecção de escritórios, fachadas, áreas de produção e zonas de alto tráfego com equipamentos tecnológicos.',
        service3_title: 'Limpeza de Estacionamentos e Áreas Duras',
        service3_content: 'Utilizamos máquinas especializadas para a limpeza profunda de pisos e estacionamentos, eliminando manchas difíceis com eficiência.',
        services_cta: 'Solicitar Orçamento Agora',
        footer_phone: 'Contato Direto: +57 318 218 0179',
        footer_web: 'opticlean.xyz.com',
        footer_address: 'Sede na Colômbia. Atendendo o sudoeste colombiano.',
        footer_whatsapp: 'WhatsApp',
        about_us_link: 'Sobre Nós',
        services_link: 'Serviços',
        footer_copyright: '© 2025 OptiClean Soluções. Todos os derechos reservados.',
        cart_title: 'Cesta de Orçamento',
        cart_empty: 'Você ainda não adicionou serviços ao seu orçamento. Explore nossos planos.',
        modal_close: 'Fechar',
        modal_request: 'Solicitar Orçamento',
        add_to_quote: 'Adicionar ao Orçamento',
        added_to_quote: 'Adicionado!'
    }
};

// ==========================================================================
// VARIABLES GLOBALES Y ESTADO DE LA APLICACIÓN
// ==========================================================================

let currentLang = 'es';
let cartItems = [];

// Referencias a elementos DOM
const elements = document.querySelectorAll('[data-key]');
const translateButton = document.getElementById('translate-button');
const translateMenu = document.getElementById('translate-menu');
const cartButton = document.getElementById('cart-button');
const cartCountElement = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const modalCloseButton = document.getElementById('modal-close');
const modalRequestButton = document.getElementById('modal-request');
const cartList = document.getElementById('cart-list');
const cartEmptyMessage = document.getElementById('cart-empty-message');

// ==========================================================================
// SISTEMA DE TRADUCCIÓN
// ==========================================================================

/**
 * Aplica las traducciones a todos los elementos con atributo data-key
 * @param {string} lang - Código del idioma ('es', 'en', 'pt')
 */
function translatePage(lang) {
    currentLang = lang;
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // Para elementos de formulario, usar value en lugar de textContent
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Actualizar botones "Añadir a Cotización"
    updateAddToCartButtons();
    
    // Actualizar items del carrito con nuevos nombres traducidos
    updateCartItemsTranslation();
    
    // Ocultar menú de traducción
    translateMenu.classList.add('hidden');
    translateButton.setAttribute('aria-expanded', 'false');
}

/**
 * Actualiza el texto de los botones "Añadir a Cotización" según el idioma
 */
function updateAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.textContent = translations[currentLang].add_to_quote;
    });
}

/**
 * Actualiza los nombres de los servicios en el carrito al cambiar idioma
 */
function updateCartItemsTranslation() {
    if (cartItems.length > 0) {
        const currentItems = [...cartItems];
        cartItems = [];
        
        currentItems.forEach(serviceKey => {
            const translatedTitle = translations[currentLang][`${serviceKey}_title`];
            if (translatedTitle) {
                cartItems.push(serviceKey);
            }
        });
        
        updateCartUI();
    }
}

// ==========================================================================
// GESTIÓN DEL CARRITO DE COTIZACIONES
// ==========================================================================

/**
 * Agrega un servicio al carrito
 * @param {string} serviceKey - Clave del servicio ('service1', 'service2', 'service3')
 */
function addToCart(serviceKey) {
    if (!cartItems.includes(serviceKey)) {
        cartItems.push(serviceKey);
        updateCartUI();
        
        // Mostrar feedback visual
        showCartFeedback(serviceKey);
    }
}

/**
 * Elimina un servicio del carrito
 * @param {string} serviceKey - Clave del servicio a eliminar
 */
function removeFromCart(serviceKey) {
    cartItems = cartItems.filter(item => item !== serviceKey);
    updateCartUI();
}

/**
 * Muestra feedback visual cuando se añade un servicio al carrito
 * @param {string} serviceKey - Clave del servicio añadido
 */
function showCartFeedback(serviceKey) {
    const button = document.querySelector(`[data-service="${serviceKey}"]`);
    if (button) {
        const originalText = button.textContent;
        button.textContent = translations[currentLang].added_to_quote;
        button.disabled = true;
        button.classList.add('opacity-50');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.classList.remove('opacity-50');
        }, 1500);
    }
}

/**
 * Actualiza la interfaz del carrito (contador y lista)
 */
function updateCartUI() {
    // Actualizar contador
    cartCountElement.textContent = cartItems.length;
    cartCountElement.setAttribute('aria-label', `${cartItems.length} servicios en cotización`);
    
    // Actualizar lista del carrito
    cartList.innerHTML = '';
    
    if (cartItems.length === 0) {
        cartEmptyMessage.classList.remove('hidden');
        modalRequestButton.disabled = true;
        modalRequestButton.setAttribute('aria-disabled', 'true');
    } else {
        cartEmptyMessage.classList.add('hidden');
        modalRequestButton.disabled = false;
        modalRequestButton.setAttribute('aria-disabled', 'false');
        
        cartItems.forEach(serviceKey => {
            const serviceTitle = translations[currentLang][`${serviceKey}_title`];
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item fade-in';
            itemDiv.innerHTML = `
                <span class="text-gray-700 font-medium flex-1">${serviceTitle}</span>
                <button class="remove-item" data-service="${serviceKey}" aria-label="Eliminar ${serviceTitle} de la cotización">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            `;
            cartList.appendChild(itemDiv);
        });
        
        // Añadir event listeners para botones de eliminar
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (e) => {
                const serviceToRemove = e.currentTarget.getAttribute('data-service');
                removeFromCart(serviceToRemove);
            });
        });
    }
}

/**
 * Envía la cotización por WhatsApp
 */
function sendQuoteRequest() {
    if (cartItems.length > 0) {
        const servicesList = cartItems.map(serviceKey => 
            translations[currentLang][`${serviceKey}_title`]
        ).join(', ');
        
        const message = encodeURIComponent(
            `Hola OptiClean Soluciones, estoy interesado en una cotización para los siguientes servicios: ${servicesList}`
        );
        
        window.open(`https://wa.me/+573182180179?text=${message}`, '_blank');
        
        // Limpiar carrito después de enviar
        cartItems = [];
        updateCartUI();
        closeCartModal();
    }
}

// ==========================================================================
// GESTIÓN DE MODALES
// ==========================================================================

/**
 * Abre el modal del carrito
 */
function openCartModal() {
    cartModal.classList.remove('hidden');
    cartModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    
    // Enfocar el primer elemento interactivo del modal
    modalCloseButton.focus();
}

/**
 * Cierra el modal del carrito
 */
function closeCartModal() {
    cartModal.classList.add('hidden');
    cartModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restaurar scroll del body
    
    // Devolver foco al botón del carrito
    cartButton.focus();
}

// ==========================================================================
// EVENT LISTENERS Y CONFIGURACIÓN INICIAL
// ==========================================================================

/**
 * Inicializa todos los event listeners
 */
function initializeEventListeners() {
    // Menú de traducción
    translateButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = translateButton.getAttribute('aria-expanded') === 'true';
        translateMenu.classList.toggle('hidden');
        translateButton.setAttribute('aria-expanded', (!isExpanded).toString());
    });
    
    // Cerrar menú de traducción al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!translateButton.contains(e.target) && !translateMenu.contains(e.target)) {
            translateMenu.classList.add('hidden');
            translateButton.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Opciones del menú de traducción
    document.querySelectorAll('#translate-menu button').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.currentTarget.getAttribute('data-lang');
            translatePage(lang);
        });
    });
    
    // Carrito
    cartButton.addEventListener('click', openCartModal);
    modalCloseButton.addEventListener('click', closeCartModal);
    modalRequestButton.addEventListener('click', sendQuoteRequest);
    
    // Cerrar modal al hacer clic fuera
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !cartModal.classList.contains('hidden')) {
            closeCartModal();
        }
    });
    
    // Botones "Añadir a Cotización"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceKey = e.currentTarget.getAttribute('data-service');
            addToCart(serviceKey);
        });
    });
}

/**
 * Inicializa la aplicación cuando el DOM está listo
 */
function initializeApp() {
    // Establecer idioma por defecto
    const browserLang = navigator.language.slice(0, 2);
    if (translations[browserLang]) {
        currentLang = browserLang;
    }
    
    // Aplicar traducción inicial
    translatePage(currentLang);
    
    // Inicializar event listeners
    initializeEventListeners();
    
    // Inicializar interfaz del carrito
    updateCartUI();
    
    console.log('✅ OptiClean Soluciones - Aplicación inicializada correctamente');
}

// ==========================================================================
// INICIALIZACIÓN
// ==========================================================================

// Iniciar la aplicación cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Exportar funciones para uso global (si es necesario)
window.OptiCleanApp = {
    translatePage,
    addToCart,
    removeFromCart,
    updateCartUI
};