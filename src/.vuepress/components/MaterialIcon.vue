<template>
	<i v-if="iconOnly" :class="name" class="material-icons">{{ icon }}</i>
	<div v-else :class="name" class="material-holder">
		<i class="material-icons">{{ icon }}</i>
	</div>
</template>

<script>
/**
 * For material icon references use https://material.io/resources/icons/
 * Code example: <MaterialIcon icon="android" />
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
		icon: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss">
$material-design-icons-font-directory-path: "~material-design-icons-iconfont/dist/fonts/";
@import "~material-design-icons-iconfont/src/material-design-icons";
</style>

<style lang="stylus">
.material-holder
	color #476582
	margin 0
	font-size 0.85em
	border-radius 3px
	display inline

.material-icons
	font-size 1.35em
	position relative
	top 0.2rem
</style>
