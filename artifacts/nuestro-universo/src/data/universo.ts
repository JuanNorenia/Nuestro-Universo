export const universoConfig = {
  recipientName: 'Antonia',
  senderName: 'Amorororo',
  firstDate: '2026-03-14T00:00:00-05:00',
  firstDateLabel: '14 de marzo de 2026',
  soundtrack: {
    title: 'Yoko',
    artist: 'Álvaro Díaz',
    src: '/media/yoko.mp3',
  },
  letter: ['Sé que una carta a través de un computador no es tan romántica como lo podría ser una escrita con mi puño y letra, pero esto me da la posibilidad de corregir esa letra fea mía y ponerle el estilo que considere más acorde con ella. Todo esto que te diré lo escribí en mi primer intento; no le daré un repaso ni lo revisaré. Haré de cuenta que estoy escribiendo todo esto en un papel; tal vez así te llegue con la misma fuerza con la que estoy escribiéndola. Todo esto es una pequeña muestra de mi amor. Lamento no poder hacer ni poder darte todo lo que siento que mereces. Sé que últimamente has estado pasando por momentos tal vez no muy bonitos, y me frustra no poder estar ahí para ti. No sé si esto sea una excusa que me doy a mí mismo para sentir que estoy haciendo algo, pero espero que sepas que todo es con amor. Te amo, Antonia; te amo con demasiada intensidad y estoy seguro de que nunca dejaré de hacerlo.'],
} as const;

export const discoveries = [
  { id: 'moon', label: 'la luna', text: 'Aquí guardé todas las noches en que hablar contigo hizo que amaneciera sin darme cuenta.', x: '18%', y: '26%' },
  { id: 'garden', label: 'el jardín', text: 'No sé por qué la naturaleza siempre me recuerda al día que te pedí ser novios. Recorrí todo el mundo hasta que por fin salió bien.', x: '55%', y: '20%' },
  { id: 'comet', label: 'el cometa', text: 'La gente suele pedirles a las estrellas un deseo. Ya no necesito hacerlo, porque eres todo eso que siempre deseé.', x: '80%', y: '40%' },
  { id: 'lake', label: 'el lago', text: 'No me gusta el mar ni nada relacionado con la playa, pero me muero por volver a conocerlo junto a ti.', x: '35%', y: '70%' },
  { id: 'window', label: 'la ventana', text: 'Existen mil y una formas de sentirte cerca. Siempre que mires esto, piensa en nosotros.', x: '73%', y: '76%' },
] as const;


export const memories = [
  { id: '01', title: 'El día que nos volvimos novios', caption: 'Uno, obviamente, porque ese día nos volvimos novios, peroooo también porque es la primera foto que nos tomó alguien más como una pareja feliz.', media: '/media/memories/01.png', mediaType: 'image', tone: '#2b4657', glow: '#e6a079' },
  { id: '02', title: 'Nuestra primera mañana', caption: 'No te veía hace mucho, y que te quedaras por primera vez en Bogotá conmigo fue inKKKreible. Esa fue nuestra primera mañana juntos en nuestra súper increíble luna de miel.', media: '/media/memories/02.png', mediaType: 'image', tone: '#534363', glow: '#e69baf' },
  { id: '03', title: 'Un día de veinte mil planes', caption: 'Repetiría este día porque hicimos 20 mil cosas muy cool: salimos a dar un paseo por la Séptima, hicimos nuestro primer almuerzo (que quedó lico lico), comimos pizza, fuimos a cabaret, conociste a Juli, estuvimos en McDonald’s. Todo increíble, la verdad. Me sentí como una pareja con 40 años de casados.', media: '/media/memories/03.png', mediaType: 'image', tone: '#2e514d', glow: '#e4bc75' },
  { id: '04', title: 'Un lugar lindísimo', caption: 'El lugar era muy lindoooooo, el plan era así súper estético, cool y alterno. Me encantaría volver contigo.', media: '/media/memories/04.png', mediaType: 'image', tone: '#4d3e52', glow: '#9bcec0' },
  { id: '05', title: 'La casita, el calor y nosotros', caption: 'Este video es de este domingo, haciendo el mejor plan cuando estoy en Calarcá: estar en mi casita, arrunchada contigo y un ventilador al lado por el calor tan hpta. No sé qué tiene ese plan, pero simplemente me encanta; es sentirme en un lugar seguro.', media: '/media/memories/05.mp4', mediaType: 'video', tone: '#57484a', glow: '#e8b27d' },
] as const;

export const timeline = [
  { date: '14 MARZO 2026', title: 'Todo estaba en contra, pero aun así, miramos aquí, juntos', text: 'Fue un inicio un poco accidentado, pero eso lo hace aún más mágico.' },
  { date: '05 ABRIL 2026', title: 'La primera señal', text: 'Puede sonar trivial, pero es un día muy importante para mí; se podría decir que fue mi primer día en tu casa, siendo novios.' },
  { date: '22 MAYO 2026', title: 'Una comida muy onichan', text: 'Recuerdo tanto este día: te di tu regalo de cumpleaños y fuimos a Kantaro. Lico lico.' },
  { date: '26 SEPTIEMBRE 2026', title: 'Estaré para ti, hoy y siempre', text: 'Perdón por no poder estar físicamente contigo, pero siempre vas a poder contar conmigo. Te amo. <3' },
] as const;

export const gallery = [
  { id: 'g1', label: 'nosotros', media: '/media/gallery/01.png', background: '#39334f', accent: '#d98e9a' },
  { id: 'g2', label: 'una noche', media: '/media/gallery/02.png', background: '#294650', accent: '#e3b36f' },
  { id: 'g3', label: 'purgatorio', media: '/media/gallery/03.png', background: '#55404c', accent: '#83c5ba' },
  { id: 'g4', label: 'bajo las luces', media: '/media/gallery/04.png', background: '#4c4b39', accent: '#e99585' },
  { id: 'g5', label: 'contigo', media: '/media/gallery/05.png', background: '#343751', accent: '#d9a6bc' },
  { id: 'g6', label: 'un beso', media: '/media/gallery/06.png', background: '#3e4a42', accent: '#e7b06f' },
  { id: 'g7', label: 'siempre', media: '/media/gallery/07.png', background: '#43384d', accent: '#d99aaa' },
] as const;

export const notes = [
  { id: 'n1', title: 'Para cuando necesites una señal', body: 'Te amo. Sé que tienes días buenos y días malos, y por eso te admiro; siempre sales adelante.' },
  { id: 'n2', title: 'Para una tarde de verano', body: 'Cuidado con el sol, que los bombones se están derritiendo.' },
  { id: 'n3', title: 'Para volver a empezar', body: 'Si mil veces caes y te sientes mal, mil y una veces estaré ahí para ti y apoyarte.' },
  { id: 'n4', title: 'La verdad secreta', body: 'No hay ningún secreto: desde el momento que te vi, supe que eras tú. Como te lo dije aquella vez, todos los caminos llevan a Roma.' },
] as const;