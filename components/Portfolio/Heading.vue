<template>
    <div class="heading">
    <div class="border"></div>
        <p>
            {{ text }}
        </p>
        <div class="border"></div>
    </div>
</template>


<script>
export default {
    props: {
        text: String
    }
}
</script>

<style scoped>
    .heading {
        font-family: 'ScoreDozer';
        display: flex; 
        justify-content: center;
    }

    .border {
        height: 1px; 
        background: #fcf7f0; 
        align-self: center; 
        flex: 2 2 10em;
    }

    .heading .border:first-of-type {
        margin-right: 2em;
    }

    .heading .border:last-of-type {
        margin-left: 2em; 
    }

    .heading p {
        font-size: 2.32em; 
        flex: 1 1;
        text-align: center;
    }
</style>
