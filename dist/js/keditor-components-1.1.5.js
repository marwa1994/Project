/**!
 * KEditor - Kademi content editor
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 1.1.5
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap (optional), FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['audio'] = {
        getContent: function (component, keditor) {
            flog('getContent "audio" component, component');

            var componentContent = component.children('.keditor-component-content');
            var audio = componentContent.find('audio');
            audio.unwrap();

            return componentContent.html();
        },

        settingEnabled: true,

        settingTitle: 'Audio Settings',

        initSettingForm: function (form, keditor) {
            flog('init "audio" settings', form);

            form.append(
                '<form class="form-horizontal">' +
                '<div class="form-group">' +
                '<label for="audioFileInput" class="col-sm-12">Audio file</label>' +
                '<div class="col-sm-12">' +
                '<div class="audio-toolbar">' +
                '<a href="#" class="btn-audioFileInput btn btn-sm btn-primary"><i class="fa fa-upload"></i></a>' +
                '<input id="audioFileInput" type="file" style="display: none">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label for="audio-autoplay" class="col-sm-12">Autoplay</label>' +
                '<div class="col-sm-12">' +
                '<input type="checkbox" id="audio-autoplay" />' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label for="audio-showcontrols" class="col-sm-12">Show Controls</label>' +
                '<div class="col-sm-12">' +
                '<input type="checkbox" id="audio-showcontrols" checked />' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label for="audio-width" class="col-sm-12">Width (%)</label>' +
                '<div class="col-sm-12">' +
                '<input type="number" id="audio-width" min="20" max="100" class="form-control" value="100" />' +
                '</div>' +
                '</div>' +
                '</form>'
            );
        },

        showSettingForm: function (form, component, keditor) {
            flog('showSettingForm "audio" component', form, component);

            var options = keditor.options;

            var audio = component.find('audio');
            var fileInput = form.find('#audioFileInput');
            var btnAudioFileInput = form.find('.btn-audioFileInput');
            btnAudioFileInput.off('click').on('click', function (e) {
                e.preventDefault();

                fileInput.trigger('click');
            });
            fileInput.off('change').on('change', function () {
                var file = this.files[0];
                if (/audio/.test(file.type)) {
                    // Todo: Upload to your server :)

                    audio.attr('src', URL.createObjectURL(file));

                    audio.load(function () {
                        keditor.showSettingPanel(component, options);
                    });
                } else {
                    alert('Your selected file is not an audio file!');
                }
            });

            var autoplayToggle = form.find('#audio-autoplay');
            autoplayToggle.off('click').on('click', function (e) {
                if (this.checked) {
                    audio.attr('autoplay', 'autoplay');
                } else {
                    audio.removeAttr('autoplay');
                }
            });

            var showcontrolsToggle = form.find('#audio-showcontrols');
            showcontrolsToggle.off('click').on('click', function (e) {
                if (this.checked) {
                    audio.attr('controls', 'controls');
                } else {
                    audio.removeAttr('controls');
                }
            });

            var audioWidth = form.find('#audio-width');
            audioWidth.off('change').on('change', function () {
                audio.css('width', this.value + '%');
            });
        }
    };
})(jQuery);

(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['googlemap'] = {
        getContent: function (component, keditor) {
            flog('getContent "googlemap" component', component);

            var componentContent = component.children('.keditor-component-content');
            componentContent.find('.googlemap-cover').remove();

            return componentContent.html();
        },

        settingEnabled: true,

        settingTitle: 'Google Map Settings',

        initSettingForm: function (form, keditor) {
            flog('initSettingForm "googlemap" component');

            form.append(
                '<form class="form-horizontal">' +
                '   <div class="form-group">' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-block btn-primary btn-googlemap-edit">Update Map</button>' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label class="col-sm-12">Aspect Ratio</label>' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-sm btn-default btn-googlemap-169">16:9</button>' +
                '           <button type="button" class="btn btn-sm btn-default btn-googlemap-43">4:3</button>' +
                '       </div>' +
                '   </div>' +
                '</form>'
            );

            var btnEdit = form.find('.btn-googlemap-edit');
            btnEdit.on('click', function (e) {
                e.preventDefault();

                var inputData = prompt('Please enter Google Map embed code in here:');
                var iframe = $(inputData);
                var src = iframe.attr('src');
                if (iframe.length > 0 && src && src.length > 0) {
                    keditor.getSettingComponent().find('.embed-responsive-item').attr('src', src);
                } else {
                    alert('Your Google Map embed code is invalid!');
                }
            });

            var btn169 = form.find('.btn-googlemap-169');
            btn169.on('click', function (e) {
                e.preventDefault();

                keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-4by3').addClass('embed-responsive-16by9');
            });

            var btn43 = form.find('.btn-googlemap-43');
            btn43.on('click', function (e) {
                e.preventDefault();

                keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-16by9').addClass('embed-responsive-4by3');
            });
        }
    };

})(jQuery);







































(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['button'] = {
       // Function will be called when initializing a component with this type
        init: function (contentArea, container, component, keditor) {
            flog('init "button" component', component);
         
     
              var componentContent = component.children('.keditor-component-content');
         var x=  componentContent. children("div").eq(2);
             console.log("colllll",x);
    x.removeClass().removeAttr('style');$('.modal-backdrop').remove(); 
         
            
            
            
        $("#ok").click(function() {
                
            
           
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
            
            /* add class 
                */
            
                 var btnclass= $("#btnclass") .val();
                    $("#bnt").addClass(btnclass);
                
                
              
                
                
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
                
            });
            
            
            
            
            $("#cancel").click(function() {
  $('#myModal').css("display","none");
          });
           
            $("#closa").click(function() {
  $('#myModal').css("display","none");
          });
             
        
   

            
        }
        
        

    };

})(jQuery);





(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;
//type photo
    KEditor.components['combobox'] = {
       // Function will be called when initializing a component with this type
        init: function (contentArea, container, component, keditor) {
            flog('init "combobox" component', component);
            
              var componentContent = component.children('.keditor-component-content');
         var x=  componentContent. children("div").eq(2);
             console.log("colllll",x);
    x.removeClass().removeAttr('style');$('.modal-backdrop').remove(); 
          ///    var okbutton = document.getElementById("ok");
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

           
          
          
      
            
                $("#clos").click(function() {
  $('#mod').css("display","none");
          });
             
          
            
            
        $("#ok").click(function() {
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
                
                
            });
         
        
   

            
        }
        
        

    };

})(jQuery);










(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;
//type photo
    KEditor.components['photo'] = {
       // Function will be called when initializing a component with this type
        init: function (contentArea, container, component, keditor) {
            flog('init "photo" component', component);
//get content of  a component
            var componentContent = component.children('.keditor-component-content');
            
            //get image by its tag
            var img = componentContent.find('img');
 
            img.css('display', 'inline-block');
            
        },
        
        
// to show the settings windows we should enabled sttings
        settingEnabled: true,
//tile of window
        settingTitle: 'Photo Settings',
//composnat of setting form
        initSettingForm: function (form, keditor) {
            flog('initSettingForm "photo" component');
//binnding
            var self = this;
            //?
            var options = keditor.options;
//composants of form settings description
            form.append(
                '<form class="form-horizontal">' +
                '   <div class="form-group">' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-block btn-primary" id="photo-edit">Change Photo</button>' +
                '           <input type="file" style="display: none" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="photo-align" class="col-sm-12">Align</label>' +
                '       <div class="col-sm-12">' +
                '           <select id="photo-align" class="form-control">' +
                '               <option value="left">Left</option>' +
                '               <option value="center">Center</option>' +
                '               <option value="right">Right</option>' +
                '           </select>' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="photo-style" class="col-sm-12">Style</label>' +
                '       <div class="col-sm-12">' +
                '           <select id="photo-style" class="form-control">' +
                '               <option value="">None</option>' +
                '               <option value="img-rounded">Rounded</option>' +
                '               <option value="img-circle">Circle</option>' +
                '               <option value="img-thumbnail">Thumbnail</option>' +
                '           </select>' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="photo-responsive" class="col-sm-12">Responsive</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="checkbox" id="photo-responsive" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="photo-width" class="col-sm-12">Width</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="number" id="photo-width" class="form-control" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="photo-height" class="col-sm-12">Height</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="number" id="photo-height" class="form-control" />' +
                '       </div>' +
                '   </div>' +
                '</form>'
            );
//get button of edit by photo-edit id
            var photoEdit = form.find('#photo-edit');
      //.next() method allows us to search through the immediately following sibling of these elements in the DOM tree and construct a new jQuery object from the matching elements.      
            var fileInput = photoEdit.next();
            photoEdit.on('click', function (e) {
                e.preventDefault();
//?
                fileInput.trigger('click');
            });
            //get url
            fileInput.on('change', function () {
                //get first file
                var file = this.files[0];
                //test type of file if it is an image
                if (/image/.test(file.type)) {
                    //KEditor.getSettingComponent() is method for getting which component is setting
                    var img = keditor.getSettingComponent().find('img');
                    //affect change to src by adding url 
                    img.attr('src', URL.createObjectURL(file));
                    //add css 
                    img.css({
                        width: '',
                        height: ''
                    });
                    //?
                    img.load(function () {
                        keditor.showSettingPanel(keditor.getSettingComponent(), options);
                    });
                } else {
                    alert('Your selected file is not photo!');
                }
            });
//get align options of select 
            var inputAlign = form.find('#photo-alignphoto-align');
            //when you select an option
            inputAlign.on('change', function () {
                //edit the value in panel setting when cooes a specific value
                var panel = keditor.getSettingComponent().find('.photo-panel');
                panel.css('text-align', this.value);
            });
//get check 
            var inputResponsive = form.find('#photo-responsive');
            inputResponsive.on('click', function () {
                // if is checked add class responsive else remove this class
                keditor.getSettingComponent().find('img')[this.checked ? 'addClass' : 'removeClass']('img-responsive');
            });
// get style of seect
            var cbbStyle = form.find('#photo-style');
            cbbStyle.on('change', function () {
                var img = keditor.getSettingComponent().find('img');
                var val = this.value;
//remove all classes and add selected one
                img.removeClass('img-rounded img-circle img-thumbnail');
                if (val) {
                    img.addClass(val);
                }
            });
//get input width
            var inputWidth = form.find('#photo-width');
            var inputHeight = form.find('#photo-height');
            inputWidth.on('change', function () {
                var img = keditor.getSettingComponent().find('img');
                //get the vaue from the inputed val
                var newWidth = +this.value;
                var newHeight = Math.round(newWidth / self.ratio);

                if (newWidth <= 0) {
                    newWidth = self.width;
                    newHeight = self.height;
                    this.value = newWidth;
                }
//add new styles to the image
                img.css({
                    'width': newWidth,
                    'height': newHeight
                });
                inputHeight.val(newHeight);
            });
            
            inputHeight.on('change', function () {
                var img = keditor.getSettingComponent().find('img');
                var newHeight = +this.value;
                var newWidth = Math.round(newHeight * self.ratio);

                if (newHeight <= 0) {
                    newWidth = self.width;
                    newHeight = self.height;
                    this.value = newHeight;
                }

                img.css({
                    'height': newHeight,
                    'width': newWidth
                });
                inputWidth.val(newWidth);
            });
        },
// This function will be called when user clicks on setting button of component 
        showSettingForm: function (form, component, keditor) {
            flog('showSettingForm "photo" component', component);
// get all elements of form
            var self = this;
            var inputAlign = form.find('#photo-align');
            var inputResponsive = form.find('#photo-responsive');
            var inputWidth = form.find('#photo-width');
            var inputHeight = form.find('#photo-height');
            var cbbStyle = form.find('#photo-style');

            var panel = component.find('.photo-panel');
            var img = panel.find('img');
// add attribute to panels
            var algin = panel.css('text-align');
            if (algin !== 'right' || algin !== 'center') {
                algin = 'left';
            }

            if (img.hasClass('img-rounded')) {
                cbbStyle.val('img-rounded');
            } else if (img.hasClass('img-circle')) {
                cbbStyle.val('img-circle');
            } else if (img.hasClass('img-thumbnail')) {
                cbbStyle.val('img-thumbnail');
            } else {
                cbbStyle.val('');
            }

            inputAlign.val(algin);
            inputResponsive.prop('checked', img.hasClass('img-responsive'));
            inputWidth.val(img.width());
            inputHeight.val(img.height());

            $('<img />').attr('src', img.attr('src')).load(function() {
                self.ratio = this.width / this.height;
                self.width = this.width;
                self.height = this.height;
            });
        }
    };

})(jQuery);

(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    CKEDITOR.disableAutoInline = true;

    // Text component
    // ---------------------------------------------------------------------
    KEditor.components['text'] = {
        options: {
            toolbarGroups: [
                {name: 'document', groups: ['mode', 'document', 'doctools']},
                {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
                {name: 'forms', groups: ['forms']},
                {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
                {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']},
                {name: 'links', groups: ['links']},
                {name: 'insert', groups: ['insert']},
                '/',
                {name: 'clipboard', groups: ['clipboard', 'undo']},
                {name: 'styles', groups: ['styles']},
                {name: 'colors', groups: ['colors']},
                {name: 'tools', groups: ['tools']},
                {name: 'others', groups: ['others']},
            ],
            title: false,
            allowedContent: true, // DISABLES Advanced Content Filter. This is so templates with classes: allowed through
            bodyId: 'editor',
            templates_replaceContent: false,
            enterMode: 'P',
            forceEnterMode: true,
            format_tags: 'p;h1;h2;h3;h4;h5;h6',
            removePlugins: 'table,magicline,tabletools',
            removeButtons: 'Save,NewPage,Preview,Print,Templates,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,HiddenField,ImageButton,Button,Select,Textarea,TextField,Radio,Checkbox,Outdent,Indent,Blockquote,CreateDiv,Language,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,BGColor,Maximize,About,ShowBlocks,BidiLtr,BidiRtl,Flash,Image,Subscript,Superscript,Anchor',
            minimumChangeMilliseconds: 100
        },

        init: function (contentArea, container, component, keditor) {
            flog('init "text" component', component);

            var self = this;
            var options = keditor.options;

            var componentContent = component.children('.keditor-component-content');
            componentContent.prop('contenteditable', true);

            componentContent.on('input', function (e) {
                if (typeof options.onComponentChanged === 'function') {
                    options.onComponentChanged.call(contentArea, e, component);
                }

                if (typeof options.onContainerChanged === 'function') {
                    options.onContainerChanged.call(contentArea, e, container);
                }

                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(contentArea, e);
                }
            });

            var editor = componentContent.ckeditor(self.options).editor;
            editor.on('instanceReady', function () {
                flog('CKEditor is ready', component);

                if (typeof options.onComponentReady === 'function') {
                    options.onComponentReady.call(contentArea, component, editor);
                }
            });
        },

        getContent: function (component, keditor) {
            flog('getContent "text" component', component);

            var componentContent = component.find('.keditor-component-content');
            var id = componentContent.attr('id');
            var editor = CKEDITOR.instances[id];
            if (editor) {
                return editor.getData();
            } else {
               
                return componentContent.html();
            }
        },

        destroy: function (component, keditor) {
            flog('destroy "text" component', component);

            var id = component.find('.keditor-component-content').attr('id');
            var editor = CKEDITOR.instances[id];
            if (editor) {
                editor.destroy();
            }
        }
    };

})(jQuery);

(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['video'] = {
        getContent: function (component, keditor) {
            flog('getContent "video" component', component);

            var componentContent = component.children('.keditor-component-content');
            var video = componentContent.find('video');
            video.unwrap();

            return componentContent.html();
        },

        settingEnabled: true,

        settingTitle: 'Video Settings',

        initSettingForm: function (form, keditor) {
            flog('init "video" settings', form);

            form.append(
                '<form class="form-horizontal">' +
                '<div class="form-group">' +
                '<label for="videoFileInput" class="col-sm-12">Video file</label>' +
                '<div class="col-sm-12">' +
                '<div class="video-toolbar">' +
                '<a href="#" class="btn-videoFileInput btn btn-sm btn-primary"><i class="fa fa-upload"></i></a>' +
                '<input id="videoFileInput" type="file" style="display: none">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label for="video-autoplay" class="col-sm-12">Autoplay</label>' +
                '<div class="col-sm-12">' +
                '<input type="checkbox" id="video-autoplay" />' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label for="video-loop" class="col-sm-12">Loop</label>' +
                '<div class="col-sm-12">' +
                '<input type="checkbox" id="video-loop" />' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label for="video-showcontrols" class="col-sm-12">Show Controls</label>' +
                '<div class="col-sm-12">' +
                '<input type="checkbox" id="video-showcontrols" checked />' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label for="" class="col-sm-12">Ratio</label>' +
                '<div class="col-sm-12">' +
                '<input type="radio" name="video-radio" class="video-ratio" value="4/3" checked /> 4:3' +
                '</div>' +
                '<div class="col-sm-12">' +
                '<input type="radio" name="video-radio" class="video-ratio" value="16/9" /> 16:9' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label for="video-width" class="col-sm-12">Width (px)</label>' +
                '<div class="col-sm-12">' +
                '<input type="number" id="video-width" min="320" max="1920" class="form-control" value="320" />' +
                '</div>' +
                '</div>' +
                '</form>'
            );
        },

        showSettingForm: function (form, component, keditor) {
            flog('showSettingForm "video" settings', form, component);

            var options = keditor.options;
            var video = component.find('video');
            var fileInput = form.find('#videoFileInput');
            var btnVideoFileInput = form.find('.btn-videoFileInput');
            btnVideoFileInput.on('click', function (e) {
                e.preventDefault();

                fileInput.trigger('click');
            });
            fileInput.off('change').on('change', function () {
                var file = this.files[0];
                if (/video/.test(file.type)) {
                    // Todo: Upload to your server :)

                    video.attr('src', URL.createObjectURL(file));

                    video.load(function () {
                        keditor.showSettingPanel(component, options);
                    });
                } else {
                    alert('Your selected file is not an video file!');
                }
            });

            var autoplayToggle = form.find('#video-autoplay');
            autoplayToggle.off('click').on('click', function (e) {
                if (this.checked) {
                    video.prop('autoplay', true);
                } else {
                    video.removeProp('autoplay');
                }
            });

            var loopToggle = form.find('#video-loop');
            loopToggle.off('click').on('click', function (e) {
                if (this.checked) {
                    video.prop('loop', true);
                } else {
                    video.removeProp('loop');
                }
            });

            var ratio = form.find('.video-ratio');
            ratio.off('click').on('click', function (e) {
                if (this.checked) {
                    var currentWidth = video.css('width') || video.prop('width');
                    currentWidth = currentWidth.replace('px', '');

                    var currentRatio = this.value === '16/9' ? 16 / 9 : 4 / 3;
                    var height = currentWidth / currentRatio;
                    video.css('width', currentWidth + 'px');
                    video.css('height', height + 'px');
                    video.removeProp('width');
                    video.removeProp('height');
                }
            });

            var showcontrolsToggle = form.find('#video-showcontrols');
            showcontrolsToggle.off('click').on('click', function (e) {
                if (this.checked) {
                    video.attr('controls', 'controls');
                } else {
                    video.removeAttr('controls');
                }
            });

            var videoWidth = form.find('#video-width');
            videoWidth.off('change').on('change', function () {
                video.css('width', this.value + 'px');
                var currentRatio = form.find('.video-ratio:checked').val() === '16/9' ? 16 / 9 : 4 / 3;
                var height = this.value / currentRatio;
                video.css('height', height + 'px');
                video.removeProp('width');
                video.removeProp('height');
            });
        }
    };
})(jQuery);

(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['vimeo'] = {
        getContent: function (component, keditor) {
            flog('getContent "vimeo" component', component);

            var componentContent = component.children('.keditor-component-content');
            componentContent.find('.vimeo-cover').remove();

            return componentContent.html();
        },

        settingEnabled: true,

        settingTitle: 'Vimeo Settings',

        initSettingForm: function (form, keditor) {
            flog('initSettingForm "vimeo" component');

            form.append(
                '<form class="form-horizontal">' +
                '   <div class="form-group">' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-block btn-primary btn-vimeo-edit">Change Video</button>' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label class="col-sm-12">Autoplay</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="checkbox" id="vimeo-autoplay" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label class="col-sm-12">Aspect Ratio</label>' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-sm btn-default btn-vimeo-169">16:9</button>' +
                '           <button type="button" class="btn btn-sm btn-default btn-vimeo-43">4:3</button>' +
                '       </div>' +
                '   </div>' +
                '</form>'
            );

            var btnEdit = form.find('.btn-vimeo-edit');
            btnEdit.on('click', function (e) {
                e.preventDefault();

                var inputData = prompt('Please enter Vimeo URL in here:');
                var vimeoRegex = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
                var match = inputData.match(vimeoRegex);
                if (match && match[1]) {
                    keditor.getSettingComponent().find('.embed-responsive-item').attr('src', 'https://player.vimeo.com/video/' + match[1] + '?byline=0&portrait=0&badge=0');
                } else {
                    alert('Your Vimeo URL is invalid!');
                }
            });

            var btn169 = form.find('.btn-vimeo-169');
            btn169.on('click', function (e) {
                e.preventDefault();

                keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-4by3').addClass('embed-responsive-16by9');
            });

            var btn43 = form.find('.btn-vimeo-43');
            btn43.on('click', function (e) {
                e.preventDefault();

                keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-16by9').addClass('embed-responsive-4by3');
            });

            var chkAutoplay = form.find('#vimeo-autoplay');
            chkAutoplay.on('click', function () {
                var embedItem = keditor.getSettingComponent().find('.embed-responsive-item');
                var currentUrl = embedItem.attr('src');
                var newUrl = (currentUrl.replace(/(\?.+)+/, '')) + '?byline=0&portrait=0&badge=0&autoplay=' + (chkAutoplay.is(':checked') ? 1 : 0);

                flog('Current url: ' + currentUrl, 'New url: ' + newUrl);
                embedItem.attr('src', newUrl);
            });
        },

        showSettingForm: function (form, component, keditor) {
            flog('showSettingForm "vimeo" component', component);

            var embedItem = component.find('.embed-responsive-item');
            var chkAutoplay = form.find('#vimeo-autoplay');
            var src = embedItem.attr('src');

            chkAutoplay.prop('checked', src.indexOf('autoplay=1') !== -1);
        }
    };

})(jQuery);

(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['youtube'] = {
        getContent: function (component, keditor) {
            flog('getContent "youtube" component', component);

            var componentContent = component.children('.keditor-component-content');
            componentContent.find('.youtube-cover').remove();

            return componentContent.html();
        },

        settingEnabled: true,

        settingTitle: 'Youtube Settings',

        initSettingForm: function (form, keditor) {
            flog('initSettingForm "youtube" component');

            form.append(
                '<form class="form-horizontal">' +
                '   <div class="form-group">' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-block btn-primary btn-youtube-edit">Change Video</button>' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label class="col-sm-12">Autoplay</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="checkbox" id="youtube-autoplay" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label class="col-sm-12">Aspect Ratio</label>' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-sm btn-default btn-youtube-169">16:9</button>' +
                '           <button type="button" class="btn btn-sm btn-default btn-youtube-43">4:3</button>' +
                '       </div>' +
                '   </div>' +
                '</form>'
            );

            var btnEdit = form.find('.btn-youtube-edit');
            btnEdit.on('click', function (e) {
                e.preventDefault();

                var inputData = prompt('Please enter Youtube URL in here:');
                var youtubeRegex = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/))([^\?&\"'>]+)/;
                var match = inputData.match(youtubeRegex);
                if (match && match[1]) {
                    keditor.getSettingComponent().find('.embed-responsive-item').attr('src', 'https://www.youtube.com/embed/' + match[1]);
                } else {
                    alert('Your Youtube URL is invalid!');
                }
            });

            var btn169 = form.find('.btn-youtube-169');
            btn169.on('click', function (e) {
                e.preventDefault();

                keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-4by3').addClass('embed-responsive-16by9');
            });

            var btn43 = form.find('.btn-youtube-43');
            btn43.on('click', function (e) {
                e.preventDefault();

                keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-16by9').addClass('embed-responsive-4by3');
            });

            var chkAutoplay = form.find('#youtube-autoplay');
            chkAutoplay.on('click', function () {
                var embedItem = keditor.getSettingComponent().find('.embed-responsive-item');
                var currentUrl = embedItem.attr('src');
                var newUrl = (currentUrl.replace(/(\?.+)+/, '')) + '?autoplay=' + (chkAutoplay.is(':checked') ? 1 : 0);

                flog('Current url: ' + currentUrl, 'New url: ' + newUrl);
                embedItem.attr('src', newUrl);
            });
        },

        showSettingForm: function (form, component, keditor) {
            flog('showSettingForm "youtube" component', component);

            var embedItem = component.find('.embed-responsive-item');
            var chkAutoplay = form.find('#youtube-autoplay');
            var src = embedItem.attr('src');

            chkAutoplay.prop('checked', src.indexOf('autoplay=1') !== -1);
        }
    };

})(jQuery);
