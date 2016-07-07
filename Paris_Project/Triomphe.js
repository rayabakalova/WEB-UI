var imagecount = 1;
		var total = 5;

		function slide(x) {

			var Image = document.getElementById("TriompheGallery");
			
			if (imagecount > total) {
				imagecount = 1;
			}

			if (imagecount < 1) {
				imagecount = total;
			}
			Image.src = "TriompheGallery/arc" + imagecount + ".jpg";
			imagecount = imagecount + x;
		}
