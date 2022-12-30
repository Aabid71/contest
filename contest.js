function submitForm() {
    console.log("hi");
    let fUll_name = document.getElementById('full-name').value;
    let last_name = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let Reason_contacting  = document.getElementById('Reason-contacting').value;
    console.log(fUll_name, last_name, email,Reason_contacting);
    if (fUll_name != null && last_name != null && email != null && Reason_contacting != false) {
        // console.log(fUll_name, last_name, email);
        // if (fUll_name != null && last_name != null && email != null) {
         alert("success")
    } else {
        alert("All fields are required!")
    }
}
