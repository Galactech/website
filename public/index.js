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
            window.alert("Form sent successfully!");
          }
        })
        .catch(console.error);
    },
  );
});