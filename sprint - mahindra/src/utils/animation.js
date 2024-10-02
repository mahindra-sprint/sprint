// Menu Sidebar Toggle
export function setupMenuToggle() {
    const menuBar = document.querySelector('.conteudo nav .bx.bx-menu');
    const Menu = document.querySelector('.menu');
  
    menuBar.addEventListener('click', () => {
      Menu.classList.toggle('close');
    });
  
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        Menu.classList.add('close');
      } else {
        Menu.classList.remove('close');
      }
    });
  }
  
  // Active state for side menu links
  export function setupSideLinks() {
    const sideLinks = document.querySelectorAll('.menu .side-menu li a:not(.logout)');
    sideLinks.forEach(item => {
      const li = item.parentElement;
      item.addEventListener('click', () => {
        sideLinks.forEach(i => i.parentElement.classList.remove('active'));
        li.classList.add('active');
      });
    });
  }
  
  // Search Button Toggle
  export function setupSearchToggle() {
    const searchBtn = document.querySelector('.conteudo nav form .form-input button');
    const searchBtnIcon = document.querySelector('.conteudo nav form .form-input button .bx');
    const searchForm = document.querySelector('.conteudo nav form');
  
    searchBtn.addEventListener('click', function (e) {
      if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        searchBtnIcon.classList.toggle('bx-x');
        searchBtnIcon.classList.toggle('bx-search');
      }
    });
  
    window.addEventListener('resize', () => {
      if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
      }
    });
  }
  
  // Theme Toggle
  export function setupThemeToggle() {
    const toggler = document.getElementById('theme-toggle');
    toggler.addEventListener('change', function () {
      document.body.classList.toggle('dark', this.checked);
    });
  }
  
  // Carousel Slide Functionality
  export function setupCarousel() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carrossel > div');
    const totalSlides = slides.length;
  
    function showSlide(index) {
      const carrossel = document.querySelector('.carrossel');
      carrossel.style.transform = `translateX(${-index * 100}%)`;
    }
  
    function changeSlide(n) {
      slideIndex = (slideIndex + n + totalSlides) % totalSlides;
      showSlide(slideIndex);
    }
  
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
  
    setInterval(() => {
      slideIndex = (slideIndex + 1) % totalSlides;
      showSlide(slideIndex);
    }, 3000);
  
    showSlide(slideIndex);
  }
  
  // Quiz Functionality
  export function setupQuiz() {
    const questions = [
      "Quem foi o primeiro piloto da Mahindra Racing a vencer uma corrida na Fórmula E?",
      // Mais perguntas...
    ];
  
    const answers = [
      ["Nick Heidfeld", "Felix Rosenqvist", "Jérôme d'Ambrosio", "Pascal Wehrlein"],
      // Mais respostas...
    ];
  
    const correctAnswers = [1, 0, 2, 2, 2, 1, 0, 0, 0, 2];
  
    let currentQuestion = 0;
    let correct = 0;
    let incorrect = 0;
  
    const questionElement = document.getElementById('question');
    const numeroElement = document.getElementById('numero');
    const optionButtons = [
      document.getElementById('0'),
      document.getElementById('1'),
      document.getElementById('2'),
      document.getElementById('3')
    ];
  
    function displayQuestion() {
      questionElement.textContent = questions[currentQuestion];
      numeroElement.textContent = `#${currentQuestion + 1}`;
      optionButtons.forEach((button, index) => {
        button.textContent = answers[currentQuestion][index];
      });
    }
  
    function updateChart() {
      const ctx = document.getElementById('progressChart').getContext('2d');
      const progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Acertos', 'Erros', 'Progresso'],
          datasets: [{
            label: 'Seu progresso!',
            data: [correct, incorrect, currentQuestion],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: { beginAtZero: true, max: questions.length }
          }
        }
      });
  
      progressChart.update();
    }
  
    optionButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (index === correctAnswers[currentQuestion]) correct++;
        else incorrect++;
  
        currentQuestion++;
        if (currentQuestion < questions.length) displayQuestion();
        else alert(`Quiz concluído! Acertos: ${correct}, Erros: ${incorrect}`);
  
        updateChart();
      });
    });
  
    displayQuestion();
    updateChart();
  }
  
  // Modal Functionality
  export function setupModal() {
    function openModal(modalId) {
      document.getElementById(modalId).style.display = "block";
    }
  
    function closeModal(modalId) {
      document.getElementById(modalId).style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
      }
    };
  }
  