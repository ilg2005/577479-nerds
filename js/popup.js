var writeBtn = document.querySelector(".write-btn");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".close-btn");
var form = popup.querySelector(".popup-form");

var userName = popup.querySelector("#full-name");
var mail = popup.querySelector("#email");
var message = popup.querySelector("#text-area");

var isStorageSupport = true;

var storageName = "";
var storageMail = "";
  try {
    storageName = localStorage.getItem("userName");
    storageMail = localStorage.getItem("mail");
  } catch (err) {
    isStorageSupport = false;
  }

writeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");

  if (storageName && storageMail) {
      userName.value = storageName;
      mail.value = storageMail;
      message.focus();
    } else {
      userName.focus();
      }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
    if (!userName.value || !mail.value || !message.value) {
      evt.preventDefault();
      popup.classList.remove("popup-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("popup-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("mail", mail.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
        popup.classList.remove("popup-error");
      }
    }
  });
