


function showsearch() {
  var input = document.getElementById('input');
  if (input.className === "search") {
    input.className += " show"
  } else {
    input.className = "search"
  }
}

function toggleDropdown() {
    let navbarToggle = document.getElementById("navbar-toggle");
    let dropdown = document.getElementById("dropdown");
    if (navbarToggle.className === 'navbar') {
        navbarToggle.className += ' responsive';

    } else {
        navbarToggle.className = 'navbar';
    }

    if (dropdown.className === 'menu-container') {
      dropdown.className += ' responsive';
    } else {
      dropdown.className = 'menu-container';
    }


}

var coll = document.getElementsByClassName('drop-btn');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

var pro = document.getElementsByClassName('pro');

for (i = 0; i < coll.length; i++) {
  pro[i].addEventListener("click", function(){
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


document.getElementById('checkbox').onchange = function() {
  document.getElementById('email').disabled = this.checked;
  if (this.checked) {
    document.getElementById('email').value = 'Anonymous';
    document.getElementById('email').required = false;
    document.getElementById('email').style.backgroundColor = 'transparent';
  } else {
    document.getElementById('email').value = '';
    document.getElementById('email').required = true;
    document.getElementById('email').style.backgroundColor = '#fff';
  }
}