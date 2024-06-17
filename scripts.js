// 在这里定义图片的路径
const imagePath = '148987.png';

// 平滑滾動到錨點位置並考慮偏移量
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 获取目标元素的id
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // 计算目标位置
        const offsetPosition = targetElement.offsetTop - document.querySelector('header').offsetHeight;

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
    const ctx = document.getElementById('experienceChart').getContext('2d');
    const experienceChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['水電工學徒', '網路銷售'],
            datasets: [{
                label: '工作經驗',
                data: [52, 20,], // 假設的數據
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




document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.image-container img');
    let rotationInterval; // 保存 setInterval 的引用

    // 開始旋轉圖片
    function startRotation() {
        rotationInterval = setInterval(function () {
            const rotation = (parseInt(image.style.transform.replace('rotate(', '').replace('deg)', '')) || 0) + 1;
            image.style.transform = `rotate(${rotation}deg)`;
        }, 0.5);
    }

    // 停止旋轉圖片
    function stopRotation() {
        clearInterval(rotationInterval);
    }

    // 當滑鼠移到圖片上時，開始旋轉
    image.addEventListener('mouseenter', startRotation);

    // 當滑鼠從圖片上移開時，停止旋轉
    image.addEventListener('mouseleave', stopRotation);
});

