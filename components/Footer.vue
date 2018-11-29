<template>
<div>
    <mq-layout :mq="['desktop', 'laptop']">
        <div class="footer">
            Copyright © Rejon Taylor-Foster. All rights reserved.
        </div>
    </mq-layout>
    <mq-layout :mq="['tablet', 'mobile', 'xsmobile']">
        <div class="footer mobile">
            Copyright © Rejon Taylor-Foster. All rights reserved.
        </div>
    </mq-layout>
</div>
</template>

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
