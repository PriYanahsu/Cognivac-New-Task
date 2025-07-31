const input = document.querySelector('.text');

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        AddElement();
    }
});

function AddElement() {
    const textValue = document.querySelector('.text');
    const task = document.querySelector('.task-list');

    const existingMessage = document.querySelector('.error-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    if (!textValue.value.trim()) {
        const inputField = document.querySelector('.text');
        const originalBorder = inputField.style.border;

        inputField.style.border = '1px solid red';

        const errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        errorMsg.style.color = 'red';
        errorMsg.style.fontSize = '20px';
        errorMsg.style.marginTop = '5px';
        errorMsg.textContent = 'error';

        inputField.parentNode.insertBefore(errorMsg, inputField.nextSibling);

        setTimeout(() => {
            inputField.style.border = originalBorder || '';
            errorMsg.remove();
        }, 2000);

        return;
    }

    const li = createTaskItem(textValue.value);
    task.appendChild(li);

    textValue.value = "";
}



function createTaskItem(text) {
    const li = document.createElement('li');

    const textNode = document.createTextNode(text);
    li.appendChild(textNode);

    const checkbox = createCheckbox(li);
    const editButton = createEditButton(li, textNode);
    const deleteButton = createDeleteButton(li);

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    li.appendChild(checkbox);

    return li;
}


function createCheckbox(li) {
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    checkBox.onchange = () => {
        let existingSpan = li.querySelector('.status');
        if (checkBox.checked) {
            if (!existingSpan) {
                const span = document.createElement('span');
                span.className = 'status';
                span.textContent = 'checked';
                span.style.color = 'green';
                li.insertBefore(span, li.firstChild);
            }
        } else {
            if (existingSpan) {
                li.removeChild(existingSpan);
            }
        }
    };

    return checkBox;
}


function createEditButton(li, textNode) {
    const button = document.createElement('button');
    button.textContent = "Edit";

    button.onclick = () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = textNode.textContent;

        const saveButton = document.createElement('button');
        saveButton.textContent = "Save";

        saveButton.onclick = () => {
            if (!input.value.trim()) return alert("Value cannot be empty");
            textNode.textContent = input.value;
            li.replaceChild(textNode, input);
            li.replaceChild(button, saveButton);
        };

        li.replaceChild(input, textNode);
        li.replaceChild(saveButton, button);
    };

    return button;
}


function createDeleteButton(li) {
    const button = document.createElement('button');
    button.textContent = "x";

    button.onclick = () => {
        const taskList = document.querySelector('.task-list');
        taskList.removeChild(li);
    };

    return button;
}
