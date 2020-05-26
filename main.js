window.addEventListener("scroll", e => {
	if(document.firstElementChild.scrollTop == 0) {
		document.body.classList.remove("scrolled")
	} else if(!document.body.classList.contains("scrolled")) {
		document.body.classList.add("scrolled")
	}
})