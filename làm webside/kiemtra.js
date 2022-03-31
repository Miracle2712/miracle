function validate() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;

    if(u== "admin"&& p== "123") {
        alert("Bạn đã đăng nhập thành công!");

        window.location = "website.html"
    }
    else{
        alert("Đăng nhập không thành công")
    }
}

function dangki() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    let q = document.getElementById("password-repeat").value;
    if(u == "admin"&& p == "123" && q == "123") {
        alert("Bạn đã đăng kí thành công!");

        window.location = "index.html"
    }
}
