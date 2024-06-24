let isStatus = false;

function sendMail(event) {
    let params = {
        email: document.querySelector("#email").value,
        fullname: document.querySelector("#fullname").value,
        phone: document.querySelector("#phone").value,
        for: document.querySelector("#for").value,
        message: document.querySelector("#message").value,
    };

    emailjs
        .send("service_qsf767p", "template_97wkq6l", params)
        .then((res) => (isStatus = res.status));
}

let modal = document.querySelector(".modal_popup");

if (isStatus) {
    // console.log(isStatus);
    alert("asd");
} else {
    console.log(isStatus);
}

// isStatus &&  modal.style.display"none"
// console.log(isStatus);

// document.querySelector(".toggler").addEventListener("click", () => {
//   document.querySelector(".responsive_profile_section").style.cssText =
//     "top:0px";
// });