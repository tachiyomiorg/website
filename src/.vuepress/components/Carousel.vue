<template>
	<Agile :id="name" :options="config">
		<slot />
		<template slot="prevButton">
			<MaterialIcon icon="navigate_next" />
		</template>
		<template slot="nextButton">
			<MaterialIcon icon="navigate_next" />
		</template>
	</Agile>
</template>

<script>
export default {
	name: "Carousel",
	props: {
		name: {
			type: String,
			default: "carousel",
		},
		config: {
			type: Object,
			default() {
				return {
					navButtons: true,
					centerMode: true,
				};
			},
		},
	},
};
</script>

<style>
.agile {
	background: #f0f4f8;
	border-radius: 1em;
}

.agile__nav-button {
	background: hsla(0, 0%, 100%, 0.75);
	border: none;
	color: rgba(44, 62, 80);
	cursor: pointer;
	font-size: 24px;
	height: 50px;
	top: 50%;
	transform: translateY(-50%);
	position: absolute;
	transition-duration: 0.3s;
	width: 50px;
	border-radius: 99em;
}

.agile__nav-button:hover {
	background-color: rgba(0, 0, 0, 0.5);
	opacity: 1;
}

.agile__nav-button--prev {
	left: 10px;
}

.agile__nav-button--prev i {
	transform: rotateZ(180deg);
}

.agile__nav-button--next {
	right: 10px;
}

.agile__dots {
	bottom: 10px;
	left: 50%;
	position: absolute;
	transform: translateX(-50%);
}

.agile__dot {
	margin: 0 10px;
}

.agile__dot button {
	background-color: hsla(0, 0%, 100%, 0.75);
	border: 1px solid hsla(0, 0%, 100%, 0.75);
	border-radius: 50%;
	cursor: pointer;
	display: block;
	height: 10px;
	font-size: 0;
	line-height: 0;
	margin: 0;
	padding: 0;
	transition-duration: 0.3s;
	width: 10px;
}

.agile__dot--current button {
	background-color: rgba(44, 62, 80);
	border-color: rgba(44, 62, 80);
}

.agile__dot button:hover {
	background-color: rgba(44, 62, 80);
	border-color: rgba(44, 62, 80);
}
</style>
