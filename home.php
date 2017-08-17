<?php 

// FILE USED TO CONNECT TO DB
require("config.php");
$dbconn=mysqli_connect($host,$username,$password,$db_name);


   if(isset($_POST['action'])){
       
 $content=mysqli_real_escape_string($dbconn,$_POST['content']);
       //UPDATE DATA WITH CONTENT FROM AJAX REQUEST

   $sql= "UPDATE `page` SET `donnepage`='".$content."' ";

   $sqlc=  mysqli_query($dbconn,$sql);
   
   }

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>KEditor </title>
        

        
        
        
         <meta name="viewport" content="width=device-width, initial-scale=1">
        
         
     
        <link rel="stylesheet" type="text/css" href="plugins/bootstrap-3.3.6/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="plugins/font-awesome-4.5.0/css/font-awesome.min.css" />
        <!-- Start of KEditor styles -->
      
        <link rel="stylesheet" type="text/css" href="css/style.css" />
       
        <!-- End of KEditor styles -->
     
        <script type="text/javascript" src="plugins/jquery-1.11.3/jquery-1.11.3.min.js"></script>
        <script type="text/javascript" src="plugins/bootstrap-3.3.6/js/bootstrap.min.js"></script>
        
        <script src="plugins/jquery-ui-1.11.4/jquery-ui.min.js"></script>
       
        
  
    </head>

    <body style="margin-top:50px;
      margin-left:70px;
      margin-bottom:-60px;
      margin-right:50px">
       
      
       
       
       
        <textarea class="ckeditor" name="editor"></textarea>

        <div id="content-area">
            
            
             <?php 
        
        $sql1="SELECT donnepage FROM page ";
         $query1=mysqli_query($dbconn,$sql1);
        $row=mysqli_fetch_assoc($query1);
        echo $row['donnepage'];
     
        
        
        ?>
        
        </div>
        
        
      

     
    </body>
</html>
