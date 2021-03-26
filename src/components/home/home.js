import "./home.scss";

document.body.innerHTML =  `
    <div class="app-home">
        Hello from Home

        <button type="button" id="big" class="btn btn-primary">Load Big Component</button>
    </div>
`;

document.getElementById("big").addEventListener("click", () => {
    import("../big/big.js");
});
