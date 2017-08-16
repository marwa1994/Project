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
        <link rel="stylesheet" type="text/css" href="plugins/bootstrap-3.3.6/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="plugins/font-awesome-4.5.0/css/font-awesome.min.css" />
        <!-- Start of KEditor styles -->
        <link rel="stylesheet" type="text/css" href="dist/css/keditor-1.1.5.min.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link rel="stylesheet" type="text/css" href="dist/css/keditor-components-1.1.5.min.css" />
        <!-- End of KEditor styles -->
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <script type="text/javascript" src="plugins/jquery-1.11.3/jquery-1.11.3.min.js"></script>
        <script type="text/javascript" src="plugins/bootstrap-3.3.6/js/bootstrap.min.js"></script>
        <script type="text/javascript">
            var bsTooltip = $.fn.tooltip;
            var bsButton = $.fn.button;
        </script>
        <script src="plugins/jquery-ui-1.11.4/jquery-ui.min.js"></script>
        <script type="text/javascript">
            $.widget.bridge('uibutton', $.ui.button);
            $.widget.bridge('uitooltip', $.ui.tooltip);
            $.fn.tooltip = bsTooltip;
            $.fn.button = bsButton;
        </script>
        
        <script type="text/javascript" src="plugins/jquery.nicescroll-3.6.6/jquery.nicescroll.min.js"></script>
        <script type="text/javascript" src="plugins/ckeditor-4.5.6/ckeditor.js"></script>
        <script type="text/javascript" src="plugins/ckeditor-4.5.6/adapters/jquery.js"></script>
        <!-- Start of KEditor scripts -->
        <script type="text/javascript" src="dist/js/keditor-1.1.5.min.js"></script>
        <script type="text/javascript" src="dist/js/keditor-components-1.1.5.min.js"></script>
        <!-- End of KEditor scripts -->
    </head>

    <body>
       
       <div class="btn btn-lg btn-info" id="save">save</div>

        <div id="content-area">
            
            
             <?php 
        
        $sql1="SELECT donnepage FROM page ";
         $query1=mysqli_query($dbconn,$sql1);
        $row=mysqli_fetch_assoc($query1);
        echo $row['donnepage'];
     
        
        
        ?>
        </div>
        
        
       

        <script type="text/javascript">
            
            
            $(function(){
              $('#content-area').keditor(); 
              $("#save").click(function(){
                //post data to database
               $.ajax({
                   type:'post',
                   data:{  action:"send-data", 
                         //GET DATA FROM KEDITOR
                           content:$('#content-area').keditor('getContent')}
                      
                   
                         
                        ,
                   success:function(data){
                        
                   console.log(data);
                        },
                    error:function(data){
                       
                       console.log(data);
                   }
                   
                   
                   
               }) ;
            });   
            });
            
            
    
           
        </script>
    </body>
</html>
