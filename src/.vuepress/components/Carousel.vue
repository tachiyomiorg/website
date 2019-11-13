<template>
	<div class="carousel-root">
		<agile class="carousel" :options="config" v-bind:id="name">
			<slot />
		</agile>
	</div>
</template>

<script>
export default {
	props: {
		name: {
		type: String,
		required: true
	},
	config: {
		type: Object,
		default: function () {
			return {
				navButtons: false,
				centerMode: true,
				infinite: true,
			}
		}
	}
	}
}
</script>

<style>
.carousel {
	background: #F0F4F8;
	border-radius: 1em;
}

.flickity-button {
	position: absolute;
	background: hsla(0,0%,100%,.75);
	border: none;
	color: rgba(44, 62, 80);
}
</style>
