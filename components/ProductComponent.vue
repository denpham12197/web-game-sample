<template>
    <b-card
        overlay
        :img-src="require(`~/assets/images/images/${src}`)"
        class="game-item mb-2"
    >
        <div class="game-intro-text">
            <b-card-title>
                <h2>
                    {{title}}
                </h2>
            </b-card-title>
            <b-card-text>
                <p>{{description}}</p>
            </b-card-text>
        </div>
    </b-card>
</template>
<script>
export default {
    props: {
        src: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    }
}
</script>
<style>
.game-item h2, .game-item p {
    color: #FFFFFF;
}
/*Deep css*/
.game-item .card-img {
    border-radius: 20px;
}

.product-image {
    border-radius: 15px;
    max-width: 3vw;
}
.game-intro-text p {
    padding-right: 15px;
}
</style>
