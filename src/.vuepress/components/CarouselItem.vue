<template>
	<div class="slide" :id="name">
		<slot />
	</div>
</template>

<script>
export default {
	name: "carousel-item",
	props: {
		name: {
			type: String,
			default: "carousel-cell"
		}
	}
}
</script>

<style>
.slide {
	align-items: center;
	display: flex;
	justify-content: center;
}
</style>
