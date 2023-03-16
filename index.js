const { input, pre, button, form, div } = std_elements();

const root = document.querySelector("#root");

const credentials = {
    firstName: "",
    lastName: "",
    employeeId: 0,
}

const [firstNameInput, updateFirstNameInput] = input({attrs: {type: "text", name: "firstName", value: credentials.firstName, placeholder: "First Name"}}); 
const [lastNameInput, updateLastNameInput] = input({attrs: {type: "text", name: "lastName", value: credentials.lastName, placeholder: "Last Name"}});
const [employeeIdInput, updateEmployeeIdInput] = input({attrs: {type: "number", name: "employeeId", value: credentials.employeeId, placeholder: "Employee Id"}})
const [submitBtn, updateSubmitBtn] = button({children: ["Submit"]});
const [credentialsPre, updateCredentialsPre] = pre({children: [credentials]});

const handleChange = (e) => {
    credentials[e.target.name] = e.target.value;
    credentialsPre.innerHTML = JSON.stringify(credentials);
}

updateFirstNameInput((el) => {
    el.addEventListener("input", handleChange);
});
updateLastNameInput((el) => {
    el.addEventListener("input", handleChange);
});
updateEmployeeIdInput((el) => {
    el.addEventListener("input", handleChange);
});
updateSubmitBtn((el) => {
    el.addEventListener("click", () => {
        credentialsPre.innerHTML = JSON.stringify(credentials);
    });
});

const [employeeForm, updateEmployeeDiv] = div({
    className: "employee-container",
    children: [
        firstNameInput,
        lastNameInput,
        employeeIdInput,
        submitBtn,
    ]
});

const [App] = div({
    className: "app",
    children: [
        employeeForm,
        credentialsPre,
    ],
});

root.appendChild(App);
