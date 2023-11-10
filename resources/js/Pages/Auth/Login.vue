<template>
  <div>
    <Link href="/home">Home</Link>
    <h1>Login Page</h1>
  </div>
</template>

<script>
import AuthLayout from '../../Layouts/Auth.vue';

export default {
  layout: AuthLayout,
};
</script>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>
