var imagecount = 1;
		var total = 5;

		function slide(x) {

			var Image = document.getElementById("Bridge");
			
			if (imagecount > total) {
				imagecount = 1;
			}

			if (imagecount < 1) {
				imagecount = total;
			}
			Image.src = "BridgeGallery/bridge" + imagecount + ".jpg";
			imagecount = imagecount + x;
		}
