var imagecount = 1;
		var total = 10;

		function slide(x) {

			var Image = document.getElementById("Gallery");
			
			if (imagecount > total) {
				imagecount = 1;
			}

			if (imagecount < 1) {
				imagecount = total;
			}
			Image.src = "Gallery/img" + imagecount + ".jpg";
			imagecount = imagecount + x;
		}
