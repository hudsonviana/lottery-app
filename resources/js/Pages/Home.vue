<template>
  <div>
    <Link href="/login">Login</Link>
    <h1>Brasil, {{ testando }}</h1>
    <div id="resultado">Contagem de cliques: 0</div>
    <!-- <button @click="exibirMensagem">Mensagem</button> -->
    <button @click="incrementaContagem">Mensagem</button>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3';

export default {
  props: {
    testando: String,
  },
  components: {
    Link,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    exibirMensagem() {
      alert('Mensagem: HOME');
    },
    incrementaContagem() {
      this.count++;
      const divResultado = document.querySelector('#resultado');
      divResultado.innerText = `Contagem de cliques: ${this.count}`;
    },
  },
};
</script>
