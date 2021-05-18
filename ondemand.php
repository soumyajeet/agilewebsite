<?php include "./includes/header.html" ?>



<div class="container bg-light">
    <div class="row">
        <div class="col-md-6 p-4">
            <img class="d-block w-100" src="./images/funnel-template-images/KETOALTERNATIVEINDEX.PNG" alt="Second slide">
        </div>
        <div class="col-md-6 p-4">
            <h2>Order <span class="text-danger">On Demand</span> system:</h2>
            <?php
                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    if (!empty($_POST["fullname"])) {
                        $_POST["fullname"];
                    } else {
                        $nameErr = "Name cannot be blank\n";
                        echo "<span class='text-danger'>".$nameErr."</span><br />";
                    }
                    
                    if (!empty($_POST["emailId"])) {
                        $_POST["emailId"];
                    } else {
                        $emailErr = "Email cannot be blank\n";
                        echo "<span class='text-danger'>".$emailErr."</span><br />";
                    }

                    if (!empty($_POST["niche"])) {
                        $_POST["niche"];
                    } else {
                        $nicheErr = "Please select a niche\n";
                        echo "<span class='text-danger'>".$nicheErr."</span><br />";
                    }

                    if (!empty($_POST["exampleRadios"])) {
                        $_POST["exampleRadios"];
                    } else {
                        $nicheErr = "Please select an option\n";
                        echo "<span class='text-danger'>".$optionErr."</span><br />";
                    }

                   if(!empty($_POST["fullname"]) && !empty($_POST["emailId"]) && !empty($_POST["niche"]) && !empty($_POST["exampleRadios"])) {
                      
                       
                       $to = "support@agileaffiliates.com";
                       $subject = "Some one opted for On Demand";
                       
                       $message = "
                       <html>
                       <head>
                       <title>On demand</title>
                       </head>
                       <body>
                       <p>".$_POST["fullname"]."</p>
                       <p>".$_POST["emailId"]."</p>
                       <p>".$_POST["niche"]."</p>
                       <p>".$_POST["exampleRadios"]."</p>
                       </body>
                       </html>
                       ";
                       
                       // Always set content-type when sending HTML email
                       $headers = "MIME-Version: 1.0" . "\r\n";
                       $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
                       
                       // More headers
                       $headers .= "From: ".$_POST["emailId"]."\r\n";
                       $headers .= 'Cc: info@agileaffiliates.com' . "\r\n";


                       $replyto = $_POST["emailId"];
                       $replysubject = "Agile Affiliates On Demand System Update!";
                       $replymsg = "Please wait when we get back to you within 8 hours with your specific requirement!";
                       $replyheaders = "From: support@agileaffiliates.com";
                       
                       if(mail($to,$subject,$message,$headers)) {
                        mail($replyto, $replysubject, $replymsg, $replyheaders);
                        ?>
                        <h5 class="text-success">Email received! I will contact with you soon.</h5>
                        <?php
                       } else {
                        ?>
                        <h5 class="text-damger">Email send failed</h5>
                        <?php
                       }



                   }
                }    
                
            ?>
            <form method="post">
                <label class="mt-2">Full Name</label>
                <input class="form-control" name="fullname" type="text" id="fullName" value="<?php echo $fullname ?>"/>
                <label class="mt-2">Email</label>
                <input class="form-control" name="emailId" type="email" id="emailId" value="<?php echo $emailid ?>"/>
                <label class="mt-2">Choose Funnel Niche</label>
                <select class="form-select" aria-label="Default select example" name="niche">
                <option value="">Click here</option>
                <option value="<?php echo "health" ?>">Health & Fitness</option>
                <option value="<?php echo "makemoney" ?>">Make money online</option>
                <option value="<?php echo "motivation" ?>">Motivational</option>
                </select>
                
                <div class="form-check p-3">
                <input class="form-check-input" type="radio" name="exampleRadios" value="Hosting plus domain">
                <label class="form-check-label" for="exampleRadios">
                    Hosting + Domain require
                </label>
                </div>

                <div class="form-check p-3">
                <input class="form-check-input" type="radio" name="exampleRadios" value="Hosting only">
                <label class="form-check-label" for="exampleRadios">
                    Hosting requires only
                </label>
                </div>

                <div class="form-check p-3">
                <input class="form-check-input" type="radio" name="exampleRadios" value="Domain only">
                <label class="form-check-label" for="exampleRadios">
                    Domain requires only
                </label>
                </div>

                <div class="form-check p-3">
                <input class="form-check-input" type="radio" name="exampleRadios" value="Funnel only" checked>
                <label class="form-check-label" for="exampleRadios">
                    Sales funnel only
                </label>
                </div>


                

                <input type="submit" class="btn btn-success btn-xlarge mt-2" name="submit" value="Submit">  
            </form>    
        </div>
    </div>
</div>

<?php include "./includes/footer.html" ?>