<template>
	<span>
		<p>Upload indications</p>
		<ElUpload ref="upload" v-loading="loading" class="upload-backup" drag action="#" :http-request="uploadRequest">
			<i class="el-icon-upload"></i>
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
	},
	data() {
		return {};
	},

	methods: {
		uploadRequest(data) {

			// Call the parent uploadRequestCallback function
			//this.$props.uploadRequestCallback(data);
			console.log("Uploading")
			console.log(data)

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
