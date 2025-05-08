function downloadImage(imageElement) {
  const link = document.createElement("a");
  link.href = imageElement.src;
  link.download = "icon.jpg";
  link.click();
}
