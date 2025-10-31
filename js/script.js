/**
 * OPTICLEAN SOLUCIONES - SCRIPT PRINCIPAL
 * 
 * Este archivo contiene toda la funcionalidad JavaScript para el sitio web
 * de OptiClean Soluciones, incluyendo:
 * - Sistema de traducción multiidioma
 * - Interactividad de la interfaz
 * 
 * @version 1.0.0
 * @author OptiClean Soluciones
 */

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
        hero_title: 'OptiClean Soluciones',
        hero_subtitle: 'Excelencia, Tecnología de Vanguardia y Compromiso Ecológico para su Empresa o Residencia.',
        hero_cta: 'Descubra Nuestros Servicios',
        about_us_title: 'Nuestro Compromiso',
        mission_title: 'Misión',
        mission_content: 'Ofrecer servicios de aseo y mantenimiento de alta calidad a empresas y conjuntos residenciales en la región, garantizando la óptima limpieza y desinfección de sus espacios. Cumplimos nuestra promesa mediante la implementación de tecnología de vanguardia, un equipo humano calificado y experimentado, y la priorización de prácticas ecológicas que minimizan el impacto ambiental.',
        vision_title: 'Visión',
        vision_content: 'Ser la empresa líder en soluciones integrales de aseo empresarial y residencial en el suroccidente colombiano, reconocida por nuestra excelencia operativa impulsada por la innovación tecnológica y un firme compromiso con la sostenibilidad. Buscamos transformar la percepción del servicio de limpieza.',
        values_title: 'Pilares de Excelencia',
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
        footer_web: 'opticlean.xyz',
        footer_address: 'Sede en Colombia. Sirviendo al suroccidente colombiano.',
        footer_whatsapp: 'WhatsApp',
        about_us_link: 'Sobre Nosotros',
        services_link: 'Servicios',
        footer_copyright: '© 2025 OptiClean Soluciones. Todos los derechos reservados.'
    },
    en: {
        language: 'Language',
        lang_es: 'Spanish',
        lang_en: 'English',
        lang_pt: 'Portuguese',
        whatsapp_contact: 'Contact Us',
        hero_title: 'OptiClean Solutions',
        hero_subtitle: 'Excellence, Cutting-Edge Technology and Eco-Commitment for your Business or Residence.',
        hero_cta: 'Discover Our Services',
        about_us_title: 'Our Commitment',
        mission_title: 'Mission',
        mission_content: 'To offer high-quality cleaning and maintenance services to companies and residential complexes in the region, ensuring optimal cleanliness and disinfection of their spaces. We fulfill our promise through the implementation of cutting-edge technology, a qualified and experienced human team, and the prioritization of ecological practices that minimize environmental impact.',
        vision_title: 'Vision',
        vision_content: 'To be the leading company in comprehensive business and residential cleaning solutions in southwestern Colombia, recognized for our operational excellence driven by technological innovation and a firm commitment to sustainability. We seek to transform the perception of cleaning services.',
        values_title: 'Pillars of Excellence',
        value1_title: 'Technological Innovation',
        value1_content: 'We use the latest generation machinery to optimize processes and guarantee superior results.',
        value2_title: 'Excellence and Quality',
        value2_content: 'We commit to the highest standards, offering impeccable cleaning and disinfection.',
        value3_title: 'Environmental Sustainability',
        value3_content: 'We prioritize ecological products and methods to minimize the impact on our world.',
        value4_title: 'Human Talent',
        value4_content: 'Qualified and experienced team, guaranteeing the quality and efficiency of the service.',
        value5_title: 'Trust and Compliance',
        value5_content: 'Transparency and rigorous compliance with agreements to build lasting relationships.',
        services_title: 'Our Specialized Services',
        service1_title: 'Residential Complexes',
        service1_content: 'Maintenance of common areas, swimming pools, stairwells and social areas, ensuring the well-being and quality of life of residents.',
        service2_title: 'Business and Industrial Cleaning',
        service2_content: 'Deep cleaning and disinfection of offices, facades, production areas and high-traffic zones with technological equipment.',
        service3_title: 'Parking Lot and Hard Surface Cleaning',
        service3_content: 'We use specialized machinery for deep cleaning of floors and parking lots, efficiently removing tough stains.',
        services_cta: 'Request Quote Now',
        footer_phone: 'Direct Contact: +57 318 218 0179',
        footer_web: 'opticlean.xyz',
        footer_address: 'Headquarters in Colombia. Serving the Colombian southwest.',
        footer_whatsapp: 'WhatsApp',
        about_us_link: 'About Us',
        services_link: 'Services',
        footer_copyright: '© 2025 OptiClean Solutions. All rights reserved.'
    },
    pt: {
        language: 'Idioma',
        lang_es: 'Espanhol',
        lang_en: 'Inglês',
        lang_pt: 'Português',
        whatsapp_contact: 'Contate-nos',
        hero_title: 'OptiClean Soluções',
        hero_subtitle: 'Excelência, Tecnologia de Ponta e Compromisso Ecológico para sua Empresa ou Residência.',
        hero_cta: 'Descubra Nossos Serviços',
        about_us_title: 'Nosso Compromisso',
        mission_title: 'Missão',
        mission_content: 'Oferecer serviços de limpeza e manutenção de alta qualidade para empresas e condomínios residenciais na região, garantindo a limpeza e desinfecção ideais de seus espaços. Cumprimos nossa promessa por meio da implementação de tecnologia de ponta, uma equipe humana qualificada e experiente, e da priorização de práticas ecológicas que minimizam o impacto ambiental.',
        vision_title: 'Visão',
        vision_content: 'Ser a empresa líder em soluções integrais de limpeza empresarial e residencial no sudoeste colombiano, reconhecida pela nossa excelência operacional impulsionada pela inovação tecnológica e um firme compromisso com a sustentabilidade. Buscamos transformar a percepção do serviço de limpeza.',
        values_title: 'Pilares da Excelência',
        value1_title: 'Inovação Tecnológica',
        value1_content: 'Utilizamos máquinas de última geração para otimizar processos e garantir resultados superiores.',
        value2_title: 'Excelência e Qualidade',
        value2_content: 'Comprometemo-nos com os mais altos padrões, oferecendo limpeza e desinfecção impecáveis.',
        value3_title: 'Sustentabilidade Ambiental',
        value3_content: 'Priorizamos produtos e métodos ecológicos para minimizar o impacto em nosso mundo.',
        value4_title: 'Talento Humano',
        value4_content: 'Equipe qualificada e experiente, garantindo a qualidade e eficiência do serviço.',
        value5_title: 'Confiança e Conformidade',
        value5_content: 'Transparência e rigoroso cumprimento dos acordos para construir relacionamentos duradouros.',
        services_title: 'Nossos Serviços Especializados',
        service1_title: 'Condomínios Residenciais',
        service1_content: 'Manutenção de áreas comuns, piscinas, escadas e áreas sociais, garantindo o bem-estar e a qualidade de vida dos moradores.',
        service2_title: 'Limpeza Empresarial e Industrial',
        service2_content: 'Limpeza profunda e desinfecção de escritórios, fachadas, áreas de produção e zonas de alto tráfego com equipamentos tecnológicos.',
        service3_title: 'Limpeza de Estacionamentos e Áreas Duras',
        service3_content: 'Utilizamos máquinas especializadas para a limpeza profunda de pisos e estacionamentos, eliminando manchas difíceis com eficiência.',
        services_cta: 'Solicitar Orçamento Agora',
        footer_phone: 'Contato Direto: +57 318 218 0179',
        footer_web: 'opticlean.xyz',
        footer_address: 'Sede na Colômbia. Atendendo o sudoeste colombiano.',
        footer_whatsapp: 'WhatsApp',
        about_us_link: 'Sobre Nós',
        services_link: 'Serviços',
        footer_copyright: '© 2025 OptiClean Soluções. Todos os direitos reservados.'
    }
};

// ==========================================================================
// VARIABLES GLOBALES Y ESTADO DE LA APLICACIÓN
// ==========================================================================

let currentLang = 'es';

// Referencias a elementos DOM
const elements = document.querySelectorAll('[data-key]');
const translateButton = document.getElementById('translate-button');
const translateMenu = document.getElementById('translate-menu');

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

    // Ocultar menú de traducción
    translateMenu.classList.add('hidden');
    translateButton.setAttribute('aria-expanded', 'false');
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
    translatePage
};