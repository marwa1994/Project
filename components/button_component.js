(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;
//type photo
    KEditor.components['button'] = {
       // Function will be called when initializing a component with this type
        init: function (contentArea, container, component, keditor) {
            flog('init "button " component', component);
//get content of  a component
            var componentContent = component.children('.keditor-component-content');
            flog('init marwa',componentContent);
            //get image by its tag
            var button = componentContent.find('button');

        },
        

//composnat of setting form
        initSettingForm: function (form, keditor) {
            flog('initModal "button" component');

            return $.ajax({
              url:''  ,
                type:'get',
                dataType:'HTML',
                success:function(res){
                form.html(resp);    
                    
                    
                }
            
            
            
            
            
            
            var self = this;
            //?
            var options = keditor.options;
//composants of form settings description
            form.append(
               ''
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
            var inputAlign = form.find('#photo-align');
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