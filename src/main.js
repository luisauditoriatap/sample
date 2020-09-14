//input forms
let addNoteBtn = document.querySelector('#addNoteBtn');

addNoteBtn.onclick = () => {

    let newNoteInput = document.querySelector('#newNoteInput');
    let notes = document.querySelector('#app .notes');

    if (newNoteInput.value == '') {
        alert ('El campo no puede estar vacio')
        return;
    }

    //new elements
    let note = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.onclick = function () {

        let.parent = this.parentElement;
        if (this.checked) {
            parent.classList.add('isDone');
        }

        else {
            parent.classList.remove('isDone');
        }

    }

    note.classList.add('note');
    note.innerHTML = `<div>${newNoteInput.value}</div>`
    //note.innerHTML = newNoteInput.value;
    note.appendChild(checkbox);
    newNoteInput.value = '';
    notes.appendChild(note);
}
