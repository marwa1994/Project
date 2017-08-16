/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	 config.filebrowserBrowseUrl = 'plugins/ckeditor-4.5.6/kcfinder/browse.php?opener=ckeditor&type=files';
     config.filebrowserImageBrowseUrl = 'plugins/ckeditor-4.5.6/kcfinder/browse.php?opener=ckeditor&type=images';
     config.filebrowserFlashBrowseUrl = 'plugins/ckeditor-4.5.6/kcfinder/browse.php?opener=ckeditor&type=flash';
     config.filebrowserUploadUrl = 'plugins/ckeditor-4.5.6/kcfinder/upload.php?opener=ckeditor&type=files';
     config.filebrowserImageUploadUrl = 'plugins/ckeditor-4.5.6/kcfinder/upload.php?opener=ckeditor&type=images';
     config.filebrowserFlashUploadUrl = 'plugins/ckeditor-4.5.6/kcfinder/upload.php?opener=ckeditor&type=flash';

};
