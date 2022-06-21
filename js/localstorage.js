if (document.getElementById('send_form') != null) {
    document.getElementById('send_form').onclick = function() {
        let inputName = document.getElementById("name");
        let inputSurname = document.getElementById("surname");
        localStorage.setItem("surname", inputSurname.value);
        localStorage.setItem("name", inputName.value);
        let inputEmail = document.getElementById("email");
        localStorage.setItem("email", inputEmail.value);
        let inputTarget = document.getElementById("target");
        localStorage.setItem("target", inputTarget.value);
        let inputIllnes = document.getElementById("illnes");
        localStorage.setItem("illnes", inputIllnes.value);
        let inputStudies = document.getElementById("studies");
        localStorage.setItem("studies", inputStudies.value);
        let inputInfo = document.getElementById("info");
        localStorage.setItem("info", inputInfo.value);
        console.log('srgfdg');
    }
}