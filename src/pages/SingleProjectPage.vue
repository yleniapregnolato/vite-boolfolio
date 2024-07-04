<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: null
        }
    },
    created() {
        const slug = this.$route.params.slug;
        axios.get(`http://127.0.0.1:8000/api/projects/${slug}`).then(resp => {
            this.project = resp.data;
        })

            .catch((error) => { });
    },

};
</script>

<template>
    <div class="container" v-if="project">
        <h2>{{ project.title }}</h2>
        <p>{{ project.content }}</p>

        <h3>Tecnologie utilizzate:</h3>
        <ul v-for="technology in project.technologies">
            <li>{{ technology.name }}</li>
            <p>{{ technology.description }}</p>
        </ul>
    </div>
</template>

<style scoped lang="scss"></style>