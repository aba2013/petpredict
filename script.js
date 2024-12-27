// Define the pet recommendations based on the quiz answers
const pets = {
    dog: {
        house: {
            low: "Golden Retriever",
            medium: "Beagle",
            high: "Border Collie"
        },
        apartment: {
            low: "Chihuahua",
            medium: "Pug",
            high: "French Bulldog"
        },
        condo: {
            low: "Shih Tzu",
            medium: "Cocker Spaniel",
            high: "Australian Shepherd"
        }
    },
    cat: {
        house: {
            low: "Maine Coon",
            medium: "Siamese",
            high: "Bengal"
        },
        apartment: {
            low: "Persian",
            medium: "Russian Blue",
            high: "Sphynx"
        },
        condo: {
            low: "Ragdoll",
            medium: "Abyssinian",
            high: "Siberian"
        }
    }
};

// Handle the quiz form submission
document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const livingSituation = document.getElementById('livingSituation').value;
    const timeForExercise = document.getElementById('timeForExercise').value;
    const petType = document.getElementById('petType').value;

    const petRecommendation = pets[petType][livingSituation][timeForExercise];

    document.getElementById('results').style.display = 'block';
    document.getElementById('petRecommendation').innerText = `We recommend the ${petRecommendation} for you!`;

    // Hide the quiz section
    document.querySelector('.quiz').style.display = 'none';
});

// Reset the page when getting a new recommendation
document.getElementById('newRecommendation').addEventListener('click', function () {
    document.querySelector('.quiz').style.display = 'block';
    document.getElementById('results').style.display = 'none';
});
