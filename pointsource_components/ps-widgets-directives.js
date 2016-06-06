angular
	.module('ps-widgets')
		.directive('psCarousel',['$timeout','psWidgetHelper',function($timeout,psWidgetHelper) {
	   
			return {
				restrict: 'E',
				scope: {
					data: '=carouselData'
				},
				templateUrl: function(elem, attr){
			        return 'pointsource/widgets/js/templates/'+attr.template+'.html';
			    },
				// templateUrl: 'pointsource/widgets/js/templates/hero-image-left.html',
				link: function (scope, element, attrs) {

//					$templateRequest('pointsource/widgets/js/templates/'+attrs.template+'.html')
//						.then(function(templateMarkup) {
							// convert the template markup to an actual DOM node
//		                	var template = angular.element(templateMarkup);
			                // $compile the template returned
//	       			        $compile(template)(scope);
			                // append it to 'this' element
//   	    			   	element.append(template);
					
					// scope.carouselSlideData = scope.data[attrs.carouselId];
					scope.carouselSlideData = $.isEmptyObject(scope.data) ? window.carouselData[attrs.id] : scope.data;

					$timeout(function() {	// quick timeout / pause gives chance for browser to pre-load image(s)

						element.slick( psWidgetHelper.buildCarouselData(attrs) );
									
						$(element).fadeTo(600,1);
					}, 15 );
				}
			};
		}])
		.directive('psHeroImageLeftCarousel',['$timeout','psWidgetHelper',function($timeout,psWidgetHelper) {
	   
			return {
				restrict: 'C',
				scope: {
					data: '=componentData'
				},
				template: '<div class="hero-slide with-arrows" ng-repeat="carouselSlide in data">'+
					'<div class="hero-slide-wrapper {{ ::carouselSlide.cssOverride }}" layout="column" layout-gt-xs="row" layout-align="center center">'+
						'<div flex class="slide-background-image" layout="column" layout-align="center end" style="background-image: url({{ ::carouselSlide.imageUrl }});" ng-if="!carouselSlide.slideContent">'+
							'<h2 hide-gt-xs ng-bind-html="carouselSlide.title | html"></h2>'+
				   		'</div>'+
				   		'<div flex class="slide-content" ng-if="!carouselSlide.slideContent">'+
							'<div layout="column" layout-align="center start">'+
				   				'<h2 hide-xs ng-bind-html="carouselSlide.title | html"></h2>'+
				   				'<p ng-bind-html="carouselSlide.subtitle | html"></p>'+
							    '<div class="call-to-action" layout="row" layout-align="start center">'+
									'<md-button href="{{ ::carouselSlide.link1 | url }}" class="md-raised md-primary" ng-if="carouselSlide.link1">'+
				 						'{{ ::carouselSlide.link1Label }}'+
				     				'</md-button>'+
				       				'<md-button href="{{ ::carouselSlide.link2 | url }}" class="md-raised md-primary" ng-if="carouselSlide.link2">'+
				       					'{{ ::carouselSlide.link2Label }}'+
				      				'</md-button>'+
				     			'</div>'+
							'</div>'+
					   	'</div>'+
						'<div ng-if="carouselSlide.slideContent">'+
							'{{ ::carouselSlide.slideContent }}'+
						'</div>'+
					'</div>'+
				'</div>',
				link: function (scope, element, attrs) {

					if( $.isEmptyObject(scope.data) ) {
						scope.data =  window.carouselData[attrs.id];
					}

					$timeout(function() {	// quick timeout / pause gives chance for browser to pre-load image(s)

						element.slick( psWidgetHelper.buildCarouselData(attrs) );
									
						$(element).fadeTo(600,1);
					}, 150 );
				}
			};
		}])
		.directive('psFeaturedProductCarousel',['$timeout','psWidgetHelper',function($timeout,psWidgetHelper) {
	   
			return {
				restrict: 'C',
				scope: {
					data: '=componentData'
				},
				template: '<div class="featured-product-slide product-slide" ng-repeat="carouselSlide in data">'+
				  	'<div layout="column" class="margin">'+
				   		'<a href="{{ ::carouselSlide.url | url }}">'+
				   			'<div flex class="image">'+
				   				'<img ng-src="{{ ::carouselSlide.imageUrl }}">'+
				   			'</div>'+
				    		'<div flex class="summary" ng-bind-html="carouselSlide.summary | html"></div>'+
				    		'<div flex class="price">'+
				      			'${{ ::carouselSlide.price }}'+
				     			'<span class="member">'+
				      				'GOAL CLUB: ${{ ::carouselSlide.memberPrice }}'+
				     			'</span>'+
				   			'</div>'+
				   		'</a>'+
					'</div>'+
				'</div>',
				link: function (scope, element, attrs) {

					if( $.isEmptyObject(scope.data) ) {
						scope.data =  window.carouselData[attrs.id];
					}

					$timeout(function() {	// quick timeout / pause gives chance for browser to pre-load image(s)

						element.slick( psWidgetHelper.buildCarouselData(attrs) );
									
						$(element).fadeTo(600,1);
					}, 150 );
				}
			};
		}])
		.directive('psUserReviewCarousel',['$timeout','psWidgetHelper',function($timeout,psWidgetHelper) {
	   
			return {
				restrict: 'C',
				scope: {
					data: '=componentData'
				},
				template: '<div class="user-review-slide" ng-repeat="carouselSlide in data">'+
  							'<div flex class="review" ng-bind-html="carouselSlide.review | html"></div>' +
  							'<div flex class="reviewer">' +
   								'{{ ::carouselSlide.reviewer }}<span class="location" ng-if="carouselSlide.location">({{ ::carouselSlide.location }})</span>' +
  							'</div>' +
  							'<div flex class="rating" reviewer-rating="carouselSlide.rating"></div>' +
 						  '</div>',
				link: function (scope, element, attrs) {
					
					if( $.isEmptyObject(scope.data) ) {
						scope.data =  window.carouselData[attrs.id];
					}

					$timeout(function() {	// quick timeout / pause gives chance for browser to pre-load image(s)

						element.slick( psWidgetHelper.buildCarouselData(attrs) );
									
						$(element).fadeTo(600,1);
					}, 150 );
				}
			};
		}])
		.directive('psFeaturedTaxonomyCarousel',['$timeout','psWidgetHelper',function($timeout,psWidgetHelper) {
	   
			return {
				restrict: 'C',
				scope: {
					data: '=componentData'
				},
				template: '<div class="featured-taxonomy-slide" ng-repeat="carouselSlide in data">'+
							'<div class="slide-wrapper" layout="column" layout-gt-xs="row" layout-align="center center">'+
								'<div flex class="taxonomy-details" layout="column" layout-align="center start">'+
									'<p class="title">{{ ::carouselSlide.title }}</p>'+
									'<span flex class="link" ng-if"carouselSlide.link">' +
										'<a href="{{ ::carouselSlide.link | url }}">See All</a>' +
									'</span>'+
				   				'</div>'+
				   				'<div flex class="featured-details" layout="column" layout-align="center center">'+
			   						'<div class="image">'+
				   						'<a href="{{ ::carouselSlide.featured.link | url }}">' +
				   							'<img ng-src="{{ ::carouselSlide.featured.thumbnail }}">'+
					   					'</a>' +
			   						'</div>'+
			   						'<a href="{{ ::carouselSlide.featured.link | url }}">' +
				   						'<p class="summary" ng-bind-html="carouselSlide.featured.summary | html"></p>'+
				   					'</a>' +
						    		'<p class="published">{{ ::carouselSlide.featured.published }}</p>'+
					   			'</div>'+
							'</div>'+
						'</div>',
				link: function (scope, element, attrs) {
					
					if( $.isEmptyObject(scope.data) ) {
						scope.data =  window.carouselData[attrs.id];
					}

					$timeout(function() {	// quick timeout / pause gives chance for browser to pre-load image(s)

						element.slick( psWidgetHelper.buildCarouselData(attrs) );
									
						$(element).fadeTo(600,1);
					}, 150 );
				}
			};
		}])
		.directive('reviewerRating',[function() {
	   
			return {
				restrict: 'A',
				scope: {
					rating: '=reviewerRating'
				},
				link: function (scope, element, attrs) {

					var reviewerRatingStr, reviewerRatingHTML = '';
							reviewerRating = scope.rating ? parseInt(reviewerRatingStr = scope.rating) : 0;
					for( var i=0; i<reviewerRating; i++ ) {
						reviewerRatingHTML += '<i class="fa fa-star"></i>';
					}
					if( reviewerRatingStr.endsWith('.5') ) {
						reviewerRatingHTML += '<i class="fa fa-star-half"></i>';
					}
					element.html(reviewerRatingHTML);
				}
			};
		}])
		.directive('psBasicImageCarousel',['$timeout','psWidgetHelper',function($timeout,psWidgetHelper) {
	   
			return {
				restrict: 'C',
				scope: {
					data: '=componentData'
				},
				template: '<div class="image-navigator-slide" ng-repeat="image in data">'+
							'<img ng-src="{{ ::image.url }}" thumbnail="{{::image.thumbnailUrl}}">'+
						  '</div>',
				link: function (scope, element, attrs) {
					
					if( $.isEmptyObject(scope.data) ) {
						scope.data =  window.carouselData ? window.carouselData[attrs.id] : [];
					}

					$timeout(function() {	// quick timeout / pause gives chance for browser to pre-load image(s)

						element.slick( psWidgetHelper.buildCarouselData(attrs) );
									
						$(element).fadeTo(600,1);
					}, 150 );
				}
			};
		}])
		.directive('psImageNavigator',['$timeout','psWidgetHelper',function($timeout,psWidgetHelper) {
	   
			return {
				restrict: 'C',
				scope: {
					navigatorData: '=componentData'
				},
				template: function(element,attrs) {
				   return '<div flex id="'+attrs.id+'-bic" class="ps-carousel ps-basic-image-carousel" template="" autoplay="'+attrs.autoplay+'" autoplay-speed="'+attrs.autoplaySpeed+'" swipe="'+attrs.swipe+'" infinite-loop="'+attrs.infiniteLoop+'" show-arrows="'+attrs.showArrows+'" show-dots="'+attrs.showDots+'" slides-to-show="'+attrs.slidesToShow+'" center-mode="'+attrs.centerMode+'" center-mode-padding="'+attrs.centerModePadding+'" fade="'+attrs.fade+'" vertical="'+attrs.vertical+'" component-data="navigatorData.images"></div>' +
						  '<md-card class="navigator">' +
					  		'<div class="header">{{ navigatorData.header }}</div>' +
					  		'<md-divider></md-divider>' +
					  		'<div layout="row" layout-gt-xs="column">' +
					   			'<div flex="40" flex-gt-xs="100" class="navigator-carousel flex-layout-fix">' +
					    			'<div class="thumbnail-carousel">' +
					     				'<div ng-repeat="image in navigatorData.images">' +
					      					'<img ng-src="{{ image.url }}" ng-click="swapImageCarousel(\''+attrs.id+'\',$index)" />' +
					     				'</div>' +
					    			'</div>' +
					   			'</div>' +
					   			'<div flex="60" flex-gt-xs="100" class="flex-layout-fix">' +
					    			'<div class="metadata" ng-repeat="metadata in navigatorData.metadata">' +
						    			'<md-divider></md-divider>' +
						    			'<div class="metadata.class" ng-bind-html=" metadata.content | html"></div>' +
					    			'</div>' +
					   			'</div>' +
					  		'</div>' +
						 '</md-card>'
				},
				link: function (scope, element, attrs) {

					if( $.isEmptyObject(scope.navigatorData) ) {
						scope.navigatorData = window.navigatorData ? window.navigatorData[attrs.id] : {};
					}

					$timeout(function() {	// quick timeout / pause gives chance for browser to pre-load image(s)

						$('.thumbnail-carousel').slick({
			 				arrows: true,
								slidesToShow: 4,
									swipeToSlide: true,
										responsive: [{
											breakpoint: 960,
												settings: {
									 				arrows: true,
														slidesToShow: 3,
									  						swipeToSlide: true,
												}
									  	},
									  	{
											breakpoint: 600,
												settings: {
									 				arrows: true,
														slidesToShow: 1,
									  						swipeToSlide: true,
												}
									  	}]
						});

						$(element).fadeTo(600,1);
					}, 150 );

					scope.swapImageCarousel = function(id,index) {

						$('#'+id+'-bic').slick('slickGoTo',index);
					}
				}
			};
		}])
		.directive('psSectionScroller',['$compile','$timeout',function($compile,$timeout) {
	   
	   		var PREVENT_LONG_SCROLL_TIMEOUT	= 500, SECTION_SCROLL_TIME	= 750;

			return {
				restrict: 'C',
				link: function (scope, element, attrs) {

					var sections, scrolling = false, currentSlideIndex = 0;
					$((sections = element.find('.ps-section-container').children())[0]).addClass('active');

					if( sections.length > 0 ) {
						var navigatorsHtml = '<ul>';
						var sectionNavigator = $(element.find('.ps-section-nav'));
						for( var i=0; i<sections.length; i++ ) {
							navigatorsHtml += '<li><a ng-click="goToSection('+i+')"><div class="dot">&nbsp;</div></a></li>';
						}
						sectionNavigator.html(navigatorsHtml+'</ul>');
						$compile(sectionNavigator)(scope);
					}

					if( sections.length > 1 ) {
						element.find('button.next').attr('style','visibility: visible;');
					}

					Hamster($(element)[0]).wheel(function(event, delta, deltaX, deltaY){
						if( deltaY > 0 ) { scope.previous(1); } 
						else if( deltaY < 0 ) { scope.next(1); }
					});

					scope.next = function(numSections) {
				
						if( !scrolling && sections.length > (currentSlideIndex + 1) ) {
							scrolling = true;
							element.find('button.previous').attr('style','visibility: visible;');
							$(sections[currentSlideIndex]).addClass('forward previous');
							$(sections[currentSlideIndex = currentSlideIndex + numSections]).addClass('active forward next');
							$timeout(function() {
								$(sections[currentSlideIndex]).removeClass('forward next');
								$(sections[currentSlideIndex-numSections]).removeClass('active forward previous');
								if( sections.length === (currentSlideIndex + 1) ) {
									element.find('button.next').attr('style','visibility: hidden;');
								}
								preventLongScroll();
							}, SECTION_SCROLL_TIME );
						}
					}

					scope.previous = function(numSections) {

						if( !scrolling && currentSlideIndex > 0 ) {
							scrolling = true;
							element.find('button.next').attr('style','visibility: visible;');
							$(sections[currentSlideIndex]).addClass('backward previous');
							$(sections[currentSlideIndex = currentSlideIndex - numSections]).addClass('active backward next');
							$timeout(function() {
								$(sections[currentSlideIndex]).removeClass('backward next');
								$(sections[currentSlideIndex+numSections]).removeClass('active backward previous');
								if( currentSlideIndex === 0 ) {
									element.find('button.previous').attr('style','visibility: hidden;');
								}
								preventLongScroll();
							}, SECTION_SCROLL_TIME );
						}
					}
					
					scope.goToSection = function(sectionNum) {

						if( sectionNum !== currentSlideIndex ) {						
							if( sectionNum < currentSlideIndex ) {
								scope.previous(currentSlideIndex-sectionNum);
							} else { //if( currentSlideIndex < sectionNum ) {
								scope.next(sectionNum-currentSlideIndex);
							}
						}
					}
					
					// used to prevent long / multiple scrolls on single swipe / scroll event
					var preventLongScroll = function() {

						$timeout(function() {
							scrolling = false;
						}, PREVENT_LONG_SCROLL_TIMEOUT );
					}
				}
			}
		}]);
