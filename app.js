const questions = [
    {
      text: "Are you providing authentication for multiple applications under a single organization?",
      yes: 1,
      no: 2
    },
    {
      text: "Do the applications interact with each other and need to share data or permissions?",
      yes: "App Suite",
      no: "Auth as a Service"
    },
    {
      text: "Are the users of this system primarily individual consumers or end users?",
      yes: 3,
      no: 4
    },
    {
      text: "Are you facilitating transactions or services through another business to reach end users?",
      yes: "Business to Business to Consumer (B2B2C)",
      no: "Authorization Hub for Social"
    },
    {
      text: "Are the users employees of other businesses or organizations accessing your application?",
      yes: "Business to Business to Employee (B2B2E)",
      no: 5
    },
    {
      text: "Is this primarily for API interactions or data exchange between systems without human interaction?",
      yes: "Machine to Machine Communication (M2M)",
      no: 6
    },
    {
      text: "Are you connecting or brokering authentication through multiple identity providers (IdPs)?",
      yes: "Identity Broker",
      no: 7
    },
    {
      text: "Do you need centralized management for user consents and delegated API access?",
      yes: "API User Consents and Delegated Access",
      no: "Data Store"
    }
  ];
  
  const useCases = {
    "App Suite": {
      description: "Seamlessly transition users across applications in a suite with unified login.",
      diagrams: ["Cross-app SSO flow"],
      documentationLink: "https://fusionauth.io/docs/app-suite"
    },
    "Auth as a Service": {
      description: "Easily add authentication with configuration-based features (e.g., social logins, MFA, passkeys).",
      diagrams: ["Authentication flow", "MFA options", "Token management"],
      documentationLink: "https://fusionauth.io/docs/auth-as-a-service"
    },
    "Business to Business to Consumer (B2B2C)": {
      description: "Offer a SaaS package where customers have consumers as end-users.",
      diagrams: ["Organization-specific login", "Permissions schema"],
      documentationLink: "https://fusionauth.io/docs/b2b2c"
    },
    "Business to Business to Employee (B2B2E)": {
      description: "SaaS solution accessed by customer employees, often managed via third-party directories.",
      diagrams: ["SCIM", "SAML"],
      documentationLink: "https://fusionauth.io/docs/b2b2e"
    },
    "Machine to Machine Communication (M2M)": {
      description: "Secure inter-application communication using client credentials and access tokens.",
      diagrams: ["M2M authentication flow", "Token management"],
      documentationLink: "https://fusionauth.io/docs/m2m"
    },
    "Identity Broker": {
      description: "Serve as an identity broker within a private cloud or data center for customer-specific IdPs.",
      diagrams: ["Identity provider integration flow"],
      documentationLink: "https://fusionauth.io/docs/identity-broker"
    },
    "Authorization Hub for Social": {
      description: "Centralize third-party API tokens for social providers like Google and Facebook.",
      diagrams: ["Token lifecycle and storage"],
      documentationLink: "https://fusionauth.io/docs/authorization-hub-for-social"
    },
    "API User Consents and Delegated Access": {
      description: "Enable users to delegate API access via OAuth grants.",
      diagrams: ["OAuth grant and consent flow"],
      documentationLink: "https://fusionauth.io/docs/api-user-consents"
    },
    "Data Store": {
      description: "Use FusionAuth as a user data store with custom login flows and UX control.",
      diagrams: ["Custom workflows"],
      documentationLink: "https://fusionauth.io/docs/data-store"
    }
  };
  
  let answers = [];
  
  function displayQuestion(index) {
    const question = questions[index];
    const questionList = document.getElementById("question-list");
  
    // Create a new question block
    const questionBlock = document.createElement("div");
    questionBlock.classList.add("question-block");
    questionBlock.setAttribute("id", `question-${index}`);
  
    const questionText = document.createElement("p");
    questionText.classList.add("question-text");
    questionText.textContent = question.text;
    questionBlock.appendChild(questionText);
  
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
  
    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.onclick = () => handleAnswer(index, 'yes', yesButton, noButton);
    buttonContainer.appendChild(yesButton);
  
    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.onclick = () => handleAnswer(index, 'no', noButton, yesButton);
    buttonContainer.appendChild(noButton);
  
    questionBlock.appendChild(buttonContainer);
    questionList.appendChild(questionBlock);
  }
  
  function handleAnswer(index, answer, selectedButton, otherButton) {
    // Store the answer
    answers[index] = answer;
  
    // Set selected style
    selectedButton.classList.add("selected");
    otherButton.classList.remove("selected");
  
    const next = questions[index][answer];
  
    // Clear all subsequent questions when a new answer is chosen
    clearQuestionsFrom(index + 1);
  
    // Display the next question or result
    if (typeof next === "string") {
      displayResult(next);
    } else {
      displayQuestion(next);
    }
  }
  
  function clearQuestionsFrom(index) {
    const questionList = document.getElementById("question-list");
  
    // Remove each question block starting from the given index
    let nextQuestion = document.getElementById(`question-${index}`);
    while (nextQuestion) {
      questionList.removeChild(nextQuestion);
      index++;
      nextQuestion = document.getElementById(`question-${index}`);
    }
  
    // Hide the result container if it's visible
    document.getElementById("result-container").style.display = "none";
  }
  
  function displayResult(useCase) {
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";
  
    const resultText = document.getElementById("result-text");
    resultText.innerHTML = `
      <h2>Your use case is: ${useCase}</h2>
      <p>${useCases[useCase].description}</p>
      <h3>Suggested Diagrams:</h3>
      <ul>${useCases[useCase].diagrams.map(diagram => `<li>${diagram}</li>`).join('')}</ul>
      <p><a href="${useCases[useCase].documentationLink}" target="_blank">Read more in the documentation</a></p>
    `;
  }
  
  // Start with the first question
  document.addEventListener("DOMContentLoaded", () => displayQuestion(0));
  