<script>
import axios from 'axios';
export default {
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
                <div class="card">
                    <div class="card-body">
                        <h3>{{ project.title }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>