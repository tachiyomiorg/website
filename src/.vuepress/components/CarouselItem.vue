<script>
export default {
	name: "CarouselItem",
	props: {
		name: {
			type: String,
			default: "carousel-cell",
		},
	},
};
</script>

<template>
	<div :id="name" class="slide">
		<slot />
	</div>
</template>

<style>
.slide {
	align-items: center;
	display: flex;
	justify-content: center;
}
</style>
