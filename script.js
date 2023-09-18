function updateCompanyOptions() {
    const deviceTypeDropdown = document.getElementById("deviceType");
    const companyDropdown = document.getElementById("company");
    const modelTypeDropdown = document.getElementById("modelType");

    // Clear existing options
    companyDropdown.innerHTML = "";
    modelTypeDropdown.innerHTML = "";

    if (deviceTypeDropdown.value === "smartphone") {
        // If Smartphone is selected, add Smartphone options
        const smartphoneCompanies = ["Samsung", "Mi"];
        for (const option of smartphoneCompanies) {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            companyDropdown.appendChild(optionElement);
        }

        // Populate model type options for Samsung and Mi
        updateModelOptions();
    } else if (deviceTypeDropdown.value === "keyboard") {
        // If Keyboard is selected, add Keyboard options
        const keyboardCompanies = ["Logitech", "HP", "Dell"];
        for (const option of keyboardCompanies) {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            companyDropdown.appendChild(optionElement);
        }

        // Populate model type options for Keyboard
        const keyboardModels = ["Wired", "Wireless"];
        for (const option of keyboardModels) {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            modelTypeDropdown.appendChild(optionElement);
        }
    }
}

function updateModelOptions() {
    const companyDropdown = document.getElementById("company");
    const modelTypeDropdown = document.getElementById("modelType");

    // Clear existing options
    modelTypeDropdown.innerHTML = "";

    if (companyDropdown.value === "Samsung") {
        // If Samsung is selected, add Samsung model options
        const samsungModels = ["S22", "A11"];
        for (const option of samsungModels) {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            modelTypeDropdown.appendChild(optionElement);
        }
    } else if (companyDropdown.value === "Mi") {
        // If Mi is selected, add Mi model options
        const miModels = ["Note 5", "Note 6"];
        for (const option of miModels) {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            modelTypeDropdown.appendChild(optionElement);
        }
    }
}
/*
const API_KEY=`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`

document.getElementById("generate").addEventListener("click",function(){
    console.log("Clicked the generate button"); 
    const deviceType = document.getElementById("deviceType").value;
    const company = document.getElementById("company").value;
    const modelType = document.getElementById("modelType").value;
   // Create a prompt string
    const promptString = `Harmful components of ${deviceType} from ${company}, model ${modelType}, and their effects on the environment and human health if not disposed of correctly.`;

      
      const opts = {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${API_KEY}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [
                  {
                      role: "user",
                      content: "Hello"
                  }
              ],
              max_tokens: 100})
      }
      try {
          const response = fetch('https://api.openai.com/v1/chat/completions', opts)
          const data = response.json()
          console.log(data)
      } catch (error) {
          console.log("error")
      }
      
});

*/
// Call the functions initially to set the initial options
updateCompanyOptions();
updateModelOptions();
//document.getElementById("generate").addEventListener("click", generateEwasteInfo);