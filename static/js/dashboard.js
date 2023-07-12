// Start aside with nav
let profile = document.getElementById("profile");
let assid = document.querySelector("aside");
let close = document.querySelector(".close")

// profile.addEventListener("click" , () => {

//     if (assid.style.position == `absolute`) {
//         console.log("ssdsd")

//         assid.style.cssText = `
//         left: 0;
//         width : 100%;
//         `;
//     }
// });


// close.addEventListener("click" , () => {

//     assid.style.cssText = `
        
//         left: -220px;
//         width : 0;
//         `;
// });





profile.addEventListener("click" , () => {

    assid.style.left = "0";
});


close.onclick = () => {
    assid.style.left = "-100%";
}
// End aside with nav