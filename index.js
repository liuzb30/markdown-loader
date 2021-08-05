const marked = require('marked')
const loaderUtil = require('loader-utils')

module.exports = (markdown)=>{
    const options = loaderUtil.getOptions(this)
    marked.setOptions(options)
    return marked(markdown)
}