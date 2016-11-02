var FQApp = angular.module('FqApp', ['ngMaterial','ui.bootstrap', 'ngMessages', 'material.svgAssetsCache', 'ui.mask']);

	FQApp.config(function($mdThemingProvider) {
				
		$mdThemingProvider.definePalette('chillPalette', {
			'50': '4a2b81',
			'100': '4a2b81',
			'200': '4a2b81',
			'300': '4a2b81',
			'400': '4a2b81',
			'500': '4a2b81',
			'600': '4a2b81',
			'700': '4a2b81',
			'800': '4a2b81',
			'900': '4a2b81',
			'A100': '4a2b81',
			'A200': '4a2b81',
			'A400': '4a2b81',
			'A700': '4a2b81',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
												// on this palette should be dark or light

			'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
			 '200', '300', '400', 'A100'],
			'contrastLightColors': undefined    // could also specify this if default was 'dark'
		});
				
		$mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
		$mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
		$mdThemingProvider.theme('chill-purple').primaryPalette('chillPalette');
		$mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
	});
			
	FQApp.config(function($mdDateLocaleProvider){
		$mdDateLocaleProvider.formatDate = function(date) {
			return moment(date).format('DD/MM/YYYY');
	}});

