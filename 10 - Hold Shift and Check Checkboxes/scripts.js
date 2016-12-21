const checkboxes = document.querySelectorAll("input[type='checkbox']");
let lastChecked;

function handleClick(e) {
    if (e.shiftKey && this.checked) {
        let inBetween = false;

        checkboxes.forEach(checkbox => {
            //console.log(this); //here this in an arrow function return the event element because the arrow function is inside a common function
            if (this === checkbox || lastChecked === checkbox) inBetween = !inBetween;
            if (inBetween) checkbox.checked = true;
        });
    }
    lastChecked = this;
}

checkboxes.forEach(input => input.addEventListener('click', handleClick)); //here this in an arrow function return window