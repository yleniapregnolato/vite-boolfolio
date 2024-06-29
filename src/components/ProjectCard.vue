<script>
export default {

};
</script>

<template>
    <div class="col" v-for="project in projects">
        <div class="card">
            <div class="card-body">
                <h3>{{ project.title }}</h3>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>