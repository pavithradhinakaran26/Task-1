function addData(){
  window.location = "table1.html";
}

let countryIdGet = "";
let parentId = "";
let edit = false;
function getQueryParam() {
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
if(id!=null){
  editUser(id);
}

}
getQueryParam();


async function editUser(id) {
edit = true;
const jwtToken = localStorage.getItem("jwtToken");
const response = await fetch(
  `https://hastin-container.com/staging/api/vendor/get/${id}`,
  {
    method: "GET",
    headers: {
      Authorization: `BslogiKey ${jwtToken}`,
      "Content-Type": "application/json",
    },
  }
);

if (response.ok) {
  const user = await response.json();
  const data = user.data;
    document.getElementById("save").textContent = "UPDATE";
  await fetchCurrencies();
  await countryGet();
  parentId = data.id;
  document.getElementById("vendorName").value = data.vendorName;
  document.getElementById("vendorCode").value = data.vendorCode;
  document.getElementById("vendorType").value = data.vendorType;
  document.getElementById("add1").value = data.address1;
  document.getElementById("country").value = data.country;
  countryIdGet = data.country;
  document.getElementById("registrationNo").value = data.taxRegNo;
  document.getElementById("comRegistrationNo").value = data.companyRegNo;
  document.getElementById("currencyContainer").value = data.defaultCurrencyId;
  await cityGet();
  document.getElementById("add1").value = data.address1;
  document.getElementById("add2").value = data.address2;
  document.getElementById("city").value = data.cityId;
  document.getElementById("zip").value = data.postalCode;
  document.getElementById("bankaccount").value = data.bankAcctName;
  document.getElementById("bankaccountno").value = data.bankAccountNum;
  document.getElementById("bankname").value = data.bankName;
  document.getElementById("branchname").value = data.bankBranchName;
  document.getElementById("swiftcode").value = data.bankSwiftCode;

  for (let i = 0; i < data.contactList.length -1; i++) {
    addRow();
  }




  for (let i = 0; i < data.contactList.length; i++) {

    j= i + 1
    document.getElementById("Name"+j).value = data.contactList[i].name;
    document.getElementById("email"+j).value = data.contactList[i].email;
    document.getElementById("phoneno"+j).value = data.contactList[i].mobileNo;
    document.getElementById("isdefault"+j).value = data.contactList[i].isDefault;
    document.getElementById("rowId").value = data.contactList[i].id;
  }
  console.log(document.getElementById("rowId").value)

 } else {
  throw new Error("Failed to fetch user data");
}
}



async function saveButton(event) {
event.preventDefault();

   // Get form values
  let vendorName = document.getElementById('vendorName').value;
  let vendorCode = document.getElementById('vendorCode').value;
  let vendorType = document.getElementById('vendorType').value;
  let registrationNo = document.getElementById('registrationNo').value;
  let comRegistrationNo = document.getElementById('comRegistrationNo').value;
  let country = document.getElementById('country').value;
  let address1 = document.getElementById('add1').value;
  let address2 = document.getElementById('add2').value;
  let city = document.getElementById('city').value;
  let currencyContainer = document.getElementById('currencyContainer').value;
  let zip = document.getElementById('zip').value;
  let Name1 = document.getElementById('Name1').value;
  let email1 = document.getElementById('email1').value;
  let phoneno1 = document.getElementById('phoneno1').value;
  let isdefault1 = document.getElementById('isdefault1').value;

  let bankaccount = document.getElementById('bankaccount').value;
  let bankaccountno = document.getElementById('bankaccountno').value;
  let bankname = document.getElementById('bankname').value;
  let branchname = document.getElementById('branchname').value;
  let swiftcode = document.getElementById('swiftcode').value;


  // Error elements
  let vendorError = document.getElementById('vendorError');
  let codeError = document.getElementById('codeError');
  let typeError = document.getElementById('typeError');
  let tagError = document.getElementById('tagError');
  let companyError = document.getElementById('companyError');
  let currencyError = document.getElementById('currencyError');
  let address1Error = document.getElementById('address1Error');
  let address2Error = document.getElementById('address2Error');
  let countryError = document.getElementById('countryError');
  let cityError = document.getElementById('cityError');
  let zipError = document.getElementById('zipError');
  let nameError1 = document.getElementById('nameError1');
  let emailError1 = document.getElementById('emailError1');
  let phonenoError1 = document.getElementById('phonenoError1');
  let defaultError1 = document.getElementById('defaultError1');


  let valid = true;

  // Validation and setting error messages
  if (vendorName.trim() === "") {
      if (vendorError) vendorError.textContent = "Required*";
      valid = false;
  } else {
      if (vendorError) vendorError.textContent = '';
  }

  if (vendorCode.trim() === "") {
      if (codeError) codeError.textContent = "Required*";
      valid = false;
  } else {
      if (codeError) codeError.textContent = '';
  }

  if (vendorType.trim() === "") {
      if (typeError) typeError.textContent = "Required*";
      valid = false;
  } else {
      if (typeError) typeError.textContent = '';
  }

  if (registrationNo.trim() === "") {
      if (tagError) tagError.textContent = "Required*";
      valid = false;
  } else {
      if (tagError) tagError.textContent = '';
  }

  if (comRegistrationNo.trim() === "") {
      if (companyError) companyError.textContent = "Required*";
      valid = false;
  } else {
      if (companyError) companyError.textContent = '';
  }

  if (currencyContainer.trim() === "") {
      if (currencyError) currencyError.textContent = "Required*";
      valid = false;
  } else {
      if (currencyError) currencyError.textContent = '';
  }

  if (address1.trim() === "") {
      if (address1Error) address1Error.textContent = "Required*";
      valid = false;
  } else {
      if (address1Error) address1Error.textContent = '';
  }

  if (address2.trim() === "") {
      if (address2Error) address2Error.textContent = "Required*";
      valid = false;
  } else {
      if (address2Error) address2Error.textContent = '';
  }

  if (country.trim() === "") {
      if (countryError) countryError.textContent = "Required*";
      valid = false;
  } else {
      if (countryError) countryError.textContent = '';
  }

  if (city.trim() === "") {
      if (cityError) cityError.textContent = "Required*";
      valid = false;
  } else {
      if (cityError) cityError.textContent = '';
  }

  if (zip.trim() === "") {
      if (zipError) zipError.textContent = "Required*";
      valid = false;
  } else {
      if (zipError) zipError.textContent = '';
  }

  if (Name1.trim() === "") {
      if (nameError1) nameError1.textContent = "Required*";
      valid = false;
  } else {
      if (nameError1) nameError1.textContent = '';
  }

  if (email1.trim() === "") {
      if (emailError1) emailError1.textContent = "Required*";
      valid = false;
  } else {
      if (emailError1) emailError1.textContent = '';
  }

  if (phoneno1.trim() === "") {
      if (phonenoError1) phonenoError1.textContent = "Required*";
      valid = false;
  } else {
      if (phonenoError1) phonenoError1.textContent = '';
  }
  if (isdefault1.trim() === "") {
    if (defaultError1) defaultError1.textContent = "Required*";
    valid = false;
} else {
    if (defaultError1) defaultError1.textContent = '';
}


  const contactList = [];
  const rows = document.querySelectorAll('#table2 tr');

  let allRowsValid = true; // Track if all rows are valid

  rows.forEach(row => {
    const Name1 = document.getElementById(`Name${i}`).value;
    const email1 = document.getElementById(`email${i}`).value;
    const phoneno1 = document.getElementById(`phoneno${i}`).value;
    const isdefault1 = document.getElementById(`isdefault${i}`).value;

    // Validate the current row
    const isRowValid = validateRow(i);
    if (!isRowValid) {
      allRowsValid = false;
    }

    // Add to contactList only if row is valid
    if (isRowValid) {
      contactList.push({
        name: Name1,
        email: email1,
        mobileNo: phoneno1,
        isDefault: isdefault1,
      });
    }
  });

  if (valid && allRowsValid) {
  const jwtToken = localStorage.getItem("jwtToken");

  // try
  if (edit) {
    const payload = {
      id: parentId,
      vendorName: vendorName,
      vendorCode: vendorCode,
      vendorType: vendorType,
      taxRegNo: registrationNo,
      companyRegNo: comRegistrationNo,
      // currencyContainer:currencyContainer,
      defaultCurrencyId: currencyContainer,
      address1: address1,
      address2: address2,
      country: country,
      postalCode: zip,
      bankAcctName: bankaccount,
      bankName: bankname,
      bankBranchName: branchname,
      bankAccountNum: bankaccountno,
      bankSwiftCode: swiftcode,
      cityId: city,
      cityName: "",
      notes: "",
      createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58",
      documentList: [],
      contactList: [
        {
          name: Name1,
          email: email1,
          mobileNo: phoneno1,
          isDefault: isdefault1,
          id: rowId.value ? rowId.value : "",
        },
      ],
    };
    console.log(rowId.value,'111')
    console.log(payload,'222')
    const response = await fetch("https://hastin-container.com/staging/api/vendor/update", {
        method: "PUT",
        headers: {
          Authorization: `BslogiKey ${jwtToken}`,
          "Content-Type": "application/json",
        
        },
      
        body: JSON.stringify(payload),
      }
    );

    if (response.ok) {
      const result = await response.json();
      console.log("Vendor Updated Successfully:", result);
      alert("Vendor Updated Successfully!");
      window.location = "table.html";
      

      //document.getElementById("formpage").reset();
    } else {
      throw new Error("Vendor creation failed!");
    }
  } else {
    const payload = {
      contactList: [
        {
          name: Name1,
          email: email1,
          mobileNo: phoneno1,
          isDefault: isdefault1,
          // id: rowId ? rowId : "",
        },
      ],
      vendorName: vendorName,
      vendorCode: vendorCode,
      vendorType: vendorType,
      taxRegNo: registrationNo,
      companyRegNo: comRegistrationNo,
      // currencyContainer:currencyContainer,
      defaultCurrencyId: currencyContainer,
      address1: address1,
      address2: address2,
      country: country,
      postalCode: zip,
      cityId: city,
      createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58",
      documentList: [],
    };
    const response = await fetch("https://hastin-container.com/staging/api/vendor/create",

      {
        method: "POST",
        headers: {
          Authorization: `BslogiKey ${jwtToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (response.ok) {
      const result = await response.json();
      console.log("Vendor Created Successfully:", result);
      alert("Vendor Created Successfully!");

      document.getElementById("formpage").reset();
    } else {
      // throw new Error("Vendor creation failed!");
    }
  }
  // } catch (error) {
  //     console.error("Error occurred:", error);
  //     alert("An error occurred while creating the vendor.");
  // }
}


return false;

}

function validateField(value, errorElementId) {
const errorElement = document.getElementById(errorElementId);
if (!errorElement) {
  console.error(`Element with ID '${errorElementId}' not found.`);
  return false;
}
if (value.trim() === "") {
  errorElement.textContent = "Required*";
  errorElement.style.color = "red";
  errorElement.style.fontSize = "13px";
  errorElement.style.paddingLeft = "15px";
  return false;
} else {
  errorElement.textContent = "";
  return true;
}
}


function validateRow(i) {
let isValid = true;
const Name = document.getElementById(`Name${i}`).value;
const email = document.getElementById(`email${i}`).value;
const phoneno = document.getElementById(`phoneno${i}`).value;
const isdefault = document.getElementById(`isdefault${i}`).value;

isValid &= validateField(Name, `nameError${i}`);
isValid &= validateField(email, `emailError${i}`);
isValid &= validateField(phoneno, `phonenoError${i}`);
isValid &= validateField(isdefault, `defaultError${i}`);

return isValid;
}

function removeRow(i) {
const row = document.getElementById('tr' + i);
if (row) {
  row.remove();
  updateSerialNumbers(); 
}
}

// document.getElementById("addRowButton").addEventListener("click", addRow);



//currency api

async function fetchCurrencies() {
const jwtToken = localStorage.getItem("jwtToken");

const response = await fetch(
  "https://hastin-container.com/staging/api/meta/currencies",
  {
    method: "GET",
    headers: {
      Authorization: `BslogiKey ${jwtToken}`,
      "Content-Type": "application/json",
    },
  }
);

if (!response.ok) {
  console.log("yes");

  const errorText = await response.data.text();
  console.error(
    `Failed to fetch currencies: ${response.status} - ${errorText}`
  );
  throw new Error(
    `Failed to fetch currencies: ${response.status} - ${errorText}`
  );
}

const data = await response.json();
populateCurrencyDropdown(data.data);

(error) => {
  console.log(error);
};
}

async function countryGet() {

const jwtToken = localStorage.getItem("jwtToken");

const countryApi = await fetch(
  "https://hastin-container.com/staging/api/meta/country",
  {
    method: "GET",
    headers: {
      Authorization: `BslogiKey ${jwtToken}`,
      "Content-Type": "application/json",
    },
  }
);
if (!countryApi.ok) {
  const errorText = await countryApi.data.text();
  console.error(
    `Failed to fetch currencies: ${countryApi.status} - ${errorText}`
  );
  throw new Error(
    `Failed to fetch currencies: ${countryApi.status} - ${errorText}`
  );
}

const contryData = await countryApi.json();
populateCountryDropdown(contryData.data);

(error) => {
  console.log(error);
};
}
countryGet()
function populateCurrencyDropdown(data) {
const currencyContainer = document.getElementById("currencyContainer");
for (let obj of data) {
  let id = obj.id;

  currencyContainer.innerHTML += `<option value="${obj.id}"> ${obj.name}</option>`;
}
}
function populateCountryDropdown(data) {
const countryContainer = document.getElementById("country");
countryContainer.innerHTML = "";
console.log(data);

// Populate the dropdown with options

for (let obj of data) {
  countryContainer.innerHTML += `<option value="${obj.id}"> ${obj.name}</option>`;
}
  countryContainer.addEventListener("change", function () {
    countryIdGet = countryContainer.value;
    console.log(countryIdGet);

    cityGet();
  });

}

async function cityGet() {
const jwtToken = localStorage.getItem("jwtToken");
const cityApi = await fetch(
  "https://hastin-container.com/staging/api/countryCities/get",
  {
    method: "GET",
    headers: {
      Authorization: `BslogiKey ${jwtToken}`,
      "Content-Type": "application/json",
    },
  }
);

if (!cityApi.ok) {
  console.log("yes");

  const errorText = await cityApi.data.text();
  console.error(
    `Failed to fetch currencies: ${cityApi.status} - ${errorText}`
  );
  throw new Error(
    `Failed to fetch currencies: ${cityApi.status} - ${errorText}`
  );
}

const cityData = await cityApi.json();
populateCityDropdown(cityData.data);

(error) => {
  console.log(error);
};
}

function populateCityDropdown(data) {
const cityContainer = document.getElementById("city");
cityContainer.innerHTML = "";
const cityGet = data.filter((city) => city.countryId === countryIdGet);
console.log(cityGet);

for (let obj of cityGet) {
  let id = obj.id;
  cityContainer.innerHTML += `<option value="${obj.id}"> ${obj.cityName}</option>`;
}
}

fetchCurrencies();




function updateSerialNumbers() {
const rows = document.querySelectorAll("#table2 tr");
rows.forEach((row, index) => {
  row.querySelector(".serialno").textContent = index + 1;
});
}

i = 1; 

function addRow() {
if(i==null){
  i=1
}else{
  i=i
}
i++; 

const tableBody = document.getElementById("table2");
const newRow = document.createElement('tr');
newRow.id = 'tr' + i; // Assign unique ID to each row

newRow.innerHTML = `
  <td class="serialno">${i}</td>
  <td>
    <div class="form-floating">
      <input type="text" class="underInput form-control border-1 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" id="Name${i}" placeholder="Name" name="Name">
      <label for="name">Name</label>
      <div id="nameError${i}"></div>
    </div>
  </td>
  <td>
    <div class="form-floating">
      <input type="text" class="underInput form-control border-1 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" id="email${i}" placeholder="Email" name="Email">
      <label for="Email">Email</label>
      <div id="emailError${i}"></div>
    </div>
  </td>
  <td>
    <div class="form-floating">
      <input type="text" class="underInput form-control border-1 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" id="phoneno${i}" placeholder="Phone No" name="PhoneNo">
      <label for="PhoneNo">Phone No</label>
      <div id="phonenoError${i}"></div>
    </div>
  </td>
  <td>
    <select class="form-select border-1 rounded-0 border-start-0 border-end-0 border-top-0 border-bottom-0" id="isdefault${i}" placeholder="default" name="default">
      <option value="" selected disabled>Is Default</option>
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>
    <div id="defaultError${i}"></div>
  </td>
  <td>
    <i id="checkButton" onClick="checkButton(${i})" class="bx bx-check text-success fs-3 ms-3 mt-2"></i>
    <i class="bx bxs-trash text-danger fs-3 ms-3 mt-2 delete-row" onclick="removeRow(${i})"></i>
  </td>
`;

tableBody.appendChild(newRow);
updateSerialNumbers();
}


function updateSerialNumbers() {
const rows = document.querySelectorAll("#table2 tr");
rows.forEach((row, index) => {
  row.querySelector(".serialno").textContent = index + 1;
});
}



async function checkButton(i) {
const isValid = validateRow(i);
const urlParams = new URLSearchParams(window.location.search);
const vendorId = urlParams.get("id");

const Name = document.getElementById(`Name${i}`).value;
const email = document.getElementById(`email${i}`).value;
const phoneno = document.getElementById(`phoneno${i}`).value;
const isdefault = document.getElementById(`isdefault${i}`).value;

const payload = {
  name: Name,
  email: email,
  mobileNo: phoneno,
  isDefault: isdefault=== "Yes",
  id: null,
  vendorId: vendorId,
  createdBy: "111c9720-4abb-4beb-9303-34d0f2df67da",
};

try {
  const jwtToken = localStorage.getItem("jwtToken");
  const response = await fetch(
    "https://hastin-container.com/staging/api/vendor/contact/create",
    {
      method: "POST",
      headers: {
        Authorization: `BslogiKey ${jwtToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (response.ok) {
    const result = await response.json();
    console.log("Data saved successfully!", result);
    alert("Data saved successfully!");
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
} catch (error) {
  console.error(error);
  alert(`Error: ${error.message}`);
}
}
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("addRowBtn").addEventListener("click", addRow);
document.getElementById("table2").addEventListener("click", removeRow);
});


function logout(){
  localStorage.removeItem("jwtToken");
  alert("logout suuccessfully");
  window.location.href = "index.html";
}




















