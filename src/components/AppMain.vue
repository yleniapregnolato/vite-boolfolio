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
                        <h2>{{ project.title }}</h2>
                        <div>
                            <h4 class="fw-bold">Tipologia:</h4>
                            <p>{{ project.type ? project.type.name : 'nessuna tipologia selezionata' }}</p>
                        </div>
                        <h4 class="fw-bold">Tecnologie:</h4>
                        <div v-for="technology in project.technologies">
                            <p>{{ technology.name }}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>