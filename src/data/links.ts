const WHATSAPP_PHONE = '523312345678' // Placeholder Mexican number (Change to your business number)

export const links = {
  whatsappPhone: WHATSAPP_PHONE,
  email: 'contacto@runsystems.mx',
  
  // WhatsApp Link Generators
  getWhatsAppDemoLink: () => {
    const text = encodeURIComponent('¡Hola! Vi la landing page y me gustaría agendar una demostración de Run Systems.')
    return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`
  },
  
  getWhatsAppPlanLink: (planName: string) => {
    const text = encodeURIComponent(`¡Hola! Me interesa adquirir el Plan ${planName} para mi negocio.`)
    return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`
  }
}
