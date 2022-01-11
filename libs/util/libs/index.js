let validateForm = {
    /**
     * 描述：检测邮箱格式是否正确
     * @parmas1 检测所需文本
     * return bool
     */
    checkEmail(textValue = " ") {
        let result = false;
        let text = textValue.replace(/(^\s*)|(\s*$)/g, "");  // 去除左右空格
        let reg = /^([a-zA-Z]|[0-9]|_)+@([0-9]|[a-zA-Z])+.com$/; // 检测大陆常见邮箱
        result = reg.test(text);
        return result;
    },
    /**
     * 描述：检测密码格式至少有length位以上，其中密码必须包含一个数字、一个字母、一个特殊符号，不能有空格，中文字符。
     * @parmas1 检测所需文本 @parmas2 设置密码最短长度。
     * return bool
     */
    checkPassword(textValue = " ", length = 0) {
        let text = textValue.replace(/(^\s*)|(\s*$)/g, "");  // 去除左右空格

        // 查看长度是否小于多少位
        if (text.length < length) return false;

        // 查看是否有数字
        let reg = /\d{1,}/g;
        if (reg.test(text) == false) return false;

        // 查看是否有字母
        reg = /[a-zA-Z]{1,}/g;
        if (reg.test(text) == false) return false;

        // 查看是否有空格
        reg = /\s/g;
        if (reg.test(text)) return false;

        // 查看是否有中文
        reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/g;
        if (reg.test(text)) return false;

        // 查看是否有特俗符合
        reg = /[~!@#$%^&*()_+/-{}'"]{1,}/g;
        if (reg.test(text) == false) return false;

        return true;
    },
    /**
     * 描述：检测用户格式至少有length位以上，其中用户名不能有空格，中文字符。
     * @parmas1 检测所需文本 @parmas2 设置密码最短长度。
     * return bool
     */
    checkUserName(textValue = " ", length = 0) {
        let text = textValue.replace(/(^\s*)|(\s*$)/g, "");  // 去除左右空格

        // 查看长度是否小于多少位
        if (text.length < length) return false;

        // 查看是否有空格
        reg = /\s/g;
        if (reg.test(text)) return false;

        // 查看是否有中文
        reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/g;
        if (reg.test(text)) return false;

        return true;
    }
};
module.exports =  validateForm;