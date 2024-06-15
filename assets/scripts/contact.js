function sendMail(contactForm) {
    emailjs.send("gmail", "template_8ypnv2y", {
            "from-name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error)
            })

}