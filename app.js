// Define questions for determining the appropriate use case
const questions = [
    {
      text: "Who are your primary end users?",
      options: {
        "Consumers": 1, // Leads to consumer-oriented questions
        "Employees of other businesses": "Business to Business to Employee (B2B2E)", // Leads to employee-focused use cases like B2B2E and Identity Broker
        "Machines": "Machine to Machine Communication (M2M)" // Directly concludes M2M if end users are machines
      }
    },
    {
      text: "Are your customers businesses or individual consumers?",
      options: {
        "Businesses": "Business to Business to Consumer (B2B2C)", // Directly concludes B2B2C for business customers
        "Individual Consumers": "Auth as a Service", // Further filters consumer-focused options
       
      }
    },
    {
      text: "Do users need access across multiple applications under a single login?",
      options: {
        "Yes, with seamless transition between applications": "App Suite", // Concludes App Suite
        "No, each application should have isolated access": 7 // Continues to isolated access cases
      }
    },
    {
      text: "Is this system primarily for API interactions or data exchange without human interaction?",
      options: {
        "Yes, primarily API and system-to-system communication": "Machine to Machine Communication (M2M)", // Concludes M2M
        "No, primarily user-focused interactions": 8 // Continues to user-focused cases
      }
    },
    {
      text: "Do you require isolated access and settings for each client or organization?",
      options: {
        "Yes, each organization should have separate settings and isolated data": "Multi-Tenant Data Store", // Multi-tenant storage
        "No, they share the same settings and access structure": 9 // For shared configurations
      }
    },
    {
      text: "Is the application accessed by employees from multiple businesses?",
      options: {
        "Yes, and each business should have custom login and policies": "Business to Business to Employee (B2B2E)", // Concludes B2B2E
        "Yes, primarily for data sharing and interoperability": "Identity Broker", // Identity broker structure
        "No, it’s mainly for individual users or a single business": "Auth as a Service" // Standard authentication
      }
    },
    {
      text: "Does your system need centralized management of user consents and delegated API access?",
      options: {
        "Yes, we need fine-grained control over API access and user consents": "API User Consents and Delegated Access", // Concludes delegated access
        "No, it will primarily be a user data store": "Data Store" // Standard data storage
      }
    }
  ];
  
  // Define potential use cases with descriptions and links
  const useCases = {
    "App Suite": {
      description: `
        Seamlessly transition users across applications in a suite with unified login and Single Sign-On (SSO) capabilities.
        <ul>
          <li>Choose from multiple <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/identity-providers/#social-identity-providers" target="_blank">social login providers</a> for a streamlined experience.</li>
          <li>Secure accounts with <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/multi-factor-authentication#overview" target="_blank">multi-factor authentication (MFA)</a> using SMS, TOTP, or email-based authentication.</li>
          <li>Enable <a href="https://fusionauth.io/articles/authentication/combine-sso-mfa-fusionauth#single-sign-on" target="_blank">Single Sign-On (SSO)</a> across multiple applications in your suite.</li>
        </ul>
      `
    },
    "Auth as a Service": {
      description: `
        Easily add authentication with configuration-based features, simplifying modern auth integration with minimal code.
        <ul>
          <li>Choose from multiple <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/identity-providers/#social-identity-providers" target="_blank">social login providers</a>.</li>
          <li>Secure accounts with <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/multi-factor-authentication#overview" target="_blank">multi-factor authentication (MFA)</a>.</li>
          <li>Enable <a href="https://fusionauth.io/docs/lifecycle/register-users/basic-registration-forms" target="_blank">self-service registration</a> with customizable forms.</li>
          <li>Support <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/passwordless/webauthn-passkeys" target="_blank">passkeys and biometric login</a> for secure, passwordless authentication.</li>
          <li>Allow users to manage their profiles with <a href="https://fusionauth.io/docs/lifecycle/manage-users/account-management/" target="_blank">self-service profile management</a>.</li>
          <li>Verify user accounts with <a href="https://fusionauth.io/docs/lifecycle/manage-users/verification/registration-gate-accounts-until-verified" target="_blank">email-based verification</a> to ensure account ownership.</li>
        </ul>
      `
    },
    "Business to Business to Consumer (B2B2C)": {
      description: `
        Offer a SaaS package where customers have consumers as end-users with features for social logins, passwordless options, and more.
                  <ul>
            <li>Choose from multiple <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/identity-providers/#social-identity-providers" target="_blank">social login providers</a> like Google, Facebook, and more for a streamlined experience.</li>
            <li>Secure accounts with <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/multi-factor-authentication#overview" target="_blank">multi-factor authentication (MFA)</a> using SMS, TOTP, or email-based authentication.</li>
            <li>Offer passwordless login via <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/multi-factor-authentication#overview" target="_blank">one-time passwords (OTP)</a> or <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/passwordless/magic-links" target="_blank">magic links</a> sent to user devices.</li>
            <li>Support <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/passwordless/webauthn-passkeys" target="_blank">passkeys and biometric login</a> for secure, passwordless authentication.</li>
            <li>Enable <a href="https://fusionauth.io/docs/lifecycle/register-users/basic-registration-forms" target="_blank">self-service registration</a> with customizable forms.</li>
            <li>Allow users to manage their profiles with <a href="https://fusionauth.io/docs/lifecycle/manage-users/account-management/" target="_blank">self-service profile management</a>.</li>
            <li>Verify user accounts with <a href="https://fusionauth.io/docs/lifecycle/manage-users/verification/registration-gate-accounts-until-verified" target="_blank">email-based verification</a> to ensure account ownership.</li>
            <li>Seamlessly integrate <a href="https://fusionauth.io/articles/authentication/combine-sso-mfa-fusionauth#single-sign-on" target="_blank">Single Sign-On (SSO)</a> across multiple applications in your suite.</li>
            <li><strong>User Isolation/Segmentation</strong>: Separate users by client organization to ensure <a href="https://fusionauth.io/docs/extend/examples/multi-tenant#why-use-multi-tenancy" target="_blank">data isolation and enhanced security</a> for each business.</li>
            <li><strong>Organization/Customer-specific Password and Auth Rules</strong>: Set distinct <a href="https://fusionauth.io/docs/get-started/core-concepts/tenants#tenant-configuration" target="_blank">password and authentication policies</a> per client organization for security and compliance.</li>
          </ul>
      `
    },
    "Business to Business to Employee (B2B2E)": {
      description: `
        Provide secure access for employees of other businesses with capabilities for segmentation, SSO, and custom domains.
      <ul>
        <li><strong>User Isolation/Segmentation</strong>: Separate users by client organization to ensure <a href="https://fusionauth.io/docs/extend/examples/multi-tenant#why-use-multi-tenancy" target="_blank">data isolation and enhanced security</a> for each business.</li>
        <li><strong>Organization/Customer-specific Password and Auth Rules</strong>: Set distinct <a href="https://fusionauth.io/docs/get-started/core-concepts/tenants#tenant-configuration" target="_blank">password and authentication policies</a> per client organization for security and compliance.</li>
        <li><strong>Flexible Identity Federation</strong>: Integrate with third-party <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/identity-providers" target="_blank">identity providers</a>, allowing organizations to bring their own IdP or <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/identity-providers/overview-samlv2" target="_blank">federate identities seamlessly</a>.</li>
        <li><strong>Permissions and Role Mapping</strong>: Map <a href="https://fusionauth.io/docs/get-started/core-concepts/roles" target="_blank">roles</a> and <a href="https://fusionauth.io/articles/identity-basics/authorization-models#rbac-simplifying-access-management" target="_blank">permissions</a> for each organization, providing precise access control for various employee roles.</li>
        <li><strong>Single Sign-On (SSO)</strong>: Enable <a href="https://fusionauth.io/articles/authentication/combine-sso-mfa-fusionauth#single-sign-on" target="_blank">SSO across multiple applications and domains</a> within the same client organization to create a seamless experience.</li>
        <li><strong>Branding and White Labeling</strong>: Customize login screens, emails, and UI elements to reflect each client’s brand identity, providing a <a href="https://fusionauth.io/blog/private-labeling-with-multi-tenant" target="_blank">consistent user experience</a>.</li>
        <li><strong>SAML</strong>: Support <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/identity-providers/#saml" target="_blank">SAML for enterprise-grade federation</a> and easy integration with existing client identity systems.</li>
        <li><strong>Custom Domains</strong>: Use <a href="https://fusionauth.io/blog/introducing-unlimited-custom-domains-for-fusionauth-cloud" target="_blank">client-specific domains</a> (e.g., customerA.yourplatform.com) to offer a branded experience.</li>
        <li><strong>Entities</strong>: Leverage <a href=" https://fusionauth.io/docs/extend/examples/modeling-organizations" target="_blank">entities to represent external users, organizations, or devices</a>, allowing complex relationship management and access control.</li>
      </ul>
      `
    },
    "Identity Broker": {
      description: `
        Serve as an identity broker for customer-specific IdPs in private clouds or data centers.
        <ul>
          <li>Support for <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/oauth/modes#third-party-login-and-registration" target="_blank">third-party login and registration</a>.</li>
          <li>Integrate with multiple <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/identity-providers" target="_blank">identity providers</a>.</li>
        </ul>
      `
    },
    "API User Consents and Delegated Access": {
      description: `
        Delegate API access via OAuth grants with custom scopes.
        <ul>
          <li>Define <a href="https://fusionauth.io/blog/custom-scopes-in-third-party-applications" target="_blank">custom scopes</a> for third-party applications.</li>
          <li>Manage OAuth scopes with detailed <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/oauth/scopes#overview" target="_blank">scope management</a>.</li>
        </ul>
      `
    },
    "Data Store": {
      description: `
        Use FusionAuth as a comprehensive user data store managed entirely through API calls.
        <ul>
          <li>Manage data via <a href="https://fusionauth.io/docs/apis/#overview" target="_blank">FusionAuth’s API capabilities</a>.</li>
        </ul>
      `
    },
    "Machine to Machine Communication (M2M)": {
      description: `
        Secure inter-application communication with OAuth client credentials.
        <ul>
          <li>Manage entities with <a href="https://fusionauth.io/docs/get-started/core-concepts/entity-management" target="_blank">entity management</a>.</li>
          <li>Utilize <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/oauth/modes#machine-to-machine-authorization" target="_blank">machine-to-machine authorization</a> for secure token-based communication.</li>
        </ul>
      `
    },
    "Authorization Hub for Social": {
      description: `
        Centralize third-party API tokens for social providers.
        <ul>
          <li>Support for multiple <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/identity-providers/#social-identity-providers" target="_blank">social identity providers</a>.</li>
          <li>Link social accounts for centralized access with <a href="https://fusionauth.io/docs/apis/identity-providers/links" target="_blank">account linking</a>.</li>
        </ul>
      `
    },
    "Multi-Tenant Data Store": {
      description: `
        Use FusionAuth as a multi-tenant user data store where each client or organization has isolated data and settings.
        <ul>
          <li>Isolate data and settings for each organization with <a href="https://fusionauth.io/docs/extend/examples/multi-tenant#why-use-multi-tenancy" target="_blank">multi-tenancy</a>.</li>
        </ul>
      `
    }
  };
  
  // Answer handling and question display logic
  let answers = [];
  
  function displayQuestion(index) {
    const question = questions[index];
    const questionList = document.getElementById("question-list");
  
    const questionBlock = document.createElement("div");
    questionBlock.classList.add("question-block");
    questionBlock.setAttribute("id", `question-${index}`);
  
    const questionText = document.createElement("p");
    questionText.classList.add("question-text");
    questionText.textContent = question.text;
    questionBlock.appendChild(questionText);
  
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
  
    // Render buttons based on provided options
    Object.keys(question.options).forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => handleAnswer(index, option);
      buttonContainer.appendChild(button);
    });
  
    questionBlock.appendChild(buttonContainer);
    questionList.appendChild(questionBlock);
  }
  
  function handleAnswer(index, answer) {
    // Store the answer
    answers[index] = answer;
  
    // Find the selected button and apply the "selected" class
    const questionBlock = document.getElementById(`question-${index}`);
    const buttons = questionBlock.querySelectorAll("button");
    buttons.forEach(button => {
      if (button.textContent === answer) {
        button.classList.add("selected");
      } else {
        button.classList.remove("selected");
      }
    });
  
    // Clear all subsequent questions when a new answer is chosen
    clearQuestionsFrom(index + 1);
  
    const next = questions[index].options[answer];
    if (typeof next === "string") {
      displayResult([next]);
    } else {
      displayQuestion(next);
    }
  }
  
  
  function clearQuestionsFrom(index) {
    const questionList = document.getElementById("question-list");
    let nextQuestion = document.getElementById(`question-${index}`);
    while (nextQuestion) {
      questionList.removeChild(nextQuestion);
      delete answers[index];
      index++;
      nextQuestion = document.getElementById(`question-${index}`);
    }
    document.getElementById("result-container").style.display = "none";
  }
  
  function displayResult(useCasesArray) {
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";
  
    const resultText = document.getElementById("result-text");
    if (useCasesArray.length === 1) {
      const useCase = useCasesArray[0];
      resultText.innerHTML = `
        <h2>Your use case is: ${useCase}</h2>
        <p>${useCases[useCase].description}</p>
        <p><a href="https://fusionauth.io/docs/get-started/use-cases" target="_blank">Explore more in-depth use case information here</a></p>
      `;
    } else {
      resultText.innerHTML = `
        <h2>Possible use cases:</h2>
        <ul>${useCasesArray.map(useCase => `<li><strong>${useCase}</strong>: ${useCases[useCase].description}</li>`).join("")}</ul>
      `;
    }
  }
  
  // Initialize the first question on page load
  document.addEventListener("DOMContentLoaded", () => displayQuestion(0));
  