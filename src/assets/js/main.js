function preloader() {
  var prelaoder = document.getElementById('preloader');
  if (prelaoder) {
    setTimeout(function () {
      prelaoder.remove();
    }, 300);
  }
}
function playVideos() {
  $(document).on('click', '.training__video:not(.__playing)', function (e) {

    if ($(window).width() > 992) {
      $(this).addClass('__playing');
      var __this = $(this);
      $('.backdrop').fadeIn('fast', function () {
        changeSrc(__this);
      });
    }

  });
  $('.backdrop, .close').click(function (e) {
    e.stopPropagation();
    closeActiveVideo();
  });
  $(document).on('keyup', function (e) {
    if (e.keyCode === 27) {
      closeActiveVideo();
    }
  })

  function closeActiveVideo() {
    var activeVideo = $('.training__video.__playing');
    if (activeVideo.length) {
      activeVideo.removeClass('__playing');
      changeSrc(activeVideo);
    }
    $('.backdrop').fadeOut('fast');
  }

  function changeSrc(videoCont) {
    var iframe = videoCont.find('iframe');
    if (iframe.length) {
      var src = iframe[0].src;
      var url = new URL(src);
      var autoplay = +url.searchParams.get('autoplay');
      autoplay = autoplay ? 0 : 1;
      url.searchParams.set('autoplay', autoplay);
      iframe[0].src = url.href;
    }
  }



}

function closeOnOutsideClick($trigger, $menu) {
  $(document).on("click", function (event) {
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $menu.slideUp("fast");
    }
  });
}

function toggleDropdown() {
  $('.main-nav__item__dropdown').each(function () {
    $(this).parents('li').find('>a').click(function (e) {
      e.preventDefault();
      $(this).toggleClass('active').parent().toggleClass('active');
    });
  });
  $('.__dropdown').click(function (e) {
    e.stopPropagation();
  });
  $(document).on('click', function (e) {
    var target = $(e.target);
    var __dropdown = $('.__dropdown');
    var __dropdownLink = __dropdown.prev('.__dropdown-link');
    if (!target.is(__dropdown) && !target.is(__dropdownLink)) {
      __dropdownLink.removeClass('active').parent().removeClass('active');
    }
  });
}

function toggleSecondaryNav() {
  $('.secondary-nav-toggle').on('click', function (e) {
    e.preventDefault();
    $('.secondary-nav').toggleClass('active');
    $('.secondary-nav .glyphicon').toggleClass(['glyphicon-chevron-up-custom', 'glyphicon-chevron-down-custom']);
  })
}


function toggleMainNav() {
  $('.main-nav-hamburger').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('is-active');
    $('.header__inner-right').toggleClass('active');
    $('body').toggleClass('overflow-hidden');
  })
}

function initFracturedTextHover() {
  $(document).on('mouseenter', '.fractured', function () {
    if (!$(this).is('.text-has-fractured')) {
      initFracturedText($(this));
    }
    TweenMax.staggerTo($(this).find("span span"), 0.2, {
      x: 5,
      y: 5,
      autoAlpha: 0
    }, 0.05)
    TweenMax.staggerTo($(this).find("span span"), 0, {
      x: -5,
      y: -5,
      autoAlpha: 0,
      delay: 0.2,
    }, 0.05)
    TweenMax.staggerTo($(this).find("span span"), 0.2, {
      x: 0,
      y: 0,
      autoAlpha: 1,
      delay: 0.2
    }, 0.05);
  });


}

function initFracturedText(el) {
  el.addClass('text-has-fractured');
  var text = el.text();
  el.html("<span>" + splitString(text) + "</span>");
}

function iniTopSlider() {
  if (!document.getElementById('ninja-slider')) {
    return;
  }

  var sliderDescs = $('.top-block__slides-desc li');

  var nsOptions = {
    sliderId: "ninja-slider",
    // tslint:disable-next-line:comment-format
    transitionType: "kenburns 1.2", //"fade", "slide", "zoom", "kenburns 1.2" or "none"
    autoAdvance: true,
    delay: "default",
    transitionSpeed: 700,
    aspectRatio: "2:1",
    initSliderByCallingInitFunc: false,
    shuffle: false,
    startSlideIndex: 0, // 0-based
    navigateByTap: true,
    pauseOnHover: true,
    keyboardNav: true,
    before: function (currentIdx, nextIdx, manual) {
      sliderDescs[currentIdx].classList.remove('active');
      sliderDescs[nextIdx].classList.add('active');
    }
  };
  new NinjaSlider(nsOptions);
}


function splitString(str) {
  var arr = str.split("");
  var title = "";
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i];
    if (key === " ") {
      title += "<span style='margin: 0 3px'></span>";
    } else {
      title += "<span>" + key + "</span>";
    }
  }
  return title;
}



function topBlockBackgoundParallaxInit() {
  var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

  function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.top-block__bg').css({
      '-webit-transform': translate,
      '-moz-transform': translate,
      'transform': translate
    });
    window.requestAnimationFrame(moveBackground);
  }

  $(window).on('mousemove click', function (e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;

  });

  moveBackground();
}

function checkVisibilityInit() {
  function reuse() {
    var checkVisibilityElements = document.querySelectorAll('.check-visibility');
    for (var i = 0; i < checkVisibilityElements.length; i++) {
      var el = checkVisibilityElements[i];
      if (checkVisible(el)) {
        el.classList.add('visible');
      }
    }
  }
  reuse();
  window.addEventListener('scroll', function () {
    reuse();
  })
}

function fixedHeader() {
  var el = document.querySelector('.header');
  var isFixed = false;
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var offsetTop = el.offsetHeight;
    var scrollTop = window.pageYOffset;

    if (offsetTop <= scrollTop) {
      el.classList.add('fixed');
      if (lastScrollTop > scrollTop) {
        el.classList.add("fixed-show");
      } else {
        el.classList.remove("fixed-show");
      }
      isFixed = true;
    } else if (isFixed && offsetTop > scrollTop) {
      el.classList.remove('fixed');
      el.classList.remove("fixed-show");
      isFixed = false;
    }

    lastScrollTop = scrollTop;
  });
}

function addActiveClassToNav() {
  var url = window.location.pathname;
  $('.main-nav, .secondary-nav').find('a').each(function () {
    // console.log($(this).attr('href'), url);
    if (url.includes($(this).attr('href'))) {
      $(this).addClass('active').parent().addClass('active');
    }
  });

  var secondaryNavParentId = $('.secondary-nav ul').data('parent');
  if (secondaryNavParentId) {
    var secondaryNavParentLink = document.querySelector(secondaryNavParentId);
    if (secondaryNavParentLink) {
      secondaryNavParentLink.classList.add('active');
    }
  }

}

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  }
}

function langSwitch() {
  $(document).on('click', '.lang-switch__active', function (e) {
    e.preventDefault();
    $('.lang-switch').find('ul').toggleClass('active');
  });
  $('.lang-switch ul').click(function (e) {
    e.stopPropagation();
  })
  $(document).on('click', function (e) {
    var target = $(e.target);
    var __dropdown = $('.lang-switch ul');
    var __dropdownLink = __dropdown.prev('a');
    if (!target.is(__dropdown) && !target.is(__dropdownLink) && !target.parents().is(__dropdownLink)) {
      __dropdownLink.removeClass('active').next().removeClass('active');
    }
  });
  $('.lang-switch ul a').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var isActive = $(this).parent().is('.active');
    var lang = $(this).attr('href');
    $('.lang-switch ul').removeClass('active');
  });


}

function initMultilanguage() {

  var translateAbleEls = document.querySelectorAll('[data-translateable]');
  var currentLang = localStorage.getItem('PBL_LANG');



  if (currentLang) {
    var activeLang = $('.lang-switch').find('a[href="' + currentLang + '"]');
    if (activeLang.length) {
      $('.lang-switch').find('li').not(activeLang.parent()).removeClass('active');
      activeLang.parent().addClass('active');
      $('.lang-switch__active').html(activeLang.find('svg').clone());
    }
    $.ajax({
      url: '/language/' + currentLang + '.json',
      dataType: 'json', async: false, dataType: 'json',
      success: function (lang) {

        for (var i = 0; i < translateAbleEls.length; i++) {
          var el = translateAbleEls[i];
          var translate = lang[el.textContent];
          if (translate) {
            el.textContent = translate;
          }
        }

      }
    });
  }

}


function checkVisible(elm, evalType) {
  evalType = evalType || "visible";
  var vpH = window.innerHeight,
    st = window.pageYOffset,
    y = offset(elm).top,
    elementHeight = elm.offsetHeight;

  // console.log(vpH, st, y, elementHeight);

  if (evalType === "visible") {
    return ((y < (vpH + st)) && (y > (st - elementHeight)));
  }
  if (evalType === "above") return ((y < (vpH + st)));
}


function scrollToTop() {
  $('html, body').stop().animate({
    scrollTop: 0
  }, 200, 'swing')
}