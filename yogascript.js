
document.getElementById('thumbnail').addEventListener('click', function() {
    this.outerHTML = '<iframe width="800" height="450" src="https://www.youtube.com/embed/tAUf7aajBWE?si=7VUerA02gs_yHHD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
});

document.querySelectorAll('.btn').forEach(button => {
button.addEventListener('click', function() {
    window.location.href = this.dataset.url;
});
});