const user = new Vue({
	el: 'main',
	mounted() {
		// console.log('Lista');
		// this.cargarPersonas();
		this.cargarPersonas2();
	},
	data: {
		personas: [],
	},
	methods: {
		// 	cargarPersonas() {
		// 		this.$http
		// 			.get('https://randomuser.me/api/?results=10')
		// 			.then((response) => {
		// 				console.log(response);
		// 				this.personas = response.data.results;
		// 			});
		// 	},
		cargarPersonas2() {
			axios
				.get('https://randomuser.me/api/?results=10')
				.then((response) => {
					console.log(response);
					this.personas = response.data.results;
				});

			then((response) => {
				console.log(response);
				this.personas = response.data.results;
			});
			then((response) => (this.personas = response.data.result));
		},
	},
});
