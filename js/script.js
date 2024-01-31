let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



// FORM CONTACT US

function BLEEDINGROSES() {
  const name =
      document.forms.contactUs.name.value;
  const email =
      document.forms.contactUs.email.value;
  const product =
      document.forms.contactUs.product.value;

  console.log(name, email, product);

  if (name === ""
  || name.includes('0') || name.includes('1')
  || name.includes('2') || name.includes('3')
  || name.includes('4') || name.includes('5')
  || name.includes('6') || name.includes('7')
  || name.includes('8') || name.includes('9')) 
{
  window.alert
  ("Please enter your name properly.");
  name.focus();
  return false;
}

if (email === "" || !email.includes('@')) {
  window.alert
  ("Please enter a valid e-mail address.");
  email.focus();
  return false;
}

if (product === "") {
  window.alert
  ("Please select the product you want to.");
  product.focus();
  return false;
}

return true;

}