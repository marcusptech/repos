// scroll effect code //

const translate = document.querySelectorAll('.translate');

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset; 
    
    translate.forEach(element=> {
        let speed = element.dataset.speed; 
        element.style.transform = `translateY(${scroll * speed}px)`;  
    })
} )

// end of scroll effect code //



// AJAX code for email submit button //
document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('pizzaOrder');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}

// end of code button//