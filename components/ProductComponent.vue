<template>
    <b-card
        overlay
        :img-src="require(`~/assets/images/images/${src}`)"
        class="product-item mb-2"
    >
        <div class="product-summary-text">
            <!-- Game title -->
            <b-card-title>
                <h2>
                    {{title}}
                </h2>
            </b-card-title>

            <!-- Game description -->
            <b-card-text>
                <p>{{description}}</p>
            </b-card-text>
        </div>
    </b-card>
</template>
<script>
export default {
    // props
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
<style scoped>
.product-item h2,
.product-item p {
    color: #FFFFFF;
}
.product-summary-text p {
    padding-right: 15px;
}
/*Deep css*/
.product-item .card-img {
    border-radius: 20px;
}
</style>
