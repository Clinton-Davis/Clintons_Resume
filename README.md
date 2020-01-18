This is a CV made with HTML CSS and BootStrap

email issue work around:

To get the email to work and not give Error 405 you must:
remove the  Method: post completely 
add return false; in the last line of the sendMail function 
