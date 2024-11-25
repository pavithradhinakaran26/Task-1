let countryIdGet = "";
let parentId = "";
let edit = false;
function getQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  console.log(id);
  if(id !=null){
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
    await fetchCurrencies();
    await countryGet();
    parentId = data.id;
    document.getElementById("vendorName").value = data.vendorName;
    document.getElementById("vendorCode").value = data.vendorCode;
    document.getElementById("vendorType").value = data.vendorType;
    // document.getElementById("add1").value = data.address;
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
    // document.getElementById("bankaccountName").value = data.bankAcctName;
    // document.getElementById("bankaccountNumber").value = data.bankAccountNum;
    // document.getElementById("bankName").value = data.bankName;
    // document.getElementById("branch").value = data.bankBranchName;
    // document.getElementById("swiftCode").value = data.bankSwiftCode;

    for (let i = 0; i < data.contactList.length; i++) {
      document.getElementById("Name").value = data.contactList[i].name;
      document.getElementById("Email").value = data.contactList[i].email;
      document.getElementById("phoneNumber").value =
        data.contactList[i].mobileNo;
      document.getElementById("chooseDefault").value =
        data.contactList[i].isDefault;
      document.getElementById("rowId").value = data.contactList[i].id;
    }

    // let Name = document.getElementById('Name').value;
    // let Email = document.getElementById('Email').value;
    // let phoneNumber= document.getElementById('phoneNumber').value;
    // let chooseDefault = document.getElementById('chooseDefault').value;
    // editingUserId = id;
  } else {
    throw new Error("Failed to fetch user data");
  }
}


async function creativeButton(event) {
    event.preventDefault(); 
    let vendorName = document.getElementById('vendorName').value;
    let vendorCode = document.getElementById('vendorCode').value ;
    let vendorType = document.getElementById('vendorType').value ;
    let registrationNo = document.getElementById('registrationNo').value;
    let comRegistrationNo = document.getElementById('comRegistrationNo').value;
    let Currency = document.getElementById('Currency').value;
    let address1 = document.getElementById('address1').value;
    let address2 = document.getElementById('address2').value;
    let city = document.getElementById('city').value;
    let choose = document.getElementById('choose').value;
    let zip = document.getElementById('zip').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phoneno = document.getElementById('phoneno').value;
    let isdefault = document.getElementById('isdefault').value;
    let bankAccountName= document.getElementById("bankaccountName").value;
    let bankAccountnumber= document.getElementById("bankaccountNumber").value ;
     let bankName=document.getElementById("bankName").value;
     let branch=document.getElementById("branch").value;
    let switftcode=document.getElementById("swiftCode").value; 
            
 
    
    
    let vendorError = document.getElementById('vendorError');
    let codeError = document.getElementById('codeError');
    let typeError = document.getElementById('typeError');
    let tagError = document.getElementById('tagError');
    let companyError = document.getElementById('companyError');
    let CurrencyError = document.getElementById('CurrencyError');
    let address1Error = document.getElementById('address1Error');
    let address2Error = document.getElementById('address2Error');
    let chooseError = document.getElementById('chooseError');
    let cityError = document.getElementById('cityError');
    let zipError = document.getElementById('zipError');
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let phonenoError = document.getElementById('phonenoError');
   
    
    let valid = true;

    
    if (vendorName.trim() === "") {
        vendorError.textContent = "Required*";
        valid = false;
    } else {
        vendorError.textContent = '';
    }

    if (vendorCode.trim() === "") {
        codeError.textContent = "Required*";
        valid = false;
    } else {
        codeError.textContent = '';
    }

    if (vendorType.trim() === "") {
        typeError.textContent = "Required*";
        valid = false;
    } else {
        typeError.textContent = '';
    }

    if (registrationNo.trim() === "") {
        tagError.textContent = "Required*";
        valid = false;
    } else {
        tagError.textContent = '';
    }

    if (comRegistrationNo.trim() === "") {
        companyError.textContent = "Required*";
        valid = false;
    } else {
        companyError.textContent = '';
    }

    if (Currency.trim() === "") {
        currencyError.textContent = "Required*";
        valid = false;
    } else {
        currencyError.textContent = '';
    }

    if (address1.trim() === "") {
        address1Error.textContent = "Required*";
        valid = false;
    } else {
        address1Error.textContent = '';
    }

    if (address2.trim() === "") {
        address2Error.textContent = "Required*";
        valid = false;
    } else {
        address2Error.textContent = '';
    }

    if (choose.trim() === "") {
        chooseError.textContent = "Required*";
        valid = false;
    } else {
        chooseError.textContent = '';
    }

    if (city.trim() === "") {
        cityError.textContent = "Required*";
        valid = false;
    } else {
        cityError.textContent = '';
    }

    if (zip.trim() === "") {
        zipError.textContent = "Required*";
        valid = false;
    } else {
        zipError.textContent = '';
    }

    if (name.trim() === "") {
        nameError.textContent = "Required*";
        valid = false;
    } else {
        nameError.textContent = '';
    }

    if (email.trim() === "") {
        emailError.textContent = "Required*";
        valid = false;
    } else {
        emailError.textContent = '';
    }

    if (phoneno.trim() === "") {
       phonenoError.textContent = "Required*";
        valid = false;
    } else {
       phonenoError.textContent = '';
    }


    if (valid) {
        const jwtToken = localStorage.getItem("jwtToken");
    
        // try {
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
            address1: add1,
            address2: add2,
            country: country,
            postalCode: zip,
            bankAcctName: bankAcctName,
            bankName: bankName,
            bankBranchName: bankBranchName,
            bankAccountNum: bankAccountNum,
            bankSwiftCode: bankSwiftCode,
            cityId: city,
            cityName: "",
            notes: "",
            createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58",
            documentList: [],
            contactList: [
              {
                name: name,
                email: email,
                mobileNo: phoneno,
                isDefault: chooseDefault,
                id: rowId ? rowId : "",
              },
            ],
          };
          const response = await fetch(
            "https://hastin-container.com/staging/api/vendor/update",
            {
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
            window.location = "vendor.html";
    
    
            //document.getElementById("formpage").reset();
          } else {
            throw new Error("Vendor creation failed!");
          }
        } else {
          const payload = {
            contactList: [
              {
                name: name,
                email: email,
                mobileNo: phoneno,
                isDefault: isdefault,
                // id: rowId ? rowId : "",
              },
            ],
            vendorName: vendorName,
            vendorCode: vendorCode,
            vendorType: vendorType,
            taxRegNo: registrationNo,
            companyRegNo: comRegistrationNo,
            // currencyContainer:currencyContainer,
            defaultCurrencyId: Currency,
            address1: address1,
            address2: address2,
            country: choose,
            postalCode: zip,
            cityId: city,
            bankAccountName:bankAccountName,
            bankaccountNumber:bankAccountnumber,
            bankName:bankName,
            branch:branch,
            swiftCode:switftcode,

            createdBy: "adf8906a-cf9a-490f-a233-4df16fc86c58",
            documentList: [],
          };
          const response = await fetch(
            "https://hastin-container.com/staging/api/vendor/create",
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
            window.location = "vendor.html";
    
    
            document.getElementById("formpage").reset();
          } else {
            throw new Error("Vendor creation failed!");
          }
        }
        // } catch (error) {
        //     console.error("Error occurred:", error);
        //     alert("An error occurred while creating the vendor.");
        // }
      }



}
 

    




async function populateCurrencies() {
try {
  const jwtToken = localStorage.getItem('jwtToken'); 
  
  if (!jwtToken) {
      alert("Authorization token is missing.");
      return;
  }
  const response = await fetch('https://hastin-container.com/staging/api/meta/currencies', {
      method: 'GET',
      headers: {
          'Authorization': `BslogiKey ${jwtToken}`,
          'Content-Type': 'application/json',   
      },
  });

  if (!response.ok) {
      throw new Error('Failed to fetch currencies');
  }
  const data = await response.json();
  console.log(data);

  const currency = data?.data;

  if (!Array.isArray(currency)) {
      throw new Error('Currency data is missing or invalid.');
  }
  const dropdown = document.getElementById('Currency');
  dropdown.innerHTML = '<option value="" disabled selected>Select a currency</option>';

  currency.forEach(currencys => {
      const option = document.createElement('option');
      option.value = currencys.code; 
      option.textContent = currencys.name;
      dropdown.appendChild(option); 
  });
} catch (error) {
  console.error('Error:', error.message);
  const errorDiv = document.getElementById('currencyError');
  errorDiv.textContent = `Error: ${error.message}`;
  errorDiv.style.color = 'red';
}
}

let citiesData = [];
populateCurrencies();
async function populatecountry() {
try {
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
        alert("Authorization token is missing.");
        return;
    }

    const response = await fetch('https://hastin-container.com/staging/api/meta/country', {
        method: 'GET',
        headers: {
            'Authorization': `BslogiKey ${jwtToken}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch countries');
    }
    const data = await response.json();
    const countries = data?.data;

    if (!Array.isArray(countries)) {
        throw new Error('Country data is missing or invalid.');
    }

    const dropdown = document.getElementById('choose');
    dropdown.innerHTML = '<option value="" disabled selected>Select a country</option>';

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name; 
        option.textContent = country.name; 
        dropdown.appendChild(option);
    });

    dropdown.addEventListener('change', filterCities);
} catch (error) {
    console.error('Error:', error.message);
}
}
populatecountry()
async function countrycity() {
try {
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
        alert("Authorization token is missing.");
        return;
    }

    const response = await fetch('https://hastin-container.com/staging/api/countryCities/get', {
        method: 'GET',
        headers: {
            'Authorization': `BslogiKey ${jwtToken}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch cities');
    }
    const data = await response.json();
    citiesData = data?.data; 
    if (!Array.isArray(citiesData)) {
        throw new Error('City data is missing or invalid.');
    }
} catch (error) {
    console.error('Error:', error.message);
}
}

function filterCities() {
const countryDropdown = document.getElementById('choose');
const selectedCountry = countryDropdown.value; 
const cityDropdown = document.getElementById('city');

cityDropdown.innerHTML = '<option value="" disabled selected>Select a city</option>'; 

if (!selectedCountry) return;

const filteredCities = citiesData.filter(city => city.countryName === selectedCountry);

filteredCities.forEach(city => {
    const option = document.createElement('option');
    option.value = city.code;
    option.textContent = city.name;
    cityDropdown.appendChild(option);
});
}

populatecountry();
countrycity();

populateCurrencies();   

document.addEventListener("DOMContentLoaded", () => {
    const addRowBtn = document.getElementById("addRowBtn");
    const contactTable = document.getElementById("contactTable").querySelector("tbody");

    addRowBtn.addEventListener("click", (e) => {
        e.preventDefault(); 
        const newRow = document.createElement("tr");
        const rowCount = contactTable.rows.length + 1;
        
        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td><input type="text" class="form-control border-2 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" placeholder="Name"></td>
            <td><input type="email" class="form-control border-2 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" placeholder="Email"></td>
            <td><input type="text" class="form-control border-2 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" placeholder="Phone No"></td>
            <td>
                <select class="form-control border-2 rounded-0 border-start-0 border-end-0 border-top-0" style="box-shadow: none;" placeholder="Default">
                     <option value="is default" disabled selected>is default</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </td>
            <td><button class="btn btn-sm mt-2 ms-3 removeRowBtn" style = "width:60%;"><i class="fa-solid fa-trash text-danger"></i></button>
            </td>
        `;

        contactTable.appendChild(newRow);

        const removeBtn = newRow.querySelector(".removeRowBtn");        
        removeBtn.addEventListener("click", () => {
            newRow.remove();
        });
    });

    contactTable.addEventListener("click", (e) => {
        if (e.target.classList.contains("removeRowBtn")) {
            e.target.closest("tr").remove();
        }
    });
}); 




         




















