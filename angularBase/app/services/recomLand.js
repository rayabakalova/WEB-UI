(function (angular) {
	'use strict';

	angular
		.module('app')
		.factory('recomLands', service);

		service.$inject = ['$http'];

		function service($http) {

			return {

				recom: [

				{
					name: "Cafe des 2 Moulins",
					description: "The Cafe des 2 Moulins' claim to fame came in the form of Jean-Pierre Jeunet's instant classic film Amelie, which used it as the heroine's charmingly vintage place of employ. Ten years after the film's release, tourists still pop in on their pilgrimage tour of Amelie's Montmartre, but it has largely gone back to being a comfy neighbourhood cafe – minus the tobacco counter, which has been nixed in favour of more sitting room. The scatter of tables and bright red chairs on the sloping pavement is the perfect vantage point from which to observe the lively street market.",
					image: '/assets/images/Moulins.jpg'
					
				},

				{
					name: "La Mer a Boire",
					description: "If it feels like you're on top of the world, it's because you are: La Mer a Boire overlooks the Parc de Belleville, one of the highest points in Paris, which offers a gorgeous vista of the cityscape all the way out to the Eiffel Tower. At the first sign of balmy weather, the large paved terrace is in high demand with the young local crowd, but inside is just as nice: the bright orange cafe offers free Wi-Fi, and serves as a gallery for cartoonists and graphic novelists, as well as a concert hall for young musicians on weekend nights.", 
					image: '/assets/images/Boire.jpg'
				},

				{
					name: "Eiffel Tower Restaurants",
					description: "The Eiffel Tower can offer its visitors the most breathtaking tables in Paris: where vistors will be entertained with a feast for their eyes as well as for their taste buds. With its different restaurants, the Tower has got it covered if you're looking for something to eat, from the simple snack to the finest French cuisine. What is better than eat something delicious and watch the city from the Eiffel Tower?",
					image: '/assets/images/EiffelTowerRestaurant.jpg'
				},

				
				]

			};
		}


}(angular));