
---

#### Container for an Enlarged Image  

To show larger images, the Magnifier script adds a dedicated `<div>` container to the HTML page like this:  
```html
<div id="x2G_outerBox">
  <div id="x2G_closeBut">&times;</div>
  <div id="x2G_captions"></div>
  <img id="x2G_expImage">
</div>
```

---


#### Style Sheet  

The `magnifier.js` script adds a style sheet that describes the appearance of the enlarged image and accompanying elements.  
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/2G-Lab/2G-Image-Magnifier/src/magnifier.css">
```

&nbsp;  
As an alternative, you can use the `magnifier.s.js` script that does not add the style sheet to the page.  

Thus, the style sheet should be be added manually.  
```html
<link rel="stylesheet" href="../src/magnifier.css">
<script src="../src/magnifier.s.js"></script>
```

This variant is useful for local testing purposes.  

---
