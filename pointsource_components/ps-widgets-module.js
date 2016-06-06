angular
	.module('ps-widgets',[])
		.filter('html',['$sce',function($sce) { 
			return $sce.trustAsHtml; 
		}])
		.filter('url',[function() {	// may need to "unescape" other characters going forward
			return function(jsonData) {
				return jsonData ? jsonData.replace(/&amp;/,'&') : ''; 
			}
		}])
	  	.factory('psWidgetHelper',['$q', function($q) {
		
			var helper = {};

			helper.buildCarouselData = function(carouselAttrs) {

				var carouselData = buildCarouselFormFactorData(carouselAttrs.showArrows === 'true',carouselAttrs,0); 

				if( carouselAttrs.centerMode === 'true' ) {
					carouselData['centerMode'] = true;
					carouselData['centerPadding'] = carouselAttrs.centerModePadding;
				} 
				if( carouselAttrs.fade === 'Yes' ) {
					carouselData['fade'] = true;
					carouselData['cssEase'] = 'linear';
				}
					
				carouselData['responsive'] = [{
					breakpoint: 960,
						settings: buildCarouselFormFactorData(carouselAttrs.showArrows === 'true',carouselAttrs,1)
					},
						{
							breakpoint: 600,
								settings: buildCarouselFormFactorData(carouselAttrs.showArrows === 'true',carouselAttrs,3)
						}];

				return carouselData;
			}

			var buildCarouselFormFactorData = function(showArrows,carouselAttrs,slideNumOffset) {
 				return {
 					arrows: showArrows,
						autoplay: carouselAttrs.autoplay === 'true',
							autoplaySpeed: parseInt(carouselAttrs.autoplaySpeed),
								dots: carouselAttrs.showDots === 'true',
				 					infinite: carouselAttrs.infiniteLoop === 'true',
										slidesToShow: parseInt(carouselAttrs.slidesToShow) > slideNumOffset ? (parseInt(carouselAttrs.slidesToShow) - slideNumOffset) : 1,
							  				slidesToScroll: 1,
							  					swipe: carouselAttrs.swipe === 'true',
								  					swipeToSlide: carouselAttrs.swipe === 'true',
									  					vertical: carouselAttrs.vertical === 'true'
				};
			}

			return helper;
		}]);