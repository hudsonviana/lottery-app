<template>
  <div>
    <Link href="/home">Home</Link>
    <h1>Login Page</h1>
    <button @click="exibirMensagem">Mensagem</button>
  </div>
</template>

<script>
import AuthLayout from '../../Layouts/Auth.vue';

export default {
  layout: AuthLayout,
  methods: {
    exibirMensagem() {
      alert('Mensagem: LOGIN');
    },
  },
};
</script>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>
