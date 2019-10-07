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
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://cdn.materialdesignicons.com/4.4.95/css/materialdesignicons.min.css");

.material-holder {
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
