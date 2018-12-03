<template>
<div>

    <media :query="{minWidth: 800}">
        <div class="footer">
            Copyright © Rejon Taylor-Foster. All rights reserved.
        </div>
    </media>
    <media :query="{maxWidth: 800}">
        <div class="footer mobile">
            Copyright © Rejon Taylor-Foster. All rights reserved.
        </div>
    </media>
</div>
</template>

<script>
import Media from 'vue-media';

export default {
    components:{
        Media
    }
}
</script>


<style scoped>
    .footer {
        max-width: 900px;
        margin: auto;
        margin-top: 2em !important; /*NOTE(Rejon): This is for overriding .inset class on other components*/
        margin-bottom: 2em !important; /*NOTE(Rejon): This is for overriding .inset class on other components*/
        opacity: 0.64;
        font-family: 'StrongGamer';
    }

    .footer.mobile {
        padding-right: 3vw;
        padding-left: 3vw;
        border-top: 1px solid #faf7f0;
        padding-top: 1em;
        width: 94vw;
    }
</style>
