<template>
    <b-card
        overlay
        :img-src="require(`~/assets/images/images/${src}`)"
        class="component-wrapper mb-2"
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
.component-wrapper {
    border-radius: 20px;
}
.component-wrapper h2,
.component-wrapper p {
    color: #FFFFFF;
}
.product-summary-text {
    position: absolute;
    bottom: 0;
}
.product-summary-text p {
    padding-right: 15px;
    font-size: 1.2vw;
}
.product-summary-text h2 {
    font-size: 3vw;
}
.component-wrapper {
    border: none;
    margin: 0;
    padding: 0;
}
@media only screen and (max-width: 992px) {
    .product-summary-text h2 {
        font-size: 1.5rem;
    }
    .product-summary-text p {
        font-size: 0.7rem;
    }
}
</style>
<style>
/*Deep css*/
.component-wrapper .card-img {
    border-radius: 20px;
}
</style>
