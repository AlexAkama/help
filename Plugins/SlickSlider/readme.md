# SLICK SLIDER

## Source
https://kenwheeler.github.io/slick/

## USING
### Install
`npm install slick-carousel --save-dev`  
* add to project JS и SCSS

### JS
```JS
$('.multiple-items').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});
```

### CSS
```CSS
.slick-list {}    // slider box

.slick-dots {}    // element buttons
.slick-active {}  // active element button
.slick-arrow {}   // control buttons

.slick-prev {}    // prev button 
.slick-next {}    // next button
```