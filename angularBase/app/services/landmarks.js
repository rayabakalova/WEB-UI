(function (angular) {
	'use strict';

	angular
		.module('app')
		.factory('landmarks', service);

		service.$inject = ['$http'];

		function service($http) {

			return {

				paris: [

				{
					name: "About Paris",
					description: "Paris is the capital and most populous city of France. Situated on the river Seine in northern metropolitan France, it is in the centre of the Ile-de-France region. Paris is the home of the most visited art museum in the world, the Louvre, as well as the Musee d'Orsay, noted for its collection of French Impressionist art, and the Musee National d'Art Moderne, a museum of modern and contemporary art. The notable architectural landmarks of Paris include Notre Dame Cathedral (12th century); the Sainte-Chapelle (13th century); the Eiffel Tower (1889); and the Basilica of Sacre-Coeur on Montmartre (1914). In 2014 Paris received 22.4 million visitors, making it one of the world's top tourist destinations. Paris is also known for its fashion, particularly the twice-yearly Paris Fashion Week, and for its haute cuisine, and three-star restaurants. Most of France's major universities and grandes ecoles are located in Paris, as are France's major newspapers, including Le Monde, Le Figaro, and Liberation. The city is also a major rail, highway, and air-transport hub, served by the two international airports Paris-Charles de Gaulle and Paris-Orly. Opened in 1900, the city's subway system, the Paris Metro, serves 4.5 million passengers daily. Paris is the hub of the national road network, and is surrounded by three orbital roads: the Peripherique, the A86 motorway, and the Francilienne motorway in the outer suburbs.The association football club Paris Saint-Germain and the rugby union club Stade Français are based in Paris. The 80,000-seat Stade de France, built for the 1998 FIFA World Cup, is located just north of Paris in the commune of Saint-Denis. Paris hosts the annual French Open Grand Slam tennis tournament on the red clay of Roland Garros. Paris hosted the 1900 and 1924 Summer Olympics, the 1938 and 1998 FIFA World Cups, and the 2007 Rugby World Cup. Every July, the Tour de France of cycling finishes in the city.",
					image: '/assets/images/map2.jpg',

				},

				{
					name: "Eiffel Tower",
					description: "The Eiffel Tower, one of the must sees in Paris, can't be missed from any spot while walking around in the city. It was built by the French engineer Gustave Eiffel which was already famous at the time for building bridges. He spent several years building the Eiffel Tower as a monument for the World Exhibition in 1889. Although today, it is without doubt one of the most recognizable monuments in Europe, one that can be compared to the Statue of Liberty in New York, the Big Ben is London and the Taj Mahal in India, it was not supposed to be permanent when it was first introduced. After the Eiffel Tower was built, it faced a lot of criticism from Paris artistic and literary elite. The fact is, that the tower was almost torn down sometime in 1909 while the only reason it was eventually kept was due to its ability to provide a perfect platform for transmitting antennas. Slowly, the Eiffel Tower became a permanent part of Paris view, settling in the hearts of Parisians as the symbol of Paris providing it with the most beautiful and famous skyline during the evening. It is possible to climb up the stairs as far as the third floor. Going up to the top though is possible only using the elevator. From the top of the Eiffel Tower, Paris at 1,050 ft (320 meters) is very romantic, especially in the evening. You can reserve your ticket or book a guided tour online which will skip the lines as well.", 
					image: '/assets/images/eiffeltower.jpg',
					path: '/assets/images/Gallery/Reccomended/EiffelTowerGallery'
				},

				{
					name: "The Louvre",
					description: "At the top of Paris top 10 attractions, The Louvre Museum is in fact the largest art museum in the world and the home for one of the finest art collections anywhere to be seen including two of the most famous painted woman - the Mona Lisa and Venus de Milo just to name two out of the 30,000 exhibits displayed in the Louvre Museum. The Louvre Paris was originally built as a fortress around year 1200 and was reconstructed again around 1650 for the personal use of the king. It was in 1793 that the French revolutionists have decided that this should become French's first national museum. Carefully planning of the tour in the Louvre Museum is important and will help you make the most out of it rather than making your way through the crowds, coming out tired and most probably disappointed. Remember that this gigantic museum stretches for almost half a mile (750 meters). Our best advice for the first time visitor would be – decide upfront what are the works that you must see, go for those and then settle in one of the sections for a pleasant stroll through the works of art and historical artifacts. It was Francois the first and Louis the 14th who purchased most of these paintings and sculptures while the rest were contributed or purchased by Napoleon later to be returned to the original owner's family. The most famous smile in the world, better known as the Mona Lisa, was ordered by François I from Leonardo the Vinci. It gained most of glory after it was stolen in 1911 by a Louvre employee, who simply left the building with the painting under his coat. The entrance to the Louvre Museum Paris is a glass pyramid, one of the city's most distinct symbols and what has become a tourist attraction by itself as no photo album of Paris seems to be complete without it. Notice the contrast between the modern glass structure and the classic interiors and how well the natural light flows in through the huge geometrically designed glass. There are seven sub-galleries in the Louvre Museum distinctly defined by their content.",
					image: '/assets/images/louvre.jpg',
					path: '/assets/images/Gallery/Reccomended/LouvreGallery'
				},

				{
					name: "Arc de Triomphe",
					description: "One of the most popular attractions in Paris, Inspired by Rome's Arch of Titus, the Arc de Triomphe is located in Paris in the world’s largest traffic roundabout and is the biggest and tallest triumphal arch in the world - about 49 meters (161 ft.) high and 44 meters (144 ft.) wide. Arc de Triomphe (Paris) is located 2 kilometers northwest from the place de la Concorde in the middle of the well know and extremely busy \"Place Charles de Gaulle\". This 161 foot triumphal arch was commissioned by Napoleon in 1806 to honor his imperial victories but it is only 20 years after he died that the Arc de Triomphe was finished, in 1836. Some important events took place under the great Arc de Triomphe. The greatest state funeral, for one, was of Victor Hugo. His coffin was placed in 1885 here while many Parisians came to place their last respect. On the other hand, some of France most humiliating moments are also related to this place, notably in 1871 and 1940. The sights of German troops walking under the arch are not to be forgotten by the French people. Important tip - do not cross the square in order to reach it as this is Paris's busiest traffic circuit and this is either dangerous or practically impossible. Instead, use the easily accessible underground passage. It is well worth climbing the stairs to the top of the arch from which you can see the 12 radiating avenues that goes in and out of the circuit. You can view across the Champs-Elysees from the Arc all the way to the Place de la Concorde and the further away Musee du Louvre (the Louvre Museum). Before you leave, take a closer look at the Arc as it is also well known for its magnificent sculptures by Francois Rude. Pay a special notice to The Departure of the Volunteer, to the right of the arch when viewed from the Champs-Elysees. Save valuable time and money by getting Arc de Triomphe tickets in advance. Note that  you can get a free entrance to the Arc de Triomphe using the Paris Pass.",
					image: '/assets/images/triomphe.jpg',
					path: '/assets/images/Gallery/Reccomended/TriompheGallery/'
				},

				{
					name: "Tuileries Gardens",
					description: "The spectacular Tuileries Gardens (Paris), Jardin des Tuileries can be found just between the Louvre and the Place de la Concorde. It was designed in 1564 by Catherine de Medicis as a garden for the Tuileries Palace (for Louis XIV). The Tuileries Gardens are probably the most French garden you could find all across Paris, with fine rows of trees and well-formed paths. The garden has opened its gates for everyone to stroll in, back in 1667 but it only became a public park after the French Revolution. It was once the place to see and be seen in Paris and as of today, it is the place where locals meet to enjoy a nice afternoon walk or just relax. The Tuileries Gardens Paris takes its name from the fact that this area was once populated with rood tiles factories, made in a special oven called tuileries. The Tuileries Gardens were well documented by many impressionists’ painters such as Monet and Renoir which seems to love the lively colors reflected by the many flowers, grass and water. There are also huge 18 bronzes statues in the Tuileries Gardens created by Maillol. If you happen to be here in the summer (July and August), make sure you are taking a Ferris wheel ride to see the lovely views of the traditional funfair which takes places just besides Rue de Rivoli.",
					image: '/assets/images/tuileries.jpg',
					path: '/assets/images/Gallery/Outside/TuileriesGallery'
					
				},

				{
					name: "Palais Opera House",
					description: "The Palais Garnier National Opera House was constructed from 1857 to 1874 and designed by Charles Garnier. The neo-baroque landmark building is located on Boulevard des Capucines and is named after the architect in honor of the stunning and opulent architecture. The building was the first home of the Paris Opera Company and is now also home to the Paris Opera Ballet. The exquisite building exterior has seven arches on the lower level separated by allegorical figures representing the arts. On the second level there are seven openings separated by columns with bronze busts of famous composers. The façade is topped by a central green copper dome. On either side are figures representing poetry and harmony and topping the dome is a statue of Apollo. Inside there are interconnecting corridors and staircases leading up to different levels. The décor is in rich velvet, there are sumptuous sculptures of cherubs and nymphs as well as plenty of gold leaf. The breathtaking Grand Foyer has a ceiling mural painted by Paul-Jacques-Aime Baudry and large chandeliers the length of the 154 meter long room. Leading up to the Grand Foyer is the Grand Staircase of white marble with a balustrade of green and red marble. On pedestals along the staircase there are female figures and above the staircase is another ceiling canvases painted with Greek mythological figures. The opulence continues in the auditorium which is a traditional Italian horseshoe-shape, seating 1,979 and facing a proscenium arch stage. A large chandelier hangs in the middle of the ceiling surrounded by paintings by Marc Chagall. Each element of the Opera House has been perfected. The Paris Opera also houses the Paris Opera Library-Museum (Bibliotheque-Musee de l’Opera de Paris). It is possible to visit the Opera House to see a performance or to tour the building. When you visit on a tour you have access to the public areas, grand Foyer, Grand Staircase, the Opera Library-Museum, permanent collections, set models, art work and if there is no performance or rehearsal in progress you may get to see the auditorium as well. There are themed tours as well as self-guided audio tours.",
					image: '/assets/images/opera.jpg',
					path: '/assets/images/Gallery/Inside/Opera'
				},

				{
					name: "Sacre Coeur Basilica",
					description: "The Sacre Coeur is a church and a basilica, located in the top of the Montmartre which is also the highest point in the entire city. The Sacre Coeur Basilica (Paris) is not as old as it looks. Paul Adabie designed the basilica on the late 19th century and the constructions ended several years into the 20th century. It was built to recognize the end of the Franco-Prussian War. Step inside the Sacre Coeur Basilica to enjoy the lovely decorations and mosaics on the walls, the metal doors, the windows (all broken in 1944 and restored since) as well on the ceiling. The mosaic above the choir is considered one of the largest golden mosaics in Europe. Look for the \"La Savoyarde\" - the 19 tons bell which makes it one of the heaviest in the world. The climb up to the gallery in the inner dome (271 foot high) is well worth the effort as the view is simply stunning. However, if you choose not to climb, you can still admire the view while standing on the front stairs of the Sacre Coeur Basilica. At the bottom of the hill you will find some amusements for kids which may also enjoy the ride in the small cables train up the hill. Try to pay the visit either in the morning (early) or evening (also early) and try to avoid visiting on a Sunday as it may become quite busy then.",
					image: '/assets/images/basilica.jpg',
					path: '/assets/images/Gallery/Inside/Basilica'
				},

				{
					name: "Disneyland Paris",
					description: "Disneyland Paris takes the crown for being the biggest and best theme park in the vicinity of Paris. Kids and adults alike will never forget the first time they shook hands with Mickey Mouse or got a hug from Goofy – there are some experiences that words simply cannot do justice to. Disneyland Paris is divided into the Disneyland and Disney Studios parks, which are both must-sees to say the least. The Disneyland Park is where everyone's favorite characters come to life in their most iconic backdrops. Explore Main Street USA for a taste of the States, Frontierland to live out your Wild West dreams, Adventureland to rub shoulders with pirates and magical genies, Discoveryland to explore the stars in the sky and finally Fantasyland for a tour of Sleeping Beauty's Castle and a walk through Alice in Wonderland's Labyrinth. The Disneyland Park at Disneyland Paris has a constantly changing timetable of events and spectacles, though you can guarantee that any time of year there will be singing, dancing and magical fireworks to round off a day of adrenalin-pumping rides and heart-warming attractions.",
					image: '/assets/images/disney.jpg',
					path: '/assets/images/Gallery/Outside/DisneyLand'
				},

				{
					name: "River Cruise",
					description: "Cruise up the majestic Seine and see how Paris famous sites are revealed from a new perspective. This cruise comes for free with the Paris Pass. From the water it is possible to see the bridges and monuments of Paris as you could never hope to from land. This hour long river cruise delivers spectacular and hidden views of this magnificent city. An informative historical and cultural commentary is available in English and on-board guides occasionally take the microphone to inform Paris visitors about current events, exhibits, and festivals.The main Bateaux Parisiens pier is located close to the Eiffel Tower. Do not miss this wonderful opportunity for any Paris visitor to better understand the geography of the city, to learn more of the history, and to see this city from a new perspective. While in Paris don't miss out on one of it's well known shows. River Cruise presents Eiffel Tower, Paris Moulin Rouge Show and Seine River Cruise - an excellent choice for everyone. Note that  you can get a free entrance to the River Cruise using the Paris Pass.",
					image: '/assets/images/sena.jpg'
				},

				{
					name: "Alexander bridge",
					description: "Alexander Bridge is located right between all of the best attractions in Paris and is considered as the most decorated bridge in Paris, this bridge is well worth a visit. The Alexander Bridge Paris, with its Art Nouveau lamps, winged horses statuses and nymphs connects the two banks of the Seine from the Champs-Elysees quarter to the Eiffel Tower quarter. The constructions, an impressive achievement for the time, started by the end of the 19th century to honor Tsar Alexander III and lasted several years until thje Universal Exposition of 1900. Alexander Bridge, Paris is a nice visit if you are coming from the Concorde square or Champs Elyse to the Eiffel tower or the Hotel des Invalides. Notice the similarities between the bridge and the Grand Palace behind it on the right bank.",
					image: '/assets/images/bridge.jpg'
				},

				{
					name: "Place de la Concorde",
					description: "The Place de la Concorde (Paris) is located at the very beginning of the Champs-Elysees avenue and is an important site in Paris landmarks and attractions list. It was once named after Louis the 15th and is now one of the major touristic squares in Paris. As it happens, Place de la Concorde Paris is also the largest square in the French capital. It was Muhammad Ali, viceroy and pasha of Egypt, who took the impressive 3300-year-old obelisk from the temple of Ramses at Thebes and gave it as a present to France in 1831. But even before the obelisk was placed in the Place de la Concorde, Paris most visited square was quite famous when it became the Place de la Revolution (The Square of the revolution), where Louis the 15th, Marie-Antoinette, and some 2,500 others lost their heads to the guillotine in the late 18th century. Notice the nice 18th-century buildings facing the Place de la Concorde, one of them is the Hotel Crillon which was originally built by Gabriel, architect of Versailles's Petit Trianon as a private home. Take your time to stroll around the square and watch the nice female statues placed in the corners of the square. These statuses represent the eight largest cities in France. Place de la Concorde by night is simply remarkable. Seine River Cruise and Paris Illuminations Tour is one of the best choices to get into that special Paris atmosphere.",
					image: '/assets/images/concorde.jpg'
				},

				{
					name: "Luxembourg Gardens",
					description: "With flowers all over the Luxembourg Gardens (Paris), green grass and statuses spread all over its 23-hectares, Parisians of all ages comes to relax and stroll through the formal gravel paths of Jardin du Luxemburg in the nice sunny days. In its center, stands the glorious Palais du Luxembourg built by Marie de Medici of Henri the 9th in 1612. The palace was used for many functions throughout the history while since 1958 it is used to host the French Senate. If you're further interested, you can join a guided tour inside the palace. These start at 10.30 AM but not daily so advance reservations and schedule checking is a must. Children may also find the Luxembourg Gardens Paris to be interesting and amusing by riding a pony, sailing one of the toy boats or going to the southern part of the garden where they will find the urban orchards alongside the Rucher du Luxembourg where honey is produced. Just outside the park, you will find the Saint Sulpices church of God. This classical building has mural paintings by the French painter Eugene Delacroix, as well as beautiful stained-glass windows and sculptures. While in the park, be sure not to miss the Fontaine des Medicics. While in the Luxembourg Gardens, Paris may not seem the busy city that it is - drop by here if you truly need to relax. Paris is best seen by foot or bike. The Small-Group Luxembourg Gardens Walking Tour in Paris offers you the chance to experience Luxembourg Gardens up close and personal.",
					image: '/assets/images/luxembourg.jpg'
				},

				{
					name: "Pantheon",
					description: "The Pantheon (Paris), a great example of an 18th-century's neoclassicism architecture, was ordered in 1750 as an abbey church to honor St. Genevieve (the patron saint of Paris). Its design was inspired by a Greek cross with a dome somewhat similar to St. Paul's in London. The construction works of the Pantheon Paris have started 15 years later but due to financial problems it was presented to the public on in 1789, probably not the best time for such an fancy monument to be open in Paris. The result however is an enormous dome that looks over and seen from all over the Left Bank of the Seine. The building of the Pantheon (Paris) has changes its purpose at some point to become a mausoleum that holds the remains of some of France's most famous people such as Victor Hugo, Emil Zola and Marie Curie. While entering the Pantheon, Paris looks very artistic when you look at the beautiful wall paintings of St. Genevieve life.",
					image: '/assets/images/pantheon.jpg'
				},

				{
					name: "Versailles",
					description: "Less than 30 minutes from Paris is the Palace of Versailles, one of the few monarch homes your can tour fully - an amazingly conserved estate with impressive French gardens and a Palace. The Palace of Versailles Paris is not a single building. Instead, the estate includes the main Palace, the Grand Trianon, Marie-Antoinett's Estate and the 1700-acre Versailles Garden. The Chateau contains 700 individual rooms each more spectacular and lavish than the next. The 23-kt gold leaf on woven silk wall coverings and framing exquisitely painted ceiling panels, smothering statues and sculptures, encasing lamps, trimming chandeliers and forming platters, bowls, and assortments of serving dishes speaks of how few ways the extremely rich could invest their money.",
					image: '/assets/images/versailles.jpg'
				},

				{
					name: "Notre Dame de Paris",
					description: "Many Parisians and tourists alike consider this place to be one of Paris top 10 attractions alongside the Holy Chapel, the Eiffel Tower, The Louvre Museum and others.The Notre Dame Cathedral (Paris), the most visited site in Paris (10 million tourists each year), lies in the true heart of Paris and by some even of entire France. With so many people visiting the Notre Dame Cathedral of Paris unforgettable setting on the Seine, it has always been one of Paris top attractions. The Notre Dame Cathedral Paris is not only a Gothic architecture masterpiece but a site which was also the focus of Catholic Paris for 700 years. Although the cathedral is not France's oldest or largest cathedral, it has very little completion in beauty and architectural harmony.",
					image: '/assets/images/notreDame.jpg'
				},

				{
					name: "Champs-Elysees",
					description: "Champs Elysees Avenue (Paris), named after the 'Elysian Fields' where happy souls live in the hereafter according to Greek myth, runs through Paris for 2-km (1¼ mile) from the Place de la Concorde until the Arc de Triumph. While walking in Paris, In Champs Elysees Avenue, the city stands for the style and happiness of living in France, and on top of the massive traffic and fast food restaurants, the Avenue des Champs Elysees still sparkles. Along the way, you will see fancy brands such as Louis Vitton and Cartier but also cinemas and cafes. In some magical way, the avenue always feels like there is something happening in this avenue - the stores are open up until late in the evening and many are open even on Sunday, something which is not a common practice in Paris and certainly not in France. The Champs Elysees Avenue (Paris) is unarguably one of the famous streets in the world and is also considered by real estate experts to be one of the most expensive real estate streets in Europe. The avenue is also where the last part of the Tour de France bicycle race starts (this happens in late July, check out their web site for exact date each year). Also the parades on Bastille Day (July 14) and Armistice Day (November 11) take place in this fancy street. Walking in the Champs Elysees Avenue, Paris looks shiny, luxirious, This is once spot you want to be if you're looking for some great shopping. While in Paris, avoid the long lines and save money by getting Champs Elysees tickets in advance.",
					image: '/assets/images/champs.jpg'
				},

				{
					name: "La Defense",
					description: "In 1982 under the tutelage of French President Mitterrand, a contest was started challenging all architectural designers who wished to participate to design a Grand Arche de la Defense. The purpose was to recognize the progress of humanity and humane treatment by international politics. President Mitterrand wanted to erect a monument that contrasted with the famous monument to war, the Arce de Triomphe. A Danish architect and engineer, together created the winning design. It has been described as a hypercube that was set in place by an otherworldly force. Until 2010, visitors could go to the top and have a 360-degree view of Paris. Whether seen during the day or evening, the glass-covered frame and Carrara marble structure glistens in the light. In 1989, the Grand Arche de la Defense was opened to coincide with the French Revolution’s Bicentennial celebrations. It is an office building for government offices on one side and a private museum on the other. There are additional spaces within the building that is now being considered for use as office space for private firms. In 2010, there were some problems with the elevator to the roof and it was shut down. In addition, the museum and the restaurant that were accessed by the elevator were also closed. Sadly, it has not been fixed at the time of the writing. If you can get to the district in time for sunset, watching the sunset in the center of the arch is breathtakingly beautiful as the glass and marble reflect and magnify the colors.",
					image: '/assets/images/defense.jpg'
				},

				{
					name: "Moulin Rouge",
					description: "The Moulin Rouge (Red mill) is an iconic cabaret theatre in Paris, the distinctive red windmill protrudes above the theatre roof on Boulevard de Clichy in the Pigalle District. the venue first opened its doors in 1889 as a music hall and as the owners, Joseph Oller and Charles Zidler, predicted it soon became a \"the first palace of women.\" The cabaret shows of the Moulin Rouge feature tall, beautiful women who show off their long legs and exposed breasts in classy elaborate costumes. In the early days the music hall had a reputation as a place for vulgar men to gape at women with loose morals but as time went by the venue gained a reputation as an exclusive, typically Parisian extravaganza. It was here that the Can-Can dance was born and to this day it is one of the highlights of the show. In the late 1800s Henri de Toulouse-Lautrec immortalized Moulin Rouge in a number of his posters. With the venue's new cleaned-up image it attracted a more refined clientele which came to enjoy the now iconic Can-Can dance which the dancing girls had perfected.",
					image: '/assets/images/rouge.jpg'
				},

				]

			};
		}


}(angular));