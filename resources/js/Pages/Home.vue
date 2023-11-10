<template>
  <div>
    <Link href="/login">Login</Link>
    <h1 class="text-red-500">Brasil, {{ testando }}</h1>
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
