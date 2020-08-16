  <!--<template>

 <div>
 <section v-if="tipo==='section'">
    <slot>Hola</slot>
  </section>
  <article v-if="tipo==='article'">
    <slot>Adiós</slot>
  </article>
</div>

</template>
-->
<script>
export default {
  props: ['tipo'],
  render (createElement) {
    return createElement(
      this.tipo, this.$slots.default
    )
  }

}
</script>

<style>

</style>
