function Chief() {
    let row1 = document.getElementById('row1')
    let valid = document.getElementById("valid");

    row1.classList.add("hidden")
    valid.classList.remove("hidden")
}

function Meet() {
    let image = document.getElementById("image-1");
    let iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/_GuOjXYl5ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    let toadd = document.getElementById("rcol")
    image.classList.add("hidden");
    toadd.innerHTML = iframe;
}

function Increment() {
    let initial = parseInt(document.getElementById("number").textContent);
    let nb = document.getElementById("number");
    nb.textContent = parseInt(initial+1) + ' '
}