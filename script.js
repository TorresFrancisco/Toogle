const section = document.querySelector('section');
        const toggle = document.getElementById('toggle');
        toggle.onclick = function(){
          toggle.classList.toggle('active');
          section.classList.toggle('active');
        }