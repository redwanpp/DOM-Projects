const group = document.querySelector('.group');
const output = document.querySelector('.output');

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

group.innerHTML = sizes.map((size) =>`<div>
        <input type="radio" id="${size}" value="${size}" name="size" >
        <label for="${size}">${size}</label>
    </div>`
).join(" ");

const radioButton = document.querySelectorAll('input');

for ( const radioBtn of radioButton ) {
    radioBtn.addEventListener('change', showOutput);
}

function showOutput(e) {
    console.log(e);

    if(this.checked) {
        output.innerHTML = `You select: ${this.value}`;
    }
    
}