var FQApp = angular.module('FqApp', ['ngMaterial','ui.bootstrap', 'ngMessages', 'material.svgAssetsCache', 'ui.mask']);

	FQApp.config(function($mdThemingProvider) {
				
		
		$mdThemingProvider.definePalette('chillpurple', {
			'50': '#d6c8ed',
			'100': '#aa8fda',
			'200': '#8a65cc',
			'300': '#643aaf',
			'400': '#573398',
			'500': '#4a2b81',
			'600': '#3d236a',
			'700': '#301c53',
			'800': '#22143c',
			'900': '#150c25',
			'A100': '#d6c8ed',
			'A200': '#aa8fda',
			'A400': '#573398',
			'A700': '#301c53',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 A100 A200'
			});
		

		$mdThemingProvider.definePalette('chillgreen', {
		'50': '#ffffff',
		'100': '#eaf1d4',
		'200': '#d6e3a9',
		'300': '#bdd273',
		'400': '#b2ca5c',
		'500': '#a7c345',
		'600': '#96b039',
		'700': '#829931',
		'800': '#6f822a',
		'900': '#5b6b23',
		'A100': '#ffffff',
		'A200': '#eaf1d4',
		'A400': '#b2ca5c',
		'A700': '#829931',
		'contrastDefaultColor': 'light',
		'contrastDarkColors': '50 100 200 300 400 500 600 700 A100 A200 A400 A700'
		});
		$mdThemingProvider.definePalette('chillcream', {
			'50': '#ffffff',
			'100': '#ffffff',
			'200': '#ffffff',
			'300': '#ffffff',
			'400': '#fffffe',
			'500': '#f4f4ea',
			'600': '#e9e9d6',
			'700': '#dfdfc2',
			'800': '#d4d4ae',
			'900': '#caca9a',
			'A100': '#ffffff',
			'A200': '#ffffff',
			'A400': '#fffffe',
			'A700': '#dfdfc2',
			'contrastDefaultColor': 'light',
			'contrastDarkColors': '50 100 200 300 400 500 600 700 800 900 A100 A200 A400 A700'
			});
				
		$mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
		$mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
		$mdThemingProvider.theme('chill-palette').primaryPalette('chillpurple');
		$mdThemingProvider.theme('chill-palette').backgroundPalette('chillcream');
		$mdThemingProvider.theme('chill-palette').accentPalette('chillgreen');
	});
			
	FQApp.config(function($mdDateLocaleProvider){
		$mdDateLocaleProvider.formatDate = function(date) {
			return moment(date).format('DD/MM/YYYY');
	}});

