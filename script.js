let userData = {};

document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input for name and class
    const name = document.getElementById('name').value;
    const className = document.getElementById('class').value;

    // Store user data
    userData = {
        name: name,
        class: className,
        score: 0
    };

    // Hide the user form and display the quiz form
    document.getElementById('user-form').style.display = 'none';
    document.getElementById('quiz-form').style.display = 'block';
});

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Define the quiz questions and correct answers in an object
    const quizAnswers = {
        q1: 'A',
        q2: 'A',
        q3: 'C',
        q4: 'B',
        q5: 'A'
    };

    // Initialize the score
    let score = 0;

    // Loop through the questions and check the answers
    for (const question in quizAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === quizAnswers[question]) {
                score++;
            }
        }
    }

    // Update the user's score
    userData.score = score;

    // Calculate the percentage score
    const totalQuestions = Object.keys(quizAnswers).length;
    const percentageScore = (score / totalQuestions) * 100;

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Quiz Completed! ${userData.name} (${userData.class}) answered ${score} out of ${totalQuestions} questions correctly.</p>
                               <p>Your percentage score: ${percentageScore.toFixed(2)}%</p>`;

    // Hide the quiz form and display the result
    document.getElementById('quiz-form').style.display = 'none';
    resultElement.style.display = 'block';
});
