document.querySelectorAll(".fade-in").forEach((el) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          el.classList.add("fade-in-visible");
        }, parseInt(el.dataset.delay) || 0);
      }
    });
  });
  observer.observe(el);
});

document.querySelectorAll("[data-typewrite]").forEach((el) => {
  const messages = el.dataset.typewrite.split(",");
  let index = 0;
  let currentMessage = 0;
  const write = () => {
    if (index < messages[currentMessage].length) {
      index++;
      el.innerHTML += messages[currentMessage][index - 1];
      setTimeout(write, 100);
    } else {
      const del = () => {
        if (index > 0) {
          el.innerHTML = el.innerHTML.substring(0, el.innerHTML.length - 1);
          index--;
          setTimeout(del, 100);
        } else {
          currentMessage++;
          if (currentMessage === messages.length) currentMessage = 0;
          index = 0;
          setTimeout(write, 100);
        }
      };
      setTimeout(del, 5000);
    }
  };
  write();
});

/**
 * @param {HTMLFormElement} form
 */
function serializeArray(form) {
  const elements = {};
  for (let x = 0; x < form.elements.length; x++) {
    if (form.elements.item(x).tagName !== "BUTTON") {
      elements[form.elements.item(x).id] = form.elements.item(x).value;
    }
  }
  return elements;
}

document.querySelectorAll("form.js-form").forEach((el) => {
  el.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      const data = JSON.stringify(serializeArray(event.target));
      fetch(event.target.action, {
        method: "post",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            document
              .querySelectorAll('[data-bs-dismiss="modal"]')
              .forEach((el) => el.click());
            window.alert("Form sent successfully, we will email you with a response shortly");
          }
        })
        .catch(console.error);
    },
  );
});

//if a ? is entered, ask for email

document.querySelectorAll("[data-copy]").forEach((el) => {
  const text = el.dataset.copy;
  el.addEventListener("click", () => {
    navigator.clipboard.writeText(text).then(() => {
      window.alert(`Copied ${text} to clipboard!`);
    }).catch(() => {
      window.alert("Oh noes! An unknown error occured.");
    });
  });
});

function readMoreAction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function readMoreAction2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("readMore2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
}

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');
  
  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    }); 
    // window.addEventListener
  }
  // if

}); 


document.addEventListener("DOMContentLoaded", function(){
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
  
    document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
  
      everyitem.addEventListener('mouseover', function(e){
  
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
          nextEl.classList.add('show');
        }
  
      });
      everyitem.addEventListener('mouseleave', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
          nextEl.classList.remove('show');
        }
  
  
      })
    });
  
  }
  // end if innerWidth
  }); 
