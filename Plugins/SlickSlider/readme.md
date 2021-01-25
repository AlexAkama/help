# SLICK SLIDER

## Source
https://kenwheeler.github.io/slick/

## USING
### Install
`npm install slick-carousel --save-dev`  
* add to project JS и SCSS

### JS
```
$('.multiple-items').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});
```

### CSS
```
.slick-list {}    // slider box

.slick-arrow {}   // control buttons

.slick-prev {}    // prev button 

.slick-next {}    // next button

.slick-dots {}    // element buttons

.slick-active {}  // active element button
```