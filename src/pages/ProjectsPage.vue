<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: []
        }
    },
    created() {
        axios.get('http://127.0.0.1:8000/api/projects').then((resp) => {
            this.projects = resp.data.results
        });
    }
};
</script>

<template>
    <div class="container">
        <h1 class="mb-4 mt-4">PROGETTI:</h1>
        <div class="row row-cols-4 g-4 mt-4">
            <div class="col" v-for="project in projects">
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">
                    <ProjectCard :project="project" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>