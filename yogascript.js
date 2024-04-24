// STRETCH & YOGA
// This event listener is attached to the element with the id "thumbnail".
// When the element is clicked, the outerHTML of the element is replaced with an iframe element that embeds a YouTube video.

document.getElementById('thumbnail').addEventListener('click', function() {
    this.outerHTML = '<iframe width="800" height="450" src="https://www.youtube.com/embed/tAUf7aajBWE?si=7VUerA02gs_yHHD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
});

// This code selects all elements with the class "btn" and adds an event listener to each one.
// When a button is clicked, the window location is changed to the value of the "data-url" attribute of the button.
document.querySelectorAll('.btn').forEach(button => {
button.addEventListener('click', function() {
    window.location.href = this.dataset.url;
});
});