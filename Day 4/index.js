Vue.component('mis-tareas', {
	props: ['tareas'],
	template: `<ul>
    <li v-for="tarea in tareas">{{tarea.title}}</li>
</ul>`,
});

new Vue({
	el: 'main',
	mounted() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos')
			.then((response) => {
				console.log(response);
				this.tareasAjax = response.data;
			});
	},
	data: {
		tareasAjax: [],
	},
});
