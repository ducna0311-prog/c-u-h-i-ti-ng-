// --- BƯỚC 1: DỮ LIỆU CÂU HỎI ---
// (Copy dữ liệu bạn đã chuẩn bị ở trên vào đây)
const quizData = [
  {
    question: "1 + 1 bằng mấy?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    correct: "B"
  },
  {
    question: "Thủ đô của Việt Nam?",
    options: {
      A: "Hà Nội",
      B: "TPHCM",
      C: "Đà Nẵng",
      D: "Hải Phòng"
    },
    correct: "A"
  },
  {
    question: "Mặt Trời mọc ở đâu?",
    options: {
      A: "Hướng Nam",
      B: "Hướng Tây",
      C: "Hướng Đông",
      D: "Hướng Bắc"
    },
    correct: "C"
  }
];

// --- BƯỚC 2: LẤY CÁC THÀNH PHẦN HTML ---
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const resultsContainer = document.getElementById('results-container');

// --- BƯỚC 3: HÀM HIỂN THỊ CÂU HỎI ---
function displayQuiz() {
    let output = []; // Mảng để chứa HTML
    
    quizData.forEach((currentQuestion, questionIndex) => {
        // Mảng chứa các lựa chọn (A, B, C, D)
        let optionsOutput = [];

        // Lặp qua từng lựa chọn trong 'options'
        for (let letter in currentQuestion.options) {
            optionsOutput.push(
                `<label class="option">
                    <input type="radio" name="question${questionIndex}" value="${letter}">
                    ${letter}: ${currentQuestion.options[letter]}
                </label>`
            );
        }

        // Thêm câu hỏi và các lựa chọn vào mảng output
        output.push(
            `<div class="question-block">
                <div class="question-text">${questionIndex + 1}. ${currentQuestion.question}</div>
                <div class="options">
                    ${optionsOutput.join('')}
                </div>
            </div>`
        );
    });

    // Hiển thị toàn bộ HTML lên trang web
    quizContainer.innerHTML = output.join('');
}

/* --- THAY THẾ HÀM SHOWRESULTS CŨ BẰNG HÀM MỚI NÀY --- */

// --- BƯỚC 4: HÀM CHẤM ĐIỂM VÀ HIỂN THỊ KẾT QUẢ ---
function showResults() {
    let score = 0; // Điểm số
    
    // Lấy tất cả các khối câu hỏi để tham chiếu
    // (Chúng ta cần làm điều này để tìm các label bên trong)
    const allQuestionBlocks = document.querySelectorAll('.question-block');

    // Lặp qua từng câu hỏi
    quizData.forEach((currentQuestion, questionIndex) => {
        const correctAnswer = currentQuestion.correct;
        
        // Tìm ra lựa chọn mà người dùng đã chọn
        const selector = `input[name="question${questionIndex}"]:checked`;
        const userAnswer = (document.querySelector(selector) || {}).value;

        // 1. Tính điểm
        if (userAnswer === correctAnswer) {
            score++;
        }

        // 2. Lấy tất cả các input radio cho câu hỏi này
        // (allQuestionBlocks[questionIndex] chính là <div> của câu hỏi hiện tại)
        const inputs = allQuestionBlocks[questionIndex].querySelectorAll('input[type="radio"]');

        // Lặp qua các lựa chọn (A, B, C, D) của câu hỏi này
        inputs.forEach(input => {
            const optionValue = input.value;
            const optionLabel = input.parentElement; // Đây là thẻ <label> chứa input

            // Vô hiệu hóa tất cả các lựa chọn sau khi nộp
            input.disabled = true;

            // Nếu đây là đáp án ĐÚNG
            if (optionValue === correctAnswer) {
                // Luôn tô màu xanh cho đáp án đúng
                optionLabel.classList.add('correct'); 
            } 
            // Nếu đây là đáp án người dùng chọn VÀ nó SAI
            else if (optionValue === userAnswer && userAnswer !== correctAnswer) {
                // Tô màu đỏ cho đáp án sai mà người dùng đã chọn
                optionLabel.classList.add('incorrect');
            }
        });
    });

    // 3. Hiển thị kết quả
    resultsContainer.innerHTML = `Bạn đã trả lời đúng ${score} / ${quizData.length} câu!`;
    
    // 4. Vô hiệu hóa nút nộp bài
    submitButton.disabled = true;
    submitButton.style.backgroundColor = '#aaa';
}

// --- BƯỚC 5: KHỞI TẠO VÀ GẮN SỰ KIỆN ---

// Hiển thị các câu hỏi ngay khi tải trang
displayQuiz();

// Gắn sự kiện 'click' cho nút "Nộp bài"
submitButton.addEventListener('click', showResults);