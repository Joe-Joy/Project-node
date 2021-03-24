let id = "",
    usernames = 'as',
    mobile_numbers = '22222222',
    mail_ids = ''

    if (id) {
        if (usernames != "" && mail_ids != "" && mobile_numbers != "") {
         console.log("three inputs here")
        }else if(usernames != "" && mail_ids != ""){
          console.log("visible username, mail_ids")
        }else if(usernames != "" && mobile_numbers != ""){
          console.log("visible username, mobile_numbers")
        }else if(mail_ids != "" && mobile_numbers != ""){
          console.log("visible mail_ids,mobile numbers")
        }
        else {
           console.log("input are missing")
        }
      } else { 
        console.log("id is missing")
      }