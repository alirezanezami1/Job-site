<template> 
<section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-blue-500 mb-6 text-center">
            Brows Jobs
        </h2>
        <div v-if="!jobs.length" class="text-center text-gray-500 py-6">
            <PulseLoader></PulseLoader>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <JobTemplate v-for="job in jobs.slice(0 , limit || jobs.length)" :key="job.id" :job="job"></JobTemplate>
        </div>
    </div>
</section>
<section v-if="showBtn" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>

</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import JobTemplate from './jobTemplate.vue';
import {RouterLink} from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';

const jobs = ref([])

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:5000/jobs')
        jobs.value = response.data;
    } catch (error) {
        console.error(error.message)
    }
})


defineProps({
    limit : Number,
    showBtn : {
        type : Boolean,
        default : false
    }
})

</script>
