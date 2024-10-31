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
      text: "Are the users of this system primarily individual consumers?",
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
    "Auth as a Service": {
      description: `
        Easily add authentication with configuration-based features, making it simple to integrate modern auth requirements with minimal code.
        <ul>
          <li>Choose from multiple <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/identity-providers/#social-identity-providers" target="_blank">social login providers</a> like Google, Facebook, and more for a streamlined experience.</li>
          <li>Secure accounts with <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/multi-factor-authentication#overview" target="_blank">multi-factor authentication (MFA)</a> using SMS, TOTP, or email-based authentication.</li>
          <li>Offer passwordless login via <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/multi-factor-authentication#overview" target="_blank">one-time passwords (OTP)</a> or <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/passwordless/magic-links" target="_blank">magic links</a> sent to user devices.</li>
          <li>Support <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/passwordless/webauthn-passkeys" target="_blank">passkeys and biometric login</a> for secure, passwordless authentication.</li>
          <li>Enable <a href="https://fusionauth.io/docs/lifecycle/register-users/basic-registration-forms" target="_blank">self-service registration</a> with customizable forms.</li>
          <li>Allow users to manage their profiles with <a href="https://fusionauth.io/docs/lifecycle/manage-users/account-management/" target="_blank">self-service profile management</a>.</li>
          <li>Verify user accounts with <a href="https://fusionauth.io/docs/lifecycle/manage-users/verification/registration-gate-accounts-until-verified" target="_blank">email-based verification</a> to ensure account ownership.</li>
        </ul>
      `,
    },
    "App Suite": {
      description: `
        Seamlessly transition users across applications in a suite with unified login and Single Sign-On (SSO) capabilities.
        <ul>
          <li>Choose from multiple <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/identity-providers/#social-identity-providers" target="_blank">social login providers</a> like Google, Facebook, and more for a streamlined experience.</li>
          <li>Secure accounts with <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/multi-factor-authentication#overview" target="_blank">multi-factor authentication (MFA)</a> using SMS, TOTP, or email-based authentication.</li>
          <li>Offer passwordless login via <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/multi-factor-authentication#overview" target="_blank">one-time passwords (OTP)</a> or <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/passwordless/magic-links" target="_blank">magic links</a> sent to user devices.</li>
          <li>Support <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/passwordless/webauthn-passkeys" target="_blank">passkeys and biometric login</a> for secure, passwordless authentication.</li>
          <li>Enable <a href="https://fusionauth.io/docs/lifecycle/register-users/basic-registration-forms" target="_blank">self-service registration</a> with customizable forms.</li>
          <li>Allow users to manage their profiles with <a href="https://fusionauth.io/docs/lifecycle/manage-users/account-management/" target="_blank">self-service profile management</a>.</li>
          <li>Verify user accounts with <a href="https://fusionauth.io/docs/lifecycle/manage-users/verification/registration-gate-accounts-until-verified" target="_blank">email-based verification</a> to ensure account ownership.</li>
          <li>Seamlessly integrate <a href="https://fusionauth.io/articles/authentication/combine-sso-mfa-fusionauth#single-sign-on" target="_blank">Single Sign-On (SSO)</a> across multiple applications in your suite.</li>
        </ul>
      `,
    },
    "Business to Business to Consumer (B2B2C)": {
        description: `
          Offer a SaaS package where customers have consumers as end-users, with advanced configuration options for social logins, multi-factor authentication, passwordless options, and more.
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
        `,
        documentationLink: "https://fusionauth.io/docs/b2b2c"
      },
    "Business to Business to Employee (B2B2E)": {
        description: `
          Provide secure, customizable access for employees of other businesses with advanced capabilities tailored for enterprise needs, such as segmentation, SSO, and custom domains.
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
        `,
      },
      "Machine to Machine Communication (M2M)": {
        description: `
          Secure inter-application communication using client credentials and access tokens, designed to handle automated processes and system interactions without human intervention.
          <ul>
            <li><strong>Entity Management</strong>: Manage entities like applications, devices, or services with <a href="https://fusionauth.io/docs/get-started/core-concepts/entity-management" target="_blank">entity management</a> for better control over machine identities.</li>
            <li><strong>Machine-to-Machine Authorization</strong>: Enable secure, token-based communication between applications using <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/oauth/modes#machine-to-machine-authorization" target="_blank">machine-to-machine authorization</a> with OAuth client credentials.</li>
            <li><strong>Client Credentials Grant Example</strong>: See an <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/oauth/#example-client-credentials-grant" target="_blank">example implementation of the client credentials grant</a> to better understand the setup process.</li>
          </ul>
        `,
      },
      "Identity Broker": {
        description: `
          Serve as an identity broker within a private cloud or data center for customer-specific IdPs, streamlining authentication across multiple identity providers.
          <ul>
            <li><strong>Third-Party Login and Registration</strong>: Facilitate seamless <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/oauth/modes#third-party-login-and-registration" target="_blank">third-party login and registration</a> through an identity broker, allowing users to authenticate with various identity providers.</li>
          </ul>
        `,
      },
      "Authorization Hub for Social": {
        description: `
          Centralize third-party API tokens for social providers like Google and Facebook, allowing users to authenticate easily and manage linked accounts.
          <ul>
            <li><strong>Social Identity Providers</strong>: Support multiple <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/identity-providers/#social-identity-providers" target="_blank">social identity providers</a> for streamlined user authentication.</li>
            <li><strong>Link Social Media Accounts</strong>: Allow users to <a href="https://fusionauth.io/docs/apis/identity-providers/links" target="_blank">link their social media accounts</a> to their profiles for simplified, centralized access management.</li>
          </ul>
        `,
      },
      "API User Consents and Delegated Access": {
        description: `
          Enable users to delegate API access via OAuth grants, allowing granular control over data access and permissions.
          <ul>
            <li><strong>Custom Scopes</strong>: Define <a href="https://fusionauth.io/blog/custom-scopes-in-third-party-applications" target="_blank">custom scopes for third-party applications</a> to specify the exact permissions granted to external apps.</li>
            <li><strong>Scope Management</strong>: Manage OAuth scopes effectively to control what data users can access. See <a href="https://fusionauth.io/docs/lifecycle/authenticate-users/oauth/scopes#overview" target="_blank">scope management documentation</a> for an overview of supported scopes.</li>
          </ul>
        `,
      },
      "Data Store": {
        description: `
          Use FusionAuth as a comprehensive user data store, managed entirely through API calls to customize login flows, UX, and control user data storage.
          <ul>
            <li><strong>API-Driven Control</strong>: Utilize <a href="https://fusionauth.io/docs/apis/#overview" target="_blank">FusionAuth’s API capabilities</a> to manage user data, authentication, and authorization workflows entirely via API calls, integrating directly with your applications.</li>
          </ul>
        `,
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
  
    // Clear all subsequent answers and questions if the user changes their answer
    clearQuestionsFrom(index + 1);
  
    // Determine the next question or result
    const next = questions[index][answer];
    if (typeof next === "string") {
      displayResult(next);
    } else {
      displayQuestion(next);
    }
  }
  
  function clearQuestionsFrom(index) {
    const questionList = document.getElementById("question-list");
  
    // Remove each question block and clear answers starting from the given index
    let nextQuestion = document.getElementById(`question-${index}`);
    while (nextQuestion) {
      questionList.removeChild(nextQuestion);
      delete answers[index];
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
      <p><a href="https://fusionauth.io/docs/get-started/use-cases" target="_blank">Explore more in-depth use case information here</a></p>
    `;
  }
  
  // Start with the first question
  document.addEventListener("DOMContentLoaded", () => displayQuestion(0));
  