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
        <link rel="stylesheet" type="text/css" href="css/examples.css" />
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
        <div id="content-area"></div>

        <script type="text/javascript">
            $(function() {
                $('#content-area').keditor();
            });
        </script>
    </body>
</html>
