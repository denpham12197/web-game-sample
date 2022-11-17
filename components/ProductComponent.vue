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
    font-size: 14px;
    width: 95%;
}
.product-summary-text h2 {
    font-size: 48px;
}
.component-wrapper {
    border: none;
    margin: 0;
    padding: 0;
}
@media only screen and (max-width: 992px) {
    .component-wrapper {
        border-radius: 5px;
    }
    .product-summary-text h2 {
        font-size: 24px;
    }
    .product-summary-text p {
        font-size: 12px;
        width: 100%;
    }
}
</style>
<style>
/*Deep css*/
.component-wrapper .card-img {
    border-radius: 20px;
}
@media only screen and (max-width: 992px) {
    .component-wrapper .card-img {
        border-radius: 10px;
        min-height: 250px
    }
}
</style>
