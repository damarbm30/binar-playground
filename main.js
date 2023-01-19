var tutorial = document.getElementById("app");
tutorial.innerText = "Tutorial Javascript";
tutorial.style.backgroundColor = "aqua";
tutorial.style.padding = "4rem";

var judul = document.createElement("h1");
judul.textContent = "Belajar Javascript";
document.body.append(judul);

var h2 = document.getElementById("judul_2");
setTimeout(() => {
  h2.remove();
}, 5000);
