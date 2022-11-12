<template>
    <div class="btn-go-to-top">
        <b-button class="btn-icon-container">
            <b-icon v-if="isArrowDown" class="btn-icon" icon="chevron-down"></b-icon>
            <b-icon v-else class="btn-icon" icon="chevron-up" @click="gotoTop()"></b-icon>
        </b-button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isArrowDown: true,
            lastScrollPosition: 0
        }
    },
    mounted () {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll () {
            // Get the current scroll position
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 0) {
                return;
            }
            // Here we determine whether we need to show or hide the navbar
            this.showNavbar = currentScrollPosition < this.lastScrollPosition;
            // Set the current scroll position as the last scroll position
            this.lastScrollPosition = currentScrollPosition;
            if(this.lastScrollPosition > 500) {
                this.isArrowDown = false;
            } else {
                this.isArrowDown = true;
            }
        },
        gotoTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>
<style scoped>
.btn-go-to-top {
    position: fixed;
    bottom: 10vw;
    right: 3vw;
    z-index: 1000;
    padding: 10px;
}
.btn-icon {
    scale: 2;
    color: #000000;
    cursor: pointer;
    border-radius: 50%;
}
.btn-icon-container {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    border: none;
}
</style>