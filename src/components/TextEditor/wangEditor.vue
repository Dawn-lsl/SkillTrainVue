<template>
  <!--
      使用方式
      变量  defaultVal:  编辑时使用的默认值 新增可以不传
            contentHeight: 默认高度 不传为200
            placeholder: 占位符 提示文字
      方法  changeVal(val){ 修改父组件变量为参数 val 实时更新 }
      <TextEditor :default-val="'123'" @changeVal="val=>textEditor=val" />
  -->
  <div ref="wangEditor" class="com-editor" />
</template>
<script>
// 富文本
import Wangeditor from 'wangeditor'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
export default {
  props: {
    defaultVal: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    contentHeight: {
      type: Number,
      default: 200
    },
    noCode: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      editor: null,
      contentHeightH: ''
    }
  },
  mounted () {
    this.contentHeightH = (this.contentHeight > 150 ? this.contentHeight : 150) + 'px'
    this.initEditor()
  },
  beforeDestroy () {
    // 销毁编辑器
    this.editor.destroy()
    this.editor = null
  },
  methods: {
    initEditor () {
      let that = this
      this.$nextTick(() => {
        // 初始化
        this.editor = new Wangeditor(this.$refs.wangEditor)
        // 高度
        this.editor.config.height = 100
        this.editor.config.uploadImgShowBase64 = true
        // 挂载highlight插件
        this.editor.highlight = hljs
        // 不自动获取焦点  循环调用时 获取焦点会报错 warning: addRange(): The given range isn't in document.
        this.editor.config.focus = false
        // 关闭全屏功能
        this.editor.config.showFullScreen = false
        // 关闭网络图片链接功能
        this.editor.config.showLinkImg = false
        // 限制图片大小 1m
        this.editor.config.uploadImgMaxSize = 1 * 1024 * 1024
        // 单次最多上传1张
        this.editor.config.uploadImgMaxLength = 1
        // 提示文字
        this.editor.config.placeholder = this.placeholder
        // 菜单配置
        this.editor.config.menus = [
          // 'head',
          'bold',
          'fontSize',
          // 'fontName',
          'italic',
          'underline',
          'strikeThrough',
          // 'indent',
          // 'lineHeight',
          'foreColor',
          'backColor',
          // 'link',
          'list',
          // 'todo',
          // 'justify',
          'quote',
          // 'emoticon',
          'image',
          // 'video',
          // 'table',
          this.noCode ? '' : 'code',
          'splitLine',
          'undo',
          'redo'
        ]
        // 字体型号配置
        this.editor.config.fontSizes = {
          'x-small': { name: '12px', value: '1' },
          'small': { name: '14px', value: '2' },
          'normal': { name: '16px', value: '3' },
          'large': { name: '18px', value: '4' }
        }
        // 监听变更事件
        this.editor.config.onchange = (newHtml) => {
          that.$emit('changeVal', newHtml, this.editor.txt.text())
          // that.$emit('input', newHtml)  v-model 不好用，原因未知
        }
        this.editor.create()
        // 设置默认值
        let _html = this.defaultVal || ''
        this.editor.txt.html(_html)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.com-editor {
  position: relative;
  line-height: 22px;
  max-width: 720px;
  :deep(.w-e-text-container) {
    height: auto !important;
    border-radius: 0 0 4px 4px;
  }
  :deep(.w-e-text) {
    min-height: v-bind(contentHeightH) !important;
  }
  :deep(.w-e-toolbar) {
    border-radius: 4px 4px 0 0;
  }
}
</style>
