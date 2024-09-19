<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <section>
      <div class="container m-auto py-6 px-6">
        <RouterLink
          to="/jobs"
          class="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <i class="pi pi-arrow-circle-left mx-2"></i> Back to Job Listings
        </RouterLink>
      </div>
    </section>
</template>