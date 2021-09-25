<template>
    <el-image
	:src="src"
	fit="cover"
	alt="cover"
	class="manga-cover"
    lazy>
        <div slot="error" class="failed">
            <i class="el-icon-picture-outline"></i>
        </div>
	</el-image>
</template>

<script>
export default {
	props: {
		// The url of the cover
        src: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="stylus">
.manga-cover
	height 133px
	width 93.5px
	border-radius 10%
.failed
	height 100%
	width 100%
	background #f0f4f8
	display inline-flex
	align-items center
	text-align center
	i
		width 100%

.yuu-theme-dark
	.failed
		background #2a2a2a  
</style>
