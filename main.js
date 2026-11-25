console.log('KeyBoard Project');
let inputBox = document.getElementById('inputBox');
let keys = {
    Esc: document.getElementById('Esc'),
    F1: document.getElementById('F1'),
    F2: document.getElementById('F2'),
    F3: document.getElementById('F3'),
    F4: document.getElementById('F4'),
    F5: document.getElementById('F5'),
    F6: document.getElementById('F6'),
    F7: document.getElementById('F7'),
    F8: document.getElementById('F8'),
    F9: document.getElementById('F9'),
    F10: document.getElementById('F10'),
    F11: document.getElementById('F11'),
    F12: document.getElementById('F12'),
    Del: document.getElementById('Del'),
    Tab: document.getElementById('Tab'),
    BackSpace: document.getElementById('BackSpace'),
    CapsLock: document.getElementById('CapsLock'),
    Enter: document.getElementById('Enter'),
    Shift1: document.getElementById('Shift1'),
    Shift2: document.getElementById('Shift2'),
    SpaceBar: document.getElementById('SpaceBar'),
    Control1: document.getElementById('Control1'),
    Control2: document.getElementById('Control2'),
    Alt1: document.getElementById('Alt1'),
    Alt2: document.getElementById('Alt2'),
    Win1: document.getElementById('Win1'),
    Win2: document.getElementById('Win2'),
    Up: document.getElementById('Up'),
    Down: document.getElementById('Down'),
    Left: document.getElementById('Left'),
    Right: document.getElementById('Right'),
    A: document.getElementById('A'),
    B: document.getElementById('B'),
    C: document.getElementById('C'),
    D: document.getElementById('D'),
    E: document.getElementById('E'),
    F: document.getElementById('F'),
    G: document.getElementById('G'),
    H: document.getElementById('H'),
    I: document.getElementById('I'),
    J: document.getElementById('J'),
    K: document.getElementById('K'),
    L: document.getElementById('L'),
    M: document.getElementById('M'),
    N: document.getElementById('N'),
    O: document.getElementById('O'),
    P: document.getElementById('P'),
    Q: document.getElementById('Q'),
    R: document.getElementById('R'),
    S: document.getElementById('S'),
    T: document.getElementById('T'),
    U: document.getElementById('U'),
    V: document.getElementById('V'),
    W: document.getElementById('W'),
    X: document.getElementById('X'),
    Y: document.getElementById('Y'),
    Z: document.getElementById('Z'),
    BigCurlyBracLeft: document.getElementById('BigCurlyBracLeft'),
    BigCurlyBracRight: document.getElementById('BigCurlyBracRight'),
    BackSlashLine: document.getElementById('BackSlashLine'),
    LesserThanComma: document.getElementById('LesserThanComma'),
    GreaterThanDot: document.getElementById('GreaterThanDot'),
    QuestionMarkSlash: document.getElementById('QuestionMarkSlash'),
    SemiandColon: document.getElementById('SemiandColon'),
    SingleDoubleQuote: document.getElementById('SingleDoubleQuote'),
    Fn1: document.getElementById('Fn1'),
    Fn2: document.getElementById('Fn2'),
};

function copyText() {
    const textToCopy = inputBox.value;
    navigator.clipboard.writeText(textToCopy).then(() => {
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function cutText() {
    const textToCut = inputBox.value;
    navigator.clipboard.writeText(textToCut).then(() => {
        inputBox.value = '';
    }).catch(err => {
        console.error('Failed to cut text: ', err);
    });
}

function pasteText() {
    navigator.clipboard.readText().then(text => {
        inputBox.value += text;
    }).catch(err => {
        console.error('Failed to paste text: ', err);
    });
}

function selectAllText() {
    inputBox.focus();
    inputBox.setSelectionRange(0, inputBox.value.length);
}

let alphabetButtons = document.getElementsByClassName('alphabetBtn');
let numberButtons = document.getElementsByClassName('numBtn');
let lightFontButtons = document.getElementsByClassName('lightFont');
let lowerSideButtons = document.getElementsByClassName('lowerSide');
let specialButtons = document.getElementsByClassName('specialBtn');
let FButtons = document.getElementsByClassName('F');
let alphabetArray = Array.from(alphabetButtons);
let numberArray = Array.from(numberButtons);
let lightFontArray = Array.from(lightFontButtons);
let lowerSideArray = Array.from(lowerSideButtons);
let FArray = Array.from(FButtons);
let specialArray = Array.from(specialButtons);
let Shift12onoff = false;
let CapsLockonoff = false;
let Control12onoff = false;
let FnOnOff = false;

function updateAlphabetCase(uppercase) {
    alphabetArray.forEach(button => {
        button.classList.toggle('upperCase', uppercase);
    });
}

function lightDarkFontwhileShifting(lightFont) {
    lightFontArray.forEach(button => {
        button.classList.toggle('lightFont', !lightFont);
    });
    lowerSideArray.forEach(button => {
        button.classList.toggle('lightFont', lightFont);
    });
    FArray.forEach(button => {
        if (lightFont) {
            button.classList.toggle('lightFont', lightFont);
        }
        else {
            button.classList.toggle('lightFont', !lightFont);
        }
    });
}

function lightDarkFontwhileFn(lightFont) {
    FArray.forEach(button => {
        button.classList.toggle('lightFont', !lightFont);
    });
}

function autoTurnOffShift() {
    Shift12onoff = false;
    keys.Shift1.classList.remove('activeBtn');
    keys.Shift2.classList.remove('activeBtn');
    updateAlphabetCase(Shift12onoff);
    lightDarkFontwhileShifting(Shift12onoff);
}

function keyplayAudio() {
    const audioElement = new Audio('Audio/Keyboard-Button-Click.mp3');
    audioElement.play();
}

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);
inputBox.addEventListener('click', () => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
    setTimeout(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
    }, 100);
});

function handleKeyDown(event) {
    inputBox.focus();
    const keyMapping = {
        'Escape': keys.Esc,
        'F1': keys.F1, 'Digit1': keys.F1,
        'F2': keys.F2, 'Digit2': keys.F2,
        'F3': keys.F3, 'Digit3': keys.F3,
        'F4': keys.F4, 'Digit4': keys.F4,
        'F5': keys.F5, 'Digit5': keys.F5,
        'F6': keys.F6, 'Digit6': keys.F6,
        'F7': keys.F7, 'Digit7': keys.F7,
        'F8': keys.F8, 'Digit8': keys.F8,
        'F9': keys.F9, 'Digit9': keys.F9,
        'F10': keys.F10, 'Digit0': keys.F10,
        'F11': keys.F11, 'Minus': keys.F11,
        'F12': keys.F12, 'Equal': keys.F12,
        'Delete': keys.Del,
        'Tab': keys.Tab,
        'KeyA': keys.A, 'KeyB': keys.B, 'KeyC': keys.C, 'KeyD': keys.D,
        'KeyE': keys.E, 'KeyF': keys.F, 'KeyG': keys.G, 'KeyH': keys.H,
        'KeyI': keys.I, 'KeyJ': keys.J, 'KeyK': keys.K, 'KeyL': keys.L,
        'KeyM': keys.M, 'KeyN': keys.N, 'KeyO': keys.O, 'KeyP': keys.P,
        'KeyQ': keys.Q, 'KeyR': keys.R, 'KeyS': keys.S, 'KeyT': keys.T,
        'KeyU': keys.U, 'KeyV': keys.V, 'KeyW': keys.W, 'KeyX': keys.X,
        'KeyY': keys.Y, 'KeyZ': keys.Z,
        'BracketLeft': keys.BigCurlyBracLeft,
        'BracketRight': keys.BigCurlyBracRight,
        'Backslash': keys.BackSlashLine,
        'Backspace': keys.BackSpace,
        'CapsLock': keys.CapsLock,
        'Enter': keys.Enter,
        'ShiftLeft': keys.Shift1, 'ShiftRight': keys.Shift2,
        'Comma': keys.LesserThanComma,
        'Period': keys.GreaterThanDot,
        'Slash': keys.QuestionMarkSlash,
        'ArrowUp': keys.Up, 'ArrowDown': keys.Down, 'ArrowLeft': keys.Left, 'ArrowRight': keys.Right,
        'ControlLeft': keys.Control1, 'ControlRight': keys.Control2,
        'Space': keys.SpaceBar,
        'AltLeft': keys.Alt1, 'AltRight': keys.Alt2,
        'MetaLeft': keys.Win1, 'MetaRight': keys.Win2,
        'Backquote': keys.Esc,
        'Semicolon': keys.SemiandColon, 'Quote': keys.SingleDoubleQuote,
    };

    if (keyMapping[event.code]) {
        keyMapping[event.code].classList.add('keyboardpressedActivity');
        if ((event.code.startsWith('Shift')) || (event.code === "CapsLock") || (event.code.startsWith('Control'))) {
        }
        else {
            keyplayAudio();
        }
    }

    if (event.code.startsWith('Shift')) {
        Shift12onoff = true;
        updateAlphabetCase(Shift12onoff);
        lightDarkFontwhileShifting(Shift12onoff);
        keys.Shift1.classList.add('activeBtn');
        keys.Shift2.classList.add('activeBtn');
    }

    if (event.code === "CapsLock") {
        CapsLockonoff = !CapsLockonoff;
        keys.CapsLock.classList.toggle("activeBtn");
        updateAlphabetCase(CapsLockonoff);
        if (!CapsLockonoff) {
            updateAlphabetCase(Shift12onoff);
        }
    }

    if (event.code.startsWith('Control')) {
        Control12onoff = true;
        keys.Control1.classList.add('activeBtn');
        keys.Control2.classList.add('activeBtn');
    }
    if (event.code.startsWith('F')) {
        FnOnOff = true;
        lightDarkFontwhileFn(FnOnOff);
        keys.Fn1.classList.add('keyboardpressedActivity');
        keys.Fn2.classList.add('keyboardpressedActivity');
    }
    if (Control12onoff) {
        switch (event.code) {
            case "KeyA":
                selectAllText();
                break;
            case "KeyC":
                copyText();
                break;
            case "KeyV":
                pasteText();
                break;
            case "KeyX":
                cutText();
                break;
            default:
                break;
        }
    }
}

function handleKeyUp(event) {
    const keyMapping = {
        'Escape': keys.Esc,
        'F1': keys.F1, 'Digit1': keys.F1,
        'F2': keys.F2, 'Digit2': keys.F2,
        'F3': keys.F3, 'Digit3': keys.F3,
        'F4': keys.F4, 'Digit4': keys.F4,
        'F5': keys.F5, 'Digit5': keys.F5,
        'F6': keys.F6, 'Digit6': keys.F6,
        'F7': keys.F7, 'Digit7': keys.F7,
        'F8': keys.F8, 'Digit8': keys.F8,
        'F9': keys.F9, 'Digit9': keys.F9,
        'F10': keys.F10, 'Digit0': keys.F10,
        'F11': keys.F11, 'Minus': keys.F11,
        'F12': keys.F12, 'Equal': keys.F12,
        'Delete': keys.Del,
        'Tab': keys.Tab,
        'KeyA': keys.A, 'KeyB': keys.B, 'KeyC': keys.C, 'KeyD': keys.D,
        'KeyE': keys.E, 'KeyF': keys.F, 'KeyG': keys.G, 'KeyH': keys.H,
        'KeyI': keys.I, 'KeyJ': keys.J, 'KeyK': keys.K, 'KeyL': keys.L,
        'KeyM': keys.M, 'KeyN': keys.N, 'KeyO': keys.O, 'KeyP': keys.P,
        'KeyQ': keys.Q, 'KeyR': keys.R, 'KeyS': keys.S, 'KeyT': keys.T,
        'KeyU': keys.U, 'KeyV': keys.V, 'KeyW': keys.W, 'KeyX': keys.X,
        'KeyY': keys.Y, 'KeyZ': keys.Z,
        'BracketLeft': keys.BigCurlyBracLeft,
        'BracketRight': keys.BigCurlyBracRight,
        'Backslash': keys.BackSlashLine,
        'Backspace': keys.BackSpace,
        'CapsLock': keys.CapsLock,
        'Enter': keys.Enter,
        'ShiftLeft': keys.Shift1, 'ShiftRight': keys.Shift2,
        'Comma': keys.LesserThanComma,
        'Period': keys.GreaterThanDot,
        'Slash': keys.QuestionMarkSlash,
        'ArrowUp': keys.Up, 'ArrowDown': keys.Down, 'ArrowLeft': keys.Left, 'ArrowRight': keys.Right,
        'ControlLeft': keys.Control1, 'ControlRight': keys.Control2,
        'Space': keys.SpaceBar,
        'AltLeft': keys.Alt1, 'AltRight': keys.Alt2,
        'MetaLeft': keys.Win1, 'MetaRight': keys.Win2,
        'Backquote': keys.Esc,
        'Semicolon': keys.SemiandColon, 'Quote': keys.SingleDoubleQuote
    };

    if (keyMapping[event.code]) {
        keyMapping[event.code].classList.remove('keyboardpressedActivity');
        if ((event.code.startsWith('Shift')) || (event.code === "CapsLock") || (event.code.startsWith('Control'))) {
            keyplayAudio();
        }
    }

    if (event.code.startsWith('Shift')) {
        autoTurnOffShift();
        if (CapsLockonoff) {
            updateAlphabetCase(CapsLockonoff);
        }
    }

    if (event.code.startsWith('Control')) {
        Control12onoff = false;
        keys.Control1.classList.remove('activeBtn');
        keys.Control2.classList.remove('activeBtn');
    }
    if (event.code.startsWith('Tab')) {
        event.preventDefault();
        const start = inputBox.selectionStart;
        const end = inputBox.selectionEnd;
        const tabCharacter = '\t';
        inputBox.value = inputBox.value.substring(0, start) + tabCharacter + inputBox.value.substring(end);
        inputBox.selectionStart = inputBox.selectionEnd = start + 1;
    }
    if (event.code.startsWith('Del')) {
        const cursorPosition = inputBox.selectionStart;
        const inputValue = inputBox.value;
        if (cursorPosition < inputValue.length) {
            const newValue = inputValue.slice(0, cursorPosition + 1) + inputValue.slice(cursorPosition + 1);
            inputBox.value = newValue;
            inputBox.setSelectionRange(cursorPosition, cursorPosition);
        }
    }
    if (event.code.startsWith('F')) {
        FnOnOff = false
        lightDarkFontwhileFn(FnOnOff);
        keys.Fn1.classList.remove('keyboardpressedActivity');
        keys.Fn2.classList.remove('keyboardpressedActivity');
    }
}

for (let key of Object.values(keys)) {
    key.addEventListener('mousedown', function () {
        key.classList.toggle('keyboardpressedActivity');
        keyplayAudio();
    });
    key.addEventListener('mouseup', function () {
        key.classList.toggle('keyboardpressedActivity');
        inputBox.focus();
    });
}

alphabetArray.forEach(button => {
    button.addEventListener('mousedown', function () {
        button.classList.add('keyboardpressedActivity');
        if (Control12onoff) {
            switch (button.id) {
                case 'A':
                    selectAllText();
                    break;
                case 'C':
                    copyText();
                    break;
                case 'V':
                    pasteText();
                    break;
                case 'X':
                    cutText();
                    break;
                default:
                    break;
            }
        }
        else {
            const charToAdd = CapsLockonoff || Shift12onoff ? button.innerText.toUpperCase() : button.innerText.toLowerCase();
            const startPos = inputBox.selectionStart;
            const value = inputBox.value;
            inputBox.value = value.substring(0, startPos) + charToAdd + value.substring(startPos);
            inputBox.setSelectionRange(startPos + charToAdd.length, startPos + charToAdd.length);
            inputBox.focus();
        }
    });
    button.addEventListener('mouseup', function () {
        button.classList.remove('keyboardpressedActivity');
    });
});
specialArray.forEach(button => {
    button.addEventListener('mousedown', function () {
        button.classList.add('keyboardpressedActivity');
        const leftSidetext = button.querySelector('.leftSide').innerText;
        const rightSidetext = button.querySelector('.rightSide').innerText;
        const extractedText = Shift12onoff ? leftSidetext : rightSidetext;
        const startPos = inputBox.selectionStart;
        const value = inputBox.value;
        inputBox.value = value.substring(0, startPos) + extractedText + value.substring(startPos);
        inputBox.setSelectionRange(startPos + extractedText.length, startPos + extractedText.length);
    });
    button.addEventListener('mouseup', function () {
        button.classList.remove('keyboardpressedActivity');
    });
});
numberArray.forEach(button => {
    button.addEventListener('mousedown', function () {
        button.classList.add('keyboardpressedActivity');
        const lowerSidetext = button.querySelector('.leftSide>.lowerSide').innerText;
        const upperSidetext = button.querySelector('.leftSide>.upperSide').innerText;
        const extractedText = Shift12onoff ? upperSidetext : lowerSidetext;
        const startPos = inputBox.selectionStart;
        const value = inputBox.value;
        inputBox.value = value.substring(0, startPos) + extractedText + value.substring(startPos);
        inputBox.setSelectionRange(startPos + extractedText.length, startPos + extractedText.length);
    });
    button.addEventListener('mouseup', function () {
        button.classList.remove('keyboardpressedActivity');
    });
});
CapsLock.addEventListener('mousedown', () => {
    CapsLockonoff = !CapsLockonoff;
    keys.CapsLock.classList.toggle("activeBtn");
    updateAlphabetCase(CapsLockonoff);
    if (!CapsLockonoff) {
        updateAlphabetCase(Shift12onoff);
    }
});

Shift1.addEventListener('mousedown', () => {
    Shift12onoff = true;
    (!CapsLockonoff) ? updateAlphabetCase(Shift12onoff) : updateAlphabetCase(!Shift12onoff);
    lightDarkFontwhileShifting(Shift12onoff);
    keys.Shift1.classList.add('activeBtn');
    keys.Shift2.classList.add('activeBtn');
});
Shift1.addEventListener('mouseup', () => {
    autoTurnOffShift();
    if (CapsLockonoff) {
        updateAlphabetCase(CapsLockonoff);
    }
});
Shift2.addEventListener('mousedown', () => {
    Shift12onoff = true;
    updateAlphabetCase(Shift12onoff);
    lightDarkFontwhileShifting(Shift12onoff);
    keys.Shift1.classList.add('activeBtn');
    keys.Shift2.classList.add('activeBtn');
});
Shift2.addEventListener('mouseup', () => {
    autoTurnOffShift();
    if (CapsLockonoff) {
        updateAlphabetCase(CapsLockonoff);
    }
});
Control1.addEventListener('mousedown', () => {
    keys.Control1.classList.add('activeBtn');
    keys.Control2.classList.add('activeBtn');
});
Control1.addEventListener('mouseup', () => {
    keys.Control1.classList.remove('activeBtn');
    keys.Control2.classList.remove('activeBtn');
});
Control2.addEventListener('mousedown', () => {
    keys.Control1.classList.add('activeBtn');
    keys.Control2.classList.add('activeBtn');
});
Control2.addEventListener('mouseup', () => {
    keys.Control1.classList.remove('activeBtn');
    keys.Control2.classList.remove('activeBtn');
});
BackSpace.addEventListener('click', () => {
    const startPos = inputBox.selectionStart;
    const endPos = inputBox.selectionEnd;
    const value = inputBox.value;

    if (!Control12onoff) {
        if (startPos !== endPos) {
            inputBox.value = value.substring(0, startPos) + value.substring(endPos);
            inputBox.setSelectionRange(startPos, startPos);
        } else {
            if (startPos > 0) {
                inputBox.value = value.substring(0, startPos - 1) + value.substring(startPos);
                inputBox.setSelectionRange(startPos - 1, startPos - 1);
            }
        }
    } else {
        inputBox.value = "";
    }
});
Esc.addEventListener('click', () => {
    const startPos = inputBox.selectionStart;
    const endPos = inputBox.selectionEnd;
    const value = inputBox.value;
    let newText;
    if (Shift12onoff) {
        newText = '~';
    } else {
        newText = '`';
    }
    if (startPos !== endPos) {
        inputBox.value = value.substring(0, startPos) + newText + value.substring(endPos);
        inputBox.setSelectionRange(startPos + newText.length, startPos + newText.length);
    } else {
        inputBox.value = value.substring(0, startPos) + newText + value.substring(startPos);
        inputBox.setSelectionRange(startPos + newText.length, startPos + newText.length);
    }
});

com.addEventListener('click', () => {
    const startPos = inputBox.selectionStart;
    const endPos = inputBox.selectionEnd;
    const value = inputBox.value;
    const newText = '.com';
    if (startPos !== endPos) {
        inputBox.value = value.substring(0, startPos) + newText + value.substring(endPos);
        inputBox.setSelectionRange(startPos + newText.length, startPos + newText.length);
    } else {
        inputBox.value = value.substring(0, startPos) + newText + value.substring(startPos);
        inputBox.setSelectionRange(startPos + newText.length, startPos + newText.length);
    }
});
Enter.addEventListener('click', () => {
    const startPos = inputBox.selectionStart;
    const endPos = inputBox.selectionEnd;
    const value = inputBox.value;
    const newText = '\n';
    if (startPos !== endPos) {
        inputBox.value = value.substring(0, startPos) + newText + value.substring(endPos);
        inputBox.setSelectionRange(startPos + newText.length, startPos + newText.length);
    } else {
        inputBox.value = value.substring(0, startPos) + newText + value.substring(startPos);
        inputBox.setSelectionRange(startPos + newText.length, startPos + newText.length);
    }
});

Del.addEventListener('click', () => {
    const cursorPosition = inputBox.selectionStart;
    const inputValue = inputBox.value;
    if (cursorPosition < inputValue.length) {
        const newValue = inputValue.slice(0, cursorPosition + 1) + inputValue.slice(cursorPosition + 1);
        inputBox.value = newValue;
        inputBox.setSelectionRange(cursorPosition, cursorPosition);
    }
});
Tab.addEventListener('click', () => {
    const startPos = inputBox.selectionStart;
    const endPos = inputBox.selectionEnd;
    const value = inputBox.value;
    const spaces = '    ';
    if (startPos !== endPos) {
        inputBox.value = value.substring(0, startPos) + spaces + value.substring(endPos);
        inputBox.setSelectionRange(startPos + spaces.length, startPos + spaces.length);
    } else {
        inputBox.value = value.substring(0, startPos) + spaces + value.substring(startPos);
        inputBox.setSelectionRange(startPos + spaces.length, startPos + spaces.length);
    }
});
SpaceBar.addEventListener('click', () => {
    const startPos = inputBox.selectionStart;
    const endPos = inputBox.selectionEnd;
    const value = inputBox.value;
    const space = ' ';
    if (startPos !== endPos) {
        inputBox.value = value.substring(0, startPos) + space + value.substring(endPos);
        inputBox.setSelectionRange(startPos + space.length, startPos + space.length);
    } else {
        inputBox.value = value.substring(0, startPos) + space + value.substring(startPos);
        inputBox.setSelectionRange(startPos + space.length, startPos + space.length);
    }
});
Left.addEventListener('click', () => {
    if (inputBox.selectionStart > 0) {
        inputBox.setSelectionRange(inputBox.selectionStart - 1, inputBox.selectionStart - 1);
    }
});
Right.addEventListener('click', () => {
    if (inputBox.selectionStart < inputBox.value.length) {
        inputBox.setSelectionRange(inputBox.selectionStart + 1, inputBox.selectionStart + 1);
    }
});
Up.addEventListener('click', () => {
    const value = inputBox.value;
    const lines = value.split('\n');
    const currentLineIndex = value.substr(0, inputBox.selectionStart).split('\n').length - 1;
    const currentColumnIndex = inputBox.selectionStart - value.lastIndexOf('\n', inputBox.selectionStart - 1) - 1;

    if (currentLineIndex > 0) {
        const previousLine = lines[currentLineIndex - 1];
        const newColumnIndex = Math.min(currentColumnIndex, previousLine.length);
        const newCursorPosition = value.lastIndexOf('\n', inputBox.selectionStart - 1) - 1 + newColumnIndex + 1;
        inputBox.setSelectionRange(newCursorPosition, newCursorPosition);
    }
});
Down.addEventListener('click', () => {
    const value = inputBox.value;
    const lines = value.split('\n');
    const currentLineIndex = value.substr(0, inputBox.selectionStart).split('\n').length - 1;
    const currentColumnIndex = inputBox.selectionStart - value.lastIndexOf('\n', inputBox.selectionStart - 1) - 1;

    if (currentLineIndex < lines.length - 1) {
        const nextLine = lines[currentLineIndex + 1];
        const newColumnIndex = Math.min(currentColumnIndex, nextLine.length);
        const newCursorPosition = value.indexOf('\n', inputBox.selectionStart) + newColumnIndex + 1;
        inputBox.setSelectionRange(newCursorPosition, newCursorPosition);
    }
});
