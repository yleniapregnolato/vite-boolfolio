<script>
export default {
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="card h-100">
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
</template>