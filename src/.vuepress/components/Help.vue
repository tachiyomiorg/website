<template>
	<div class="theme-container">
		<Navbar />
		<main class="page">
			<div class="theme-custom-content content__default">
				<slot name="top" />

				<Content class="theme-custom-content" />
				
				<div class="row help" v-if="data.help && data.help.length">
					<div class="column helpItem" v-for="(helpItem, index) in data.help" :key="index">
						<a v-if="helpItem.link" :href="helpItem.link" tabindex="1">
							<div class="card">
								<header>
									<MaterialIcon v-if="helpItem.icon" :iconName="helpItem.icon" iconOnly />
									<h3>{{ helpItem.title }}</h3>
								</header>
								<p>{{ helpItem.description }}</p>
							</div>
						</a>
						<a v-else="helpItem.linkExt" :href="helpItem.linkExt" target="_blank" rel="noreferrer" tabindex="1">
							<div class="card">
								<header>
									<MaterialIcon v-if="helpItem.icon" :iconName="helpItem.icon" iconOnly />
									<h3>{{ helpItem.title }}</h3>
								</header>
								<p>{{ helpItem.description }}</p>
							</div>
						</a>
					</div>
				</div>

				<slot name="bottom" />
			</div>
		</main>
	</div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'

export default {
	components: { Navbar },

	computed: {
		data() {
			return this.$page.frontmatter;
		},
	},
}
</script>

<style lang="stylus">
*
	box-sizing border-box

.card
	background-color #f9f6f6
	color $textColor
	border-radius 4px
	box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.2)
	height 10rem
	padding 0.5rem
	text-align center
	user-select none
	width auto
	header
		margin-top 1.25rem
		white-space nowrap
		h3
			display inline-block
			margin 0px
	p
		font-weight 400
	&:hover
		background-color darken(#f9f6f6, 5%)

.column
	float left
	padding 0.5rem
	width 25%
	a:focus
		box-shadow none
		outline none
		.card
			box-shadow 0 0 0 1px #fff, 0 0 0 3px rgba(50,100,150,.4)
			outline none

.row
	margin 0 -5px
	&:after
		content ""
		display table
		clear both

.page
	padding-left 0
	padding-bottom 2rem
	display block

.theme-custom-content
	max-width 75rem
	margin 0 auto
	padding 2rem 2.5rem

@media screen and (max-width: 600px)
	.column
		width 100%
		display block
		margin-bottom 0rem
		margin-top 0rem
</style>
