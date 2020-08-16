Vue.component('elegir-ganador', {
	props: ['listado'],
	template:
		'<div><template ><h2>Participantes</h2><ul><li v-for="persona in listado">{{persona}}</li></ul></template><button @click="elegirGanador">Elegir ganador</button><h2 v-if="ganador">El ganador es {{ganador}}</h2></div>',
	methods: {
		elegirGanador() {
			let cantidad = this.participantes.length;
			let indice = Math.floor(Math.random() * cantidad);
			this.ganador = this.participantes[indice - 1];
		},
	},
	data() {
		return {
			ganador: false,
			participantes: this.listado,
		};
	},
});
new Vue({
	el: 'main',
	data: {
		personas: ['Juan', 'Alicia', 'Pedro', 'Javier', 'Marcos'],
	},
});
