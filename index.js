const vm = new Vue({
	el: 'main',
	data: {
		laborales: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'],
		nolaborales: ['sábado', 'domingo'],
		minimo: 5,
		juegos: [
			{
				titulo: 'Battlefield',
				genero: 'FSP',
				puntuacion: 9,
			},
			{
				titulo: 'Resident Evil',
				genero: 'survival',
				puntuacion: 10,
			},
			{
				titulo: 'Civilization VI',
				genero: 'Estrategia',
				puntuacion: 8,
			},
		],
		tareas: [
			{
				nombre: 'leer',
				prioridad: 'alta',
				done: true,
				antiguedad: 78978978978979870,
			},
			{
				nombre: 'escribir',
				prioridad: 'baja',
				done: true,
				antiguedad: 3456789765435678990977634556870995652,
			},
			{nombre: 'pintar', prioridad: 'media', done: true, antiguedad: 3},
			{nombre: 'dibujar', prioridad: 'alta', done: true, antiguedad: 17},
			{
				nombre: 'esculpir',
				prioridad: 'alta',
				done: true,
				antiguedad: 40,
			},
			{
				nombre: 'cocinar',
				prioridad: 'alta',
				done: true,
				antiguedad: 7,
			},
		],
		persona: {nombre: 'Juan', altura: 'alta'},
		toodoos: [
			'aprender Vue',
			'practicar vanilla JS',
			'hacer cosas bonitas',
		],
		nuevaTarea: '',
		mensaje: 'Anuska Sampedro Carballeira',
	},
	methods: {
		agregarTarea() {
			this.toodoos.unshift(this.nuevaTarea);
			this.nuevaTarea = '';
		},
	},
	computed: {
		mejoresJuegos() {
			return this.juegos.filter((juego) => juego.puntuacion > 9);
		},
		bestJuegos() {
			return this.juegos.filter(
				(juego) => juego.puntuacion >= this.minimo
			);
		},
		mensajeAlReves() {
			return this.mensaje.split('').reverse().join('');
		},
		prioridadAlta() {
			return this.tareas.filter((tarea) => tarea.prioridad === 'alta');
		},
		prioridadBaja() {
			return this.tareas.filter((tarea) => tarea.prioridad === 'baja');
		},
		tareasPorAntiguedad() {
			return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
		},
	},
});

// function agregarTarea() {
// 	const input = document.querySelector('input[type=text]');
// 	vm.tareas.unshift(input.value);
// 	input.value = '';
// }

// new Vue({
// 	el: 'main',
// 	data: {
// 		mierda: false,
// 		edad: 8,
// 	},
// });
