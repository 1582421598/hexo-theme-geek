var web_style = $("#web_style").val();
var valine_appid = $("#valine_appid").val();
var valine_appKey = $("#valine_appKey").val();

new Valine({
  el: '#vcomments',
  appId: valine_appid,
  appKey: valine_appKey,
  placeholder: '请输入内容...',
  avatar: 'retro',
  // requiredFields: ['nick'],
  emojiCDN: "https://cdn.jsdelivr.net/gh/journey-ad/blog-img/emotion/",
  emojiMaps: {
    "alu_高兴": "alu/01.png",
    "alu_黑线": "alu/02.png",
    "alu_鼓掌": "alu/03.png",
    "alu_不出所料": "alu/04.png",
    "alu_亲亲": "alu/05.png",
    "alu_狂汗": "alu/06.png",
    "alu_献花": "alu/07.png",
    "alu_赞一个": "alu/08.png",
    "alu_击掌": "alu/09.png",
    "alu_脸红": "alu/10.png",
    "alu_得意": "alu/11.png",
    "alu_惊喜": "alu/12.png",
    "alu_想一想": "alu/13.png",
    "alu_蜡烛": "alu/14.png",
    "alu_装大款": "alu/15.png",
    "alu_观察": "alu/16.png",
    "alu_口水": "alu/17.png",
    "alu_吐": "alu/18.png",
    "alu_吐舌": "alu/19.png",
    "alu_吐血倒地": "alu/20.png",
    "alu_不说话": "alu/21.png",
    "alu_不高兴": "alu/22.png",
    "alu_中刀": "alu/23.png",
    "alu_中枪": "alu/24.png",
    "alu_呲牙": "alu/25.png",
    "alu_咽气": "alu/26.png",
    "alu_哭泣": "alu/27.png",
    "alu_喜极而泣": "alu/28.png",
    "alu_喷水": "alu/29.png",
    "alu_中指": "alu/30.png",
    "alu_喷血": "alu/31.png",
    "alu_坐等": "alu/32.png",
    "alu_害羞": "alu/33.png",
    "alu_小眼睛": "alu/34.png",
    "alu_尴尬": "alu/35.png",
    "alu_愤怒": "alu/36.png",
    "alu_扇耳光": "alu/37.png",
    "alu_投降": "alu/38.png",
    "alu_抠鼻": "alu/39.png",
    "alu_抽烟": "alu/40.png",
    "alu_无奈": "alu/41.png",
    "alu_无所谓": "alu/42.png",
    "alu_无语": "alu/43.png",
    "alu_暗地观察": "alu/44.png",
    "alu_期待": "alu/45.png",
    "alu_欢呼": "alu/46.png",
    "alu_汗": "alu/47.png",
    "alu_深思": "alu/48.png",
    "alu_献黄瓜": "alu/49.png",
    "alu_便便": "alu/50.png",
    "alu_内伤": "alu/51.png",
    "alu_皱眉": "alu/52.png",
    "alu_看不见": "alu/53.png",
    "alu_看热闹": "alu/54.png",
    "alu_瞅你": "alu/55.png",
    "alu_肿包": "alu/56.png",
    "alu_邪恶": "alu/57.png",
    "alu_锁眉": "alu/58.png",
    "alu_长草": "alu/59.png",
    "alu_阴暗": "alu/60.png",
    "ac_阿部高和": "acfun_color/01.gif",
    "ac_鼻血": "acfun_color/02.gif",
    "ac_魂": "acfun_color/03.gif",
    "ac_奸笑": "acfun_color/04.gif",
    "ac_空": "acfun_color/05.gif",
    "ac_抠鼻": "acfun_color/06.gif",
    "ac_萌": "acfun_color/07.gif",
    "ac_喵": "acfun_color/08.gif",
    "ac_噗": "acfun_color/09.gif",
    "ac_闪": "acfun_color/10.gif",
    "ac_绅士": "acfun_color/11.gif",
    "ac_衰": "acfun_color/12.gif",
    "ac_委屈": "acfun_color/13.gif",
    "ac_问号": "acfun_color/14.gif",
    "ac_瞎": "acfun_color/15.gif",
    "ac_眼镜": "acfun_color/16.gif",
    "ac_晕": "acfun_color/17.gif",
    "ac_星星眼": "acfun_color/18.gif",
    "ac_汗": "acfun_color/19.gif",
    "ac_凝视": "acfun_color/20.gif",
    "ac_打击": "acfun_color/21.gif",
    "ac_喷": "acfun_color/22.gif",
    "ac_不满": "acfun_color/23.gif",
    "ac_不看": "acfun_color/24.gif",
    "ac_害羞": "acfun_color/25.gif",
    "ac_犹豫": "acfun_color/26.gif",
    "ac_沮丧": "acfun_color/27.gif",
    "ac_加油": "acfun_color/28.gif",
    "ac_赞": "acfun_color/29.gif",
    "ac_冰冻": "acfun_color/30.gif",
    "ac_哭笑不得": "acfun_color/31.gif",
    "ac_吓": "acfun_color/32.gif",
    "ac_嫌弃": "acfun_color/33.gif",
    "ac_不二家": "acfun_color/34.gif",
    "ac_傲娇": "acfun_color/35.gif",
    "ac_大姨妈": "acfun_color/36.gif",
    "ac_偷笑": "acfun_color/37.gif",
    "ac_亲亲": "acfun_color/38.gif",
    "ac_嘲笑": "acfun_color/39.gif",
    "ac_烦": "acfun_color/40.gif",
    "ac_冷笑": "acfun_color/41.gif",
    "ac_怒火": "acfun_color/42.gif",
    "ac_一个思考": "acfun_color/43.gif",
    "ac_崩溃": "acfun_color/44.gif",
    "ac_苍白": "acfun_color/45.gif",
    "ac_大哭": "acfun_color/46.gif",
    "ac_对瓶吹": "acfun_color/47.gif",
    "ac_黑化": "acfun_color/48.gif",
    "ac_晴天霹雳": "acfun_color/49.gif",
    "ac_舔屏": "acfun_color/50.gif",
  }
})

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre').forEach((block) => {
    hljs.highlightBlock(block);
  });
});

function setCookie(key, value) {
  localStorage.setItem(key, value);
}

function getCookie(key) {
  var data = localStorage.getItem(key);
  return data
}

function updateStyle() {
  $('#theme').remove();
  if (getCookie("style") == "white") {
    $("#footer").attr("style", "color: #51525d;");
    $(".flink").attr("style", "color: #51525d;");
    $(".ba").attr("style", "color: #51525d;");
    $("#bodyx").removeClass("bg_black");
    $("#update_style").attr('checked', false);
  } else {
    $("#footer").attr("style", "");
    $(".flink").attr("style", "");
    $(".ba").attr("style", "");
    $("#bodyx").addClass("bg_black");
    $("#update_style").attr('checked', true);
  }
}

if (getCookie("style") == null) {
  setCookie("style", web_style)
  updateStyle();
} else if (getCookie("style") == "white") {
  setCookie("style", "white")
  updateStyle();
} else if (getCookie("style") == "black") {
  setCookie("style", "black")
  updateStyle();
}

$("#update_style").change(function () {
  var style = $("#update_style").is(':checked');
  if (style) {
    setCookie("style", "black")
    updateStyle();
  } else {
    setCookie("style", "white")
    updateStyle();
  }
});

function toggleNightMode(){
  document.getElementById("update_style").checked ^= 1
  $("#update_style").trigger('change')
}

// 文章过时提示
if (/^\/archives\/.+/.test(location.pathname) && pub_date && Date.now() - pub_date >= 90 * 24 * 60 * 60 * 1000) {
  $('.outdated-notify .num').text(Math.floor((Date.now() - pub_date) / (24 * 60 * 60 * 1000)))
  $('.outdated-notify').show()
};

// 文章页后退按钮
$('a.back').click(function () {
  if (history.length > 1) {
    history.go(-1);
  } else {
    location.replace('/')
  }
});

// 返回顶部按钮
(function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return
  }

  var isShow = false, lock = false;
  var $btn = $('.back-to-top');

  $(document).scroll(function () {
    if (lock) return

    if ($(this).scrollTop() >= 1000) {
      if (!isShow) $btn.addClass('load')
      isShow = true
    } else {
      if (isShow) {
        $btn.removeClass('load')
        isShow = false
      }
    }
  })

  $btn.click(function () {
    lock = true
    $btn.addClass('ani-leave')

    $("html, body").animate({ scrollTop: 0 }, 800);

    setTimeout(function () {
      $btn.removeClass('ani-leave').addClass('leaved')
    }, 390)

    setTimeout(function () {
      $btn.addClass('ending')
    }, 120)

    setTimeout(function () {
      $btn.removeClass('load')
    }, 1500);

    setTimeout(function () {
      lock = false
      isShow = false
      $btn.removeClass('leaved ending')
    }, 2000);
  })
})();

// 点击锚链接平滑滚动到视图
$(document).on('click', 'a[href^="#"]', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');
  var $el = $(id);
  if ($el.length > 0) $el[0].scrollIntoView({
    behavior: 'smooth'
  })
});

// 简单粗暴跳转指定评论
(function () {
  var hash = location.hash
  if (hash && hash.startsWith('#')) {
    setTimeout(function () {
      var $el = $(hash);
      if ($el.length > 0) $el[0].scrollIntoView({
        behavior: 'smooth'
      })
    }, 1500);
  }
})();