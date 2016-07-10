var imagecount = 1;

function slide(elementId, path,  x) {
	
	var total = 4,
		Image = document.getElementById(elementId);
	
	if (imagecount > total) {
		imagecount = 1;
	}

	imagecount = imagecount + x;
	if (imagecount < 1) {
		imagecount = total;
	}
	Image.src = path + imagecount + ".jpg";

}
