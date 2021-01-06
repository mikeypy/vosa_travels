const menuToggle = document.querySelector('.toggle .bars');
const menuToggle2 = document.querySelector('.toggle .times');

const showcase = document.querySelector('.showcase');

      menuToggle.addEventListener('click', () => {
        document.querySelector('.toggle .bars').style.visibility = 'hidden';
        document.querySelector('.toggle .times').style.display = 'block';
        showcase.classList.toggle('active');
      })

      menuToggle2.addEventListener('click', () => {
        document.querySelector('.toggle .bars').style.visibility = 'visible';
        document.querySelector('.toggle .times').style.display = 'none';
        showcase.classList.toggle('active');
      })

      console.log(menuToggle2)