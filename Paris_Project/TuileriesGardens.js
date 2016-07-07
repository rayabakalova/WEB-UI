var imagecount = 1;
		var total = 5;

		function slide(x) {

			var Image = document.getElementById("Tuileries");
			
			if (imagecount > total) {
				imagecount = 1;
			}

			if (imagecount < 1) {
				imagecount = total;
			}
			Image.src = "TuileriesGallery/garden" + imagecount + ".jpg";
			imagecount = imagecount + x;
		}
