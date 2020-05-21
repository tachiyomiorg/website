<template>
	<i v-if="iconOnly" :class="name" class="material-icons">{{ iconName }}</i>
	<div v-else :class="name" class="material-holder">
		<i class="material-icons">{{ iconName }}</i>
	</div>
</template>

<script>
/**
 * For material icon references use https://material.io/resources/icons/
 * Code example: <MaterialIcon iconName="android" />
 */
export default {
	props: {
		iconOnly: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
			default: "",
		},
		iconName: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="stylus">
.material-holder
	color #476582
	margin 0
	font-size 0.85em
	border-radius 3px
	display inline

.material-icons
	font-family "Material Icons"
	font-size 1.35em
	font-style normal
	position relative
	top 0.2rem
	font-weight normal
	line-height 1
	letter-spacing normal
	text-transform none
	display inline-block
	white-space nowrap
	word-wrap normal
	direction ltr
	font-feature-settings "liga"
	-webkit-font-smoothing antialiased
</style>
