<template>
    <span>
        <el-upload
			ref="upload"
			class="upload-backup"
			drag
			action="#"
			:http-request="uploadRequest"
			v-loading="loading"
		>
			<i class="el-icon-upload"></i>
			<div class="el-upload__text">Drop backup here or <em>click to upload</em></div>
			<div class="el-upload__tip" slot="tip">Upload a Tachiyomi <code>.proto.gz</code> or<br/> a Paperback <code>.json</code> backup</div>
		</el-upload>
    </span>
</template>

<script>
export default {
	data() {
		return {
        }
    },
    props: {
        loading: {
			required: false,
		},
		// Function that will be called when the user upload a backup
        uploadRequestCallback: {
            required: true
        }
    },

    methods: {
		uploadRequest(data) {
            console.log(data)

            // Call the parent uploadRequestCallback function
            this.$props.uploadRequestCallback(data)

            // Remove the file from the upload list
			this.$refs.upload.clearFiles()
        }
    }
}
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