// import "./styles/bootstrap.scss";
// import "./styles/resets.scss";

document.body.innerHTML =  `
    <button type="button" id="home" class="btn btn-primary">Load Home</button>
    <button type="button" id="about" class="btn btn-secondary">Load About</button>
`;

document.getElementById("home").addEventListener("click", () => {
    import("./components/home/home.js");
});
document.getElementById("about").addEventListener("click", () => {
    import("./components/about/about.js");
});
