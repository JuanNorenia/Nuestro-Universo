export const universoConfig = {
  recipientName: 'Antonia',
  senderName: '[TU NOMBRE]',
  firstDate: '2026-03-14T00:00:00-05:00',
  firstDateLabel: '14 de marzo de 2026',
  soundtrack: {
    title: '[NOMBRE DE LA CANCIÓN]',
    artist: '[ARTISTA]',
    src: '/media/placeholder-song.mp3',
  },
  letter: ['[ESCRIBIR AQUÍ LA CARTA PERSONAL]'],
} as const;

export const discoveries = [
  { id: 'moon', label: 'la luna', text: 'Aquí guardé todas las noches en que hablar contigo hizo que amaneciera sin darme cuenta.', x: '18%', y: '26%' },
  { id: 'garden', label: 'el jardín', text: 'Las flores de este lugar solo abren cuando recuerdo tu manera de reírte.', x: '55%', y: '20%' },
  { id: 'comet', label: 'el cometa', text: 'Pide un deseo. El mío ya se cumplió el día que apareciste.', x: '80%', y: '40%' },
  { id: 'lake', label: 'el lago', text: 'Si te asomas, vas a ver el reflejo de todos nuestros próximos veranos.', x: '35%', y: '70%' },
  { id: 'window', label: 'la ventana', text: 'La dejé abierta para que puedas volver cuando quieras. Este universo es tuyo también.', x: '73%', y: '76%' },
] as const;

export const memories = [
  { id: '01', title: 'El día que nos volvimos novios', caption: 'Uno obviamente porque ese día nos volvimos novios, peroooo también porque es la primera foto que nos tomó alguien más como una pareja feliz.', media: '/media/memories/01.png', mediaType: 'image', tone: '#2b4657', glow: '#e6a079' },
  { id: '02', title: 'Nuestra primera mañana', caption: 'No te veía hace mucho y que te quedarás por primera vez en Bogotá conmigo fue inKKKreible. Esa fue nuestra primera mañana juntos en nuestra súper increíble luna de miel.', media: '/media/memories/02.png', mediaType: 'image', tone: '#534363', glow: '#e69baf' },
  { id: '03', title: 'Un día de veinte mil planes', caption: 'Repetiría este día porque hicimos 20 mil cosas muy cool: salimos a dar un paseo por la Séptima, hicimos nuestro primer almuerzo (que quedó lico lico), comimos pizza, fuimos a cabaret, conociste a Juli, estuvimos en McDonald’s. Todo increíble, la verdad. Me sentí como una pareja con 40 años de casados.', media: '/media/memories/03.png', mediaType: 'image', tone: '#2e514d', glow: '#e4bc75' },
  { id: '04', title: 'Un lugar lindísimo', caption: 'El lugar era muy lindoooooo, el plan era así súper estético, cool y alterno. Me encantaría volver contigo.', media: '/media/memories/04.png', mediaType: 'image', tone: '#4d3e52', glow: '#9bcec0' },
  { id: '05', title: 'La casita, el calor y nosotros', caption: 'Este video es de este domingo, haciendo el mejor plan cuando estoy en Calarcá: estar en mi casita, arrunchada contigo y un ventilador al lado por el calor tan hpta. No sé qué tiene ese plan, pero simplemente me encanta; es sentirme en un lugar seguro.', media: '/media/memories/05.mp4', mediaType: 'video', tone: '#57484a', glow: '#e8b27d' },
] as const;

export const timeline = [
  { date: '14 MARZO 2026', title: 'El primer capítulo', text: 'Ese día no sabíamos que estábamos abriendo una puerta. Yo solo sabía que quería volver a verte.' },
  { date: '[MES / AÑO]', title: 'La primera señal', text: 'Una canción, una caminata, una coincidencia demasiado perfecta para ser casualidad.' },
  { date: '[MES / AÑO]', title: 'Nuestro pequeño idioma', text: 'Inventamos una forma de decirnos todo sin tener que explicarlo.' },
  { date: '[HOY]', title: 'El universo sigue creciendo', text: 'Todavía quedan lugares por descubrir. Qué suerte que sean contigo.' },
] as const;

export const dancerSection = {
  eyebrow: 'archivo de movimiento · 04',
  title: 'Antonia<br />en movimiento.',
  text: 'Hay personas que no solo bailan: cambian la forma en que el espacio respira. Aquí guardaremos un fragmento de ella haciendo lo que mejor sabe hacer.',
  placeholder: 'El video de Antonia bailando llegará aquí.',
} as const;

export const gallery = [
  { id: 'g1', label: '[FOTO 01]', media: '/media/gallery/01.jpg', background: '#39334f', accent: '#d98e9a' },
  { id: 'g2', label: '[FOTO 02]', media: '/media/gallery/02.jpg', background: '#294650', accent: '#e3b36f' },
  { id: 'g3', label: '[FOTO 03]', media: '/media/gallery/03.jpg', background: '#55404c', accent: '#83c5ba' },
  { id: 'g4', label: '[FOTO 04]', media: '/media/gallery/04.jpg', background: '#4c4b39', accent: '#e99585' },
  { id: 'g5', label: '[FOTO 05]', media: '/media/gallery/05.jpg', background: '#343751', accent: '#d9a6bc' },
] as const;

export const notes = [
  { id: 'n1', title: 'Para cuando necesites una señal', body: 'Esta es: me sigues gustando en todos los días, incluso en los raros. Especialmente en los raros.' },
  { id: 'n2', title: 'Para una tarde de verano', body: 'Guarda un poco de sol para mí. Yo voy a guardar una historia para contarte cuando nos veamos.' },
  { id: 'n3', title: 'Para volver a empezar', body: 'No hace falta hacerlo perfecto. Solo hace falta que sigamos eligiéndonos con curiosidad.' },
  { id: 'n4', title: 'La verdad secreta', body: 'Mi parte favorita de cualquier plan es la parte en la que apareces tú.' },
] as const;