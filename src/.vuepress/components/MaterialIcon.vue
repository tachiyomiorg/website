<template>
	<div :class="name" class="material-holder">
		<i v-if="legacy" :class="iconName" class="material-legacy-icons mdi"></i>
		<i v-else class="material-icons">{{ iconName }}</i>
	</div>
</template>

<script>
/** 
 * For material icon references use https://material.io/resources/icons/
 * Code example: <MaterialIcon icon-name="android" />
 * 
 * For material icon references use http://materialdesignicons.com/
 * Code example: <MaterialIcon icon-name="mdi-glasses" legacy />
*/
export default {
	props: {
		legacy: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			default: ""
		},
		iconName: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
.material-holder {
	font-family: 'Material Design Icons', 'Material Icons', sans-serif;
	color: #476582;
	margin: 0;
	font-size: 0.85em;
	border-radius: 3px;
	display: inline;
}

.material-icons {
	font-size: 1.35em;
	position: relative;
	top: 0.2rem;
}

.material-legacy-icons {
	font-size: 1.35em;
}
</style>
