var imagecount = 1;
		
function slide(x) {
	var total = 9,
	    Image = document.getElementById("Gallery");
			
		if (imagecount > total) {
			imagecount = 1;
		}

		imagecount = imagecount + x;
		if (imagecount < 1) {
			imagecount = total;
		}
		
		Image.src = "../PicturesGallery/img" + imagecount + ".jpg";

	}
