<template><div class="persona">
<template v-if="persona">
   <h1 v-text="datosPersona.nombre"></h1>
   <h2 v-text="datosPersona.email"></h2>
   <img :src="datosPersona.foto" alt=""/>
</template></div></template>

<script>
import axios from 'axios'
export default {

  mounted () {
    axios.get('https://cors-anywhere.herokuapp.com/https://randomuser.me/api/')
      .then((respuesta) => {
        console.log(respuesta)
        this.persona = respuesta.data.results[1]
      })
  },
  data () {
    return {
      persona: null
    }
  },
  computed: {
    datosPersona () {
      return {
        nombre: `${this.persona.name.first} ${this.persona.name.last}`,
        fotos: this.persona.picture.large,
        email: this.persona.email
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
