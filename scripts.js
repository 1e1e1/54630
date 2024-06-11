// 平滑滾動到錨點位置並考慮偏移量
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Konami Code
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let codePosition = 0;

document.addEventListener('keydown', function(e) {
    if (e.code === secretCode[codePosition]) {
        codePosition++;
        if (codePosition === secretCode.length) {
            showModal();
            codePosition = 0;
        }
    } else {
        codePosition = 0;
    }
});

// 顯示彈窗
function showModal() {
    const modal = document.getElementById('puddingModal');
    const span = document.getElementsByClassName('close')[0];
    
    modal.style.display = 'block';
    
    span.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('show');
        mainContent.classList.toggle('expanded');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('show');
        mainContent.classList.toggle('expanded');
    });

    const ctx = document.getElementById('experienceChart').getContext('2d');
    const experienceChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['水電工學徒', '網路銷售'],
            datasets: [{
                label: '工作經驗',
                data: [52, 20,], 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});