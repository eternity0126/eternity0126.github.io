function func() {
  // console.log('Butterfly.js loaded!');
// 选择所有 mjx-script 元素
const mjxScripts = document.querySelectorAll('mjx-script');
// 遍历每个 mjx-script 元素
mjxScripts.forEach(script => {
  // console.log(script.parentNode.tagName);
  if (script.parentNode.tagName === 'MJX-MSUB') {
    script.style.cssText = 'vertical-align: -0.2em !important';
  }
  else if (script.parentNode.tagName === 'MJX-MUNDEROVER') {
    script.style.cssText = 'vertical-align: -0.3em !important';
  }
  // 选择 mjx-texatom 元素
  script.childNodes.forEach(child => {
    if (child.tagName === 'MJX-TEXATOM' || child.tagName === 'MJX-MI' || child.tagName === 'MJX-MN') {
      // 设置字体大小
      child.style.cssText = 'font-size: 70.7% !important';
    }
  })
});
const mjxUnder = document.querySelectorAll('mjx-under, mjx-over');
mjxUnder.forEach(under => {
  const texAtom = under.querySelector('mjx-texatom') || under.querySelector('mjx-mi') || under.querySelector('mjx-mn');
  if (texAtom) {
    if (texAtom.tagName === 'MJX-TEXATOM') {
      texAtom.style.cssText = 'font-size: 70.7% !important; padding-left: 0.4em';
    }
    else
    {
      texAtom.style.cssText = 'font-size: 70.7% !important';
    }
  }
});
const mjxSub = document.querySelectorAll('mjx-msub, mjx-msup');
mjxSub.forEach(sub => {
  sub.style.cssText = 'font-size: 100% !important';
});
}


// var timesRun = 0;
function clock() {
    // timesRun += 1;
    if (document.querySelector("mjx-script")) {
        func();
        // clearInterval(int);
    }
    // else if (timesRun > 5)
    // {
    //   console.log('MathJax not found!');
    //   clearInterval(int);
    // }
    // else
    // {
    //   console.log('Waiting for MathJax...');
    // }
}

var int = self.setInterval("clock()", 1000);
