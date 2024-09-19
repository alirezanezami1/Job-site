<template>
    <Hero :src="logo" title="Pursue your skills..." subtitle="Find job that fits your skills and needs"></Hero>
    <HomeCard></HomeCard>
    <JobList :limit="3" :showBtn="true"></JobList>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
import HomeCard from '@/components/HomeCard.vue'
import JobList from '@/components/JobList.vue'
import logo from '@/assets/img/icons8-job-100 (1).png'
</script>