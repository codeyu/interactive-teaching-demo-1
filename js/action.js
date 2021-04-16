function runChecks() {
    let r = '6e089d1f42e7b84fde07ded0d5c7c7f1'
    let str = ''
    $("#an li").each((id, elem) => {
      str += elem.innerText
    });
    let b = md5(str) == r
    var $textAndPic = $('<div style="text-align: center;"></div>');
    if (b) {
        $textAndPic.append('<img src="./img/good.png" />');
        BootstrapDialog.show({
            title: '恭喜你，答对了:)',
            message: $textAndPic,
            buttons: [{
                label: 'OK',
                action: function(dialogRef){
                    dialogRef.close();
                }
            }]
        });
    }
    else {
      $textAndPic.append('<img src="./img/goon.png" />');
        BootstrapDialog.show({
            title: '很遗憾，步骤错误，请重试:(',
            message: $textAndPic,
            buttons: [{
                label: '重试',
                action: function(dialogRef){
                    dialogRef.close();
                }
            }]
        });
    }
  }
