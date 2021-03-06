<template>
    <header class="site-header">
        <div class="container">
            <div class="site-header-inner" :class="bottomDivider && 'has-bottom-divider'">
                <c-logo/>
                <button
                        v-if="!hideNav"
                        ref="hamburger"
                        class="header-nav-toggle"
                        aria-controls="primary-menu"
                        :aria-expanded="isActive ? 'true' : 'false'"
                        @click="isActive ? closeMenu() : openMenu()">
                    <span class="screen-reader">Menu</span>
                    <span class="hamburger">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <nav
                        v-if="!hideNav"
                        ref="nav"
                        class="header-nav"
                        :class="{ 'is-active': isActive }">
                    <div class="header-nav-inner">
                        <ul
                                class="list-reset text-xxs"
                                :class="navPosition && `header-nav-${navPosition}`">
                            <li @click="closeMenu">
                                <router-link to="/learn/">{{ $t("header.learn") }}</router-link>
                            </li>
                            <li @click="closeMenu">
                                <router-link to="/governance/">{{ $t("header.governance") }}</router-link>
                            </li>
                            <li @click="closeMenu">
                                <router-link to="/roadmap/">{{ $t("header.roadmap") }}</router-link>
                            </li>
                          <li @click="closeMenu">
                            <router-link to="/sales/">Sales</router-link>
                          </li>
<!--                            <li @click="closeMenu">-->
<!--                                <router-link to="/airdrop/">{{ $t("airdrop.airdrop") }}</router-link>-->
<!--                            </li>-->
<!--                            <li @click="closeMenu">-->
<!--                                <router-link to="/cryptounicorns/">{{ $t("header.cryptounicorns") }}</router-link>-->
<!--                            </li>-->
                            <li @click="closeMenu">
                                <router-link to="/xbt-investment-fund/">{{ $t("header.investment_fund") }}</router-link>
                            </li>
                            <li @click="closeMenu">
                                <a href="https://www.xbn.finance">XBN</a>
                            </li>
                        </ul>
                        <ul class="list-reset header-nav-right">
                            <c-button tag="a" class="button button-primary button-sm" color="primary" wide-mobile
                                      href="/buy">
                                {{ $t("header.buy") }}
                            </c-button>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    import CLogo from '@/components/layout/partials/Logo.vue'
    import CButton from '@/components/elements/Button'

    export default {
        name: 'CHeader',
        components: {
            CLogo,
            CButton
        },
        props: {
            active: Boolean,
            navPosition: {
                type: String,
                default: ''
            },
            hideNav: {
                type: Boolean,
                default: false
            },
            hideSignin: {
                type: Boolean,
                default: false
            },
            bottomDivider: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isActive: this.active || false
            }
        },
        watch: {
            active(value) {
                this.isActive = value
            }
        },
        methods: {
            openMenu() {
                document.body.classList.add('off-nav-is-active')
                if (this.$refs.nav)
                    this.$refs.nav.style.maxHeight = this.$refs.nav.scrollHeight + 'px'
                this.$emit('update:active', true)
                this.isActive = true
            },
            closeMenu() {
                document.body.classList.remove('off-nav-is-active')
                if (this.$refs.nav) this.$refs.nav.style.maxHeight = null
                this.$emit('close')
                this.$emit('update:active', false)
                this.isActive = false
            },
            keyPress() {
                this.isActive && event.keyCode === 27 && this.closeMenu()
            },
            clickOutside(e) {
                if (!this.$refs.nav) return
                if (
                    !this.isActive ||
                    this.$refs.nav.contains(e.target) ||
                    e.target === this.$refs.hamburger
                )
                    return
                this.closeMenu()
            }
        },
        mounted() {
            this.active && this.openMenu()
            document.addEventListener('keydown', this.keyPress)
            document.addEventListener('click', this.clickOutside)
        },
        beforeDestroy() {
            document.addEventListener('keydown', this.keyPress)
            document.removeEventListener('click', this.clickOutside)
            this.closeMenu()
        }
    }
</script>

<style scoped>
    nav.header-nav li > a {
        font-weight: 600 !important;
    }
</style>
