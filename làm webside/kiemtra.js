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
