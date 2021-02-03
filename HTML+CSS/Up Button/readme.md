

```JS
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1200) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });

    $('.top-btn').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
```
