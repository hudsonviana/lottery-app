<template>
  <div>
    <Link href="/login">Login</Link>
    <h1>Brasil, {{ testando }}</h1>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3';
// import DefaultLayout from '../Layouts/Default.vue';

export default {
  // layout: DefaultLayout,
  props: {
    testando: String,
  },
  components: {
    Link,
  },
};
</script>
