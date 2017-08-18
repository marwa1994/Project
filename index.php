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
            <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/style.css" />
         <link rel="stylesheet" href="css/font-awesome.min.css">
         
         
         
         
        <link rel="stylesheet" type="text/css" href="plugins/bootstrap-3.3.6/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="plugins/font-awesome-4.5.0/css/font-awesome.min.css" />
        <!-- Start of KEditor styles -->
        <link rel="stylesheet" type="text/css" href="dist/css/keditor-1.1.5.min.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link rel="stylesheet" type="text/css" href="dist/css/keditor-components-1.1.5.min.css" />
       
         
         
          <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
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

    <body style="margin-top:50px;
      margin-left:70px;
      margin-bottom:-60px;
      margin-right:50px">
       
       <div class="btn btn-lg btn-info" id="save" >save</div>
       <a href="home.php"class="btn btn-lg btn-info" id="show" >show</a>
       
       
       
        <textarea class="ckeditor" name="editor"></textarea>

        <div id="content-area">
            
            
             <?php 
        
        $sql1="SELECT donnepage FROM page ";
         $query1=mysqli_query($dbconn,$sql1);
        $row=mysqli_fetch_assoc($query1);
        echo $row['donnepage'];
     
        
        
        ?>
        
        </div>
        
        
      

        <script type="text/javascript">
    
            var sel;
           var optionButton;
            
            
            /*FUNCTION OF COMBOBOX COMPONENT*/
            
       function showCombobox(){

    
    $("#theSelect").change(function(){          
    var value = $("#theSelect option:selected").val();
     var el = $("#check");
     var sel = $("#sel").val();
     var sel2 = $("#sel2").val();
        var opt= $("#opt");
        var opt2= $("#opt").val();
         var maxField = 100; //Input fields increment limitation
    var addButton = $('.opt'); //Add button selector
    var wrapper = $('.field_wrapper'); //Input field wrapper
    var fieldHTML = '<tr><td><input type="text" name="field_name[]" /><a style="text-decoration:none;"  class="remove_button" title="Remove field">x</a></td></tr>'; //New input field html 
    var x = 1; //Initial field counter is 1
   if(value.length == sel.length){
       el.prop( "checked", true );
       el.removeAttr("disabled");
       opt.removeAttr("disabled"); 
       
       
      
         $(addButton).click(function(){ //Once add button is clicked
             
        if(x < maxField){ //Check maximum number of input fields
            x++; //Increment field counter
            $("#categoriesTable").append(fieldHTML); // Add field html
  
            
            
            
         
            
            
                      
           /* $.each(items, function (i, item) {
    $('#mySelect').append($('<option>', { 
        value: item.value,
        text : item.text 
    }));
});
            */
            
            
            
        }
    });
    $(wrapper).on('click', '.remove_button', function(e){ //Once remove button is clicked
        e.preventDefault();
        $(this).parent('p').remove(); //Remove field html
        x--; //Decrement field counter
    });
       
          
   }
           
        
        else{
           el.prop( "checked", false ); 
           (el).prop( "disabled", true );
            //opt.prop( "clicked", false ); 
           //(opt).prop( "disabled", true );
            opt.attr('disabled','disabled')
        }
}); 
    $("#r1").click(function(){
        $("#inp1").remove();
        $("#r1").remove();
    });
    $("#r2").click(function(){
        $("#inp2").remove();
        $("#r2").remove();
    });
    $("#r3").click(function(){
        $("#inp3").remove();
        $("#r3").remove();
    });

           
          
           
           
           
         }
            
            
            
       function saveCombobox(){
            
           var labelcombobox=$("#labeltext") .val();
           console.log("dd"+labelcombobox);
           $("label[for='myalue']").html(labelcombobox);
             var valu = $("#theSelect option:selected").val();
           if(valu=="Multiselect"){
               console.log("dddd");
             $("#combobox") .attr("multiple","multiple");   
           }
           var valu1 = $("#inp1").val();
           var valu2 = $("#inp2").val();
           var valu3 = $("#inp3").val();
           console.log("fff"+ valu1 );
           console.log("CC"+ valu2 );
           console.log("VV"+ valu3 );
           if(valu1.length!==0){
               $('#combobox').append($('<option>', {
                 value: valu1,
                text: valu1
                                                   }));
               
           }
            if(valu2.length!==0){
                
                $('#combobox').append($('<option>', {
                 value: valu2,
                text: valu2
                                                   }));
            }
            if(valu3.length!==0){
                
                $('#combobox').append($('<option>', {
                 value: valu3,
                text: valu3
                                                   }));
            }
           
            var rows = [];
    $("#categoriesTable tr").each(function()   {
        if ( $('td',this).length>0) { // exclude header row
            var $td = $('td',this);
            rows.push({                
                label: $td.eq(0).find('input').val(),
                    
            });
        }
     
    });
           
           
           
           $(rows).each(function(index,element) {
       
       $('#combobox').append(
           $('<option>', { 
        value: element.label,
        text : element.label 
    }
                              ));
           
                });
           
 var classcombobox=   $("#classcombobox").val();
           $('#combobox').addClass(classcombobox);
  $('#mod').css("display","none");
                
            
            
            
        }    
            
       function hideComboboxModal(){
            $('#mod').css("display","none");
       }     
            
            
            
            
            
            
            
            
            
            
            
            
            function savebtn(){
               /* change button type
                */
             var stylebtn = document.getElementById("selectsizebtn");
           var  optionstyle = stylebtn.options[stylebtn.selectedIndex].value;
               
                console.log("dd"+optionstyle);
             //remove all classes and add selected one
                $("#bnt").removeClass('btn-lg btn-sm btn-xs');
                if (optionstyle) {
                    $("#bnt").addClass(optionstyle);
                }    
              /* change button size
                */  
                
                var stylebtn = document.getElementById("theSelect");
             optionButton = stylebtn.options[stylebtn.selectedIndex].value;
               
                console.log("dd"+optionButton);
             //remove all classes and add selected one
                $("#bnt").removeClass('btn-default btn-primary btn-success btn-info');
                if (optionButton) {
                    $("#bnt").addClass(optionButton);
                }   
                /* change button text
                */ 
               var textbtn=  $("#textbtn") .val();
                console.log("bbbb"+textbtn);
                $("#bnt").text(textbtn);
                /* add url 
                */
                var urlbtn= $("#btnurl") .val();
               $('#bnt').click(function() {
              window.location =urlbtn;
               });
                 var btnclass= $("#btnclass") .val();
    
                if (optionButton) {
                    $("#bnt").addClass(btnclass);
                } 
                
              
                
                
               /*
               Add tootip text znd position*/
              var btntooltip= $("#tooltiptext") .val();
     
                 var btntooltiposition= $("#tooltipposition") .val();
                  console.log(btntooltip);
                  console.log(btntooltiposition);
                 $('.btn-icon').tooltip({title:btntooltip , placement: btntooltiposition});
                 
                  /*
               Add icon with position*/
                
                
                
                var btnicon= $("#icontooltip") .val();
                console.log(btnicon);
                   $("#bnt").append($("<span id='marwa'class='"+btnicon+" bottom-right'></span>"));
                
               
                
                var btnticonpos= $("#position") .val();
                console.log(btnticonpos);
                
                
                
                
                if(btnticonpos=="right"){
                   $("#marwa").addClass("icon-right");
                 
                    
                }
                 if(btnticonpos=="left"){
                  $("#marwa").addClass("icon-left");
                    
                }
                 if(btnticonpos=="top"){
                      $("#marwa").addClass("icon-top");
                    
                }
                 if(btnticonpos=="bottom"){
                   $("#marwa").addClass("icon-bottom");
                    
                }
           
      
                
            
                $('#myModal').css("display","none");
                
              
                
               
            }
           
         
            
         /*HIDE MODAL*/   
            
            
            function hide(){
              $('#myModal').css("display","none");

            

            }
           
            
            
            
            
            
            
            
            
            
            $(function(){
              $('#content-area').keditor({
 
                  
              }); 
             
    
                
                $("#save").tooltip({placement: "right"}); 
                
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
