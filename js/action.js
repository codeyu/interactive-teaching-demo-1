function runChecks() {
    let r = '6e089d1f42e7b84fde07ded0d5c7c7f1'
    let str = ''
    $("#an li").each((id, elem) => {
      str += elem.innerText
    });
    let b = md5(str) == r
    if (b) {
      window.alert('恭喜你，答对了:)')
    }
    else {
      window.alert('很遗憾，步骤错误，请重试:(')
    }
  }