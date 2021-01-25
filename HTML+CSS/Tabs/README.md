# TABS
Simple tabs with swipe function.  

Structure of tab informatiom:
* Title in `description-title`,
* Text in `description-text`,
* Picture in `photo`,
* Button in `description-btn`.  

When adding a new `tab-content` block, be sure to add a `header-tab` block.

## Usage
```html
    <div class="content"> 
        <div class="header">
            <div class="header-tab">...</div> // Tab header name
            ...
        </div>
        <div class="tab-content">
            <div class="description">
                <div class="description-title">...</div> // your tab title
                <div class="description-text">...</div> // description text of the current tab
                <div class="description-btn">...</div> // button text
            </div>
            <div class="photo">
                <img src="..." alt=""> // yuor photo
            </div>
            ...
        </div>
    </div>
```