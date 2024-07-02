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
            this.project = resp.data.results;
        })
        .catch((error) => {});
    },

};
</script>

<template>
    <div class="container" v-if="project !== null">
        <h2>{{ project.title }}</h2>
        
    </div>
</template>

<style scoped lang="scss">
</style>