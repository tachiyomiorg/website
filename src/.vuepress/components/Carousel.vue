<template>
	<div class="carousel-root">
		<div class="carousel" v-bind:id="name">
			<slot />
		</div>
		<script>
			var config = {{ config }};
			new Flickity("#{{ name }}", config)
		</script>
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
				adaptiveHeight: true,
				wrapAround: true,
				pageDots: false
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
