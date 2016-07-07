var imagecount = 1;
		var total = 5;

		function slide(x) {

			var Image = document.getElementById("Concorde");
			
			if (imagecount > total) {
				imagecount = 1;
			}

			if (imagecount < 1) {
				imagecount = total;
			}
			Image.src = "ConcordeGallery/concorde" + imagecount + ".jpg";
			imagecount = imagecount + x;
		}
