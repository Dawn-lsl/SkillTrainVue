<template>
  <div class="videocontent">
    <p>{{ resourceName }}</p>
    <vue3VideoPlay
      ref="videoRef"
      width="1000px"
      height="550px"
      :src="options.src"
      :type="options.type"
      preload="auto"
      :auto-play="false"
    />
  </div>
</template>
<script>

export default {
  props: {
    resourceURL: {
      type: String,
      required: false,
      default: ''
    },
    dataId: {
      type: String,
      required: true,
      default: ''
    },
    resourceName: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      options: {
        src: '', // 视频源
        type: '' // 视频类型
      }
    }
  },
  watch: {
    dataId: {
      immediate: true,
      handler (val) {
        if (!val) {
          if (this.$refs.videoRef) {
            this.$refs.videoRef.ended && this.$refs.videoRef.ended()
          }
        }
        this.options.type = 'video/mp4'
        this.options.src = this.resourceURL
      }
    }
  },
  mounted () {
    this.options.type = 'video/mp4'
    this.options.src = this.resourceURL
  }
}

</script>
<style lang="scss" scoped>
.videocontent {
  position: relative;
  width: calc(100% - 40px);
  p {
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 10px;
    left: 20px;
    display: block;
    width: 100%;
    z-index: 999;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(255 255 255 / 75%);
  }
}
</style>
