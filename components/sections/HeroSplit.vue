<template>
    <section
        class="hero section"
        :class="[
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="hero-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <div
                    class="split-wrap"
                    :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop'
                    ]">
                    <div class="split-item">
                        <div class="hero-content split-item-content center-content-mobile">
                            <h1 class="mt-0 mb-16 reveal-from-left">
                                XBT · Elastic Bitcoin with Adaptive Supply
                            </h1>
                            <p class="mt-0 mb-24 reveal-from-left" data-reveal-delay="200">
                               <em>A rebasing bitcoin run on ethereum network.</em>
                                <br/>
                                <br/>
                                It's time to know about XBT, it's stabilized to Bitcoin's price by utilized the power of Ethereum's Smart Contract to adjust supply based on market condition.
                            </p>
                            <div class="reveal-from-left" data-reveal-delay="400">
                              <c-button tag="a" color="primary" wide-mobile href="/buy">
                                Buy XBT
                              </c-button>
                            </div>
                        </div>
                        <div class="hero-figure is-3d split-item-image illustration-element-01 reveal-scale-up">
                            <c-image
                                class="has-shadow"
                                :src="require('@/assets/images/hero.jpg')"
                                alt="Hero image"
                                :width="528"
                                :height="396" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionSplitProps } from '@/utils/SectionProps.js'
import CButton from '@/components/elements/Button.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CHeroSplit',
  components: {
    CButton,
    CImage
  },
  mixins: [SectionSplitProps]
}
</script>
