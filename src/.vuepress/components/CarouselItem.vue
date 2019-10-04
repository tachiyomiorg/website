<template>
	<div class="carousel-cell" v-bind:id="name">
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
.carousel-cell {
	width: 100%;
	margin-right: 16px;
	margin-left: 16px;
}
</style>
