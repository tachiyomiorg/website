<template>
	<span>
		<ElUpload ref="upload" v-loading="loading" class="upload-backup" drag action="#" :http-request="uploadRequest">
			<i class="el-icon-upload"></i>
			<div class="el-upload__text">
				Drop backup here or
				<em>click to upload</em>
			</div>
			<template #tip>
				<div class="el-upload__tip">
					Upload a Tachiyomi
					<code>.proto.gz</code>
					or
					<br />
					a Paperback
					<code>.json</code>
					backup
				</div>
			</template>
		</ElUpload>
	</span>
</template>

<script>
export default {
	props: {
		loading: {
			type: Boolean,
			default: false,
		},
		// Function that will be called when the user upload a backup
		uploadRequestCallback: {
			type: Function,
			required: true,
		},
	},
	data() {
		return {};
	},

	methods: {
		uploadRequest(data) {

			// Call the parent uploadRequestCallback function
			this.$props.uploadRequestCallback(data);

			// Remove the file from the upload list
			this.$refs.upload.clearFiles();
		},
	},
};
</script>

<style scoped lang="stylus">
.el-upload__tip
    line-height 2
.upload-backup
	text-align center
.el-upload-dragger
	background-color #fbfdff
	border 1.2px dashed #d9d9d9
	// Prevent the component from being to large
	width unset
	padding-left 4rem
	padding-right 4rem
</style>
