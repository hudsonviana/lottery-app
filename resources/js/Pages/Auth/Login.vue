<template>
  <div>
    <Link href="/home">Home</Link>
    <h1>Login Page {{ testando }}</h1>
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
};
</script>
