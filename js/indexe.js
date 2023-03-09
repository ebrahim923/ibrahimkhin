
const loadePhone = async () => {
  
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();

  displayPhones(data.data);
}

const displayPhones = phone => {
  
  const phoneContainer = document.getElementById("phone-container");

  phone.forEach(phone => {
    
    const phoneDiv = document.createElement('div');

    phoneDiv.classList.add('col');
    phoneDiv.innerHTML = `
    
          <div class="card my-2">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">This is a longer card with supporting text below as a</p>
            </div>
          </div>
    `;
    phoneContainer.appendChild(phoneDiv);
  })
}

loadePhone();

