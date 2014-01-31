<?php
        if(isset($_POST['username']) && isset($_POST['password'])) {
                if($_POST['username'] == 'susse' && $_POST['password'] == 'susse') {
                        //go to location
                		header('Location: dashboard.html');
                }
                else {
                        $result = "Sorry, try again";
                }
        }
?>

<!doctype>
<html>
        <head>
            <meta charset="UTF-8">
    	    <title>Share A Path</title>
    	    <link rel="stylesheet" href="style.css" type="text/css">
    	    <link href='http://fonts.googleapis.com/css?family=Gudea:400,400italic,700' rel='stylesheet' type='text/css'>
            <script type="text/javascript" src="js/main.js"></script>
        </head>

        <body>
            <h1 class="loginResult"><?php echo $result; ?></h1>

            <p class="enterTitel"> Share A Path <p>
            <p class="subEnterTitel"> Login to create a path <p>
            <div class="login">
                <div class="position-wrapper">
                    <div class="circle-mask">
                        <div class="inner-circle">
                                <form class="loginForm" method="post" action="index.php">
                                        <input type="text" name="username" placeholder="Username" /><br />
                                        <input type="password" name="password" placeholder="Password" /><br />

                                        <input type="submit" />
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="footerLogo">
            </div>
            <footer class="dashboardFooter">
                <p>&copy;All rights Susse Sønderby</p>
            </footer>


        </body>
</html>