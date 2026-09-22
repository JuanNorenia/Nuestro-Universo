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
  { id: '01', title: '[NOMBRE DEL RECUERDO]', caption: 'el principio de algo inmenso', media: '/media/memories/01.jpg', tone: '#2b4657', glow: '#e6a079' },
  { id: '02', title: '[LUGAR FAVORITO]', caption: 'donde el tiempo aprendió a ir despacio', media: '/media/memories/02.jpg', tone: '#534363', glow: '#e69baf' },
  { id: '03', title: '[UNA TARDE CUALQUIERA]', caption: 'la clase de día que quiero repetir', media: '/media/memories/03.jpg', tone: '#2e514d', glow: '#e4bc75' },
  { id: '04', title: '[VIAJE O AVENTURA]', caption: 'dos personas, cero mapa', media: '/media/memories/04.jpg', tone: '#4d3e52', glow: '#9bcec0' },
  { id: '05', title: '[PEQUEÑO MOMENTO]', caption: 'lo cotidiano también puede brillar', media: '/media/memories/05.jpg', tone: '#57484a', glow: '#e8b27d' },
] as const;

export const timeline = [
  { date: '[MES / AÑO]', title: 'El primer capítulo', text: 'Ese día no sabíamos que estábamos abriendo una puerta. Yo solo sabía que quería volver a verte.' },
  { date: '[MES / AÑO]', title: 'La primera señal', text: 'Una canción, una caminata, una coincidencia demasiado perfecta para ser casualidad.' },
  { date: '[MES / AÑO]', title: 'Nuestro pequeño idioma', text: 'Inventamos una forma de decirnos todo sin tener que explicarlo.' },
  { date: '[HOY]', title: 'El universo sigue creciendo', text: 'Todavía quedan lugares por descubrir. Qué suerte que sean contigo.' },
] as const;

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