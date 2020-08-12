const vm1 = new Vue({
	el: '#section1',
	data: {
		laborales: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'],
		nolaborales: ['sábado', 'domingo'],
		minimo: 5,
		busqueda: '',
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
				done: false,
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
				done: false,
				antiguedad: 40,
			},
			{
				nombre: 'cocinar',
				prioridad: 'alta',
				done: false,
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
		mensaje: 'nushy hushy',
	},
	methods: {
		completarTarea(tarea) {
			tarea.done = !tarea.done;
		},
		isDone(tarea) {
			if (tarea.done) {
				return 'Completada';
			} else {
				return 'Por hacer';
			}
		},
		agregarTarea() {
			this.toodoos.unshift(this.nuevaTarea);
			this.nuevaTarea = '';
		},
	},
	computed: {
		tareasCompletadas() {
			return this.tareas.filter((tarea) => tarea.done);
		},
		mejoresJuegos() {
			return this.juegos.filter((juego) => juego.puntuacion > 9);
		},
		bestJuegos() {
			return this.juegos.filter(
				(juego) => juego.puntuacion >= this.minimo
			);
		},

		buscarJuego() {
			return this.juegos.filter((juego) =>
				juego.titulo.toLowerCase().includes(this.busqueda)
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

const vm2 = new Vue({
	el: '#section2',
	data: {
		mensaje: 'Hola!',
	},
	methods: {
		sayHi() {
			return this.mensaje;
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
