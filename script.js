// Default image on load
if (window.innerWidth < 800) {
  document.getElementsByTagName("img")[0].src = "images/image-product-mobile.jpg";
} else {
  document.getElementsByTagName("img")[0].src = "images/image-product-desktop.jpg";
}

// Image on changing viewport width
function changeImg() {
  if (window.innerWidth >= 800) {
    document.getElementsByTagName('img')[0].src = "images/image-product-desktop.jpg";
  } else {
    document.getElementsByTagName('img')[0].src = "images/image-product-mobile.jpg";
  }
}

// Change main image based on viewport width
window.addEventListener('resize', changeImg);
