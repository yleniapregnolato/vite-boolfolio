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
            <h4 class="fw-bold">Descrizione</h4>
            <p class="md_description">{{ project.content }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-body {
    .md_description {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>