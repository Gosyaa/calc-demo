document.addEventListener('keydown', handleKey);

function round6(a){
    return Math.round(a * 10000000) / 10000000;
}

function calc(){
    if (document.querySelector("#result").innerText == ''){
        document.querySelector("#result").innerText = '0';
        return;
    }
    if (/[-+*/]$/.test(document.querySelector("#result").innerText))
        addChar('0');
    try{
        document.querySelector("#result").innerText = round6(eval(document.querySelector("#result").innerText));
    }
    catch(e){
        document.querySelector("#result").innerText = "Error";
    }
    return;
}

function clearError(){
    if (document.querySelector("#result").innerText === 'Error' ||
    document.querySelector("#result").innerText == 'NaN' ||
    document.querySelector("#result").innerText == 'Infinity')
        clearField();
    return;
}

function addChar(char){
    clearError();
    document.querySelector("#result").innerText += char;
    return;
}

function addCalc(char){
    clearError();
    if (document.querySelector("#result").innerText == '')
        document.querySelector("#result").innerText = '0';
    if (/[+*/-]$/.test(document.querySelector("#result").innerText))
        back();
    addChar(char);
}

function addDot(){
    clearError();
    if (document.querySelector("#result").innerText.slice(-1) == '.')
        return;
    if (document.querySelector("#result").innerText === '' ||
     !(/^[0-9]$/.test(document.querySelector("#result").innerText.slice(-1))))
        addChar('0');
    addChar('.');
}

function clearField(){
    document.querySelector("#result").innerText = "";
    return; 
}

function back(){
    clearError();
    if (document.querySelector("#result").innerText.length > 0){
        document.querySelector("#result").innerText = document.querySelector("#result").innerText.slice(0, -1);
    }
    return;
}

function handleKey(event){
    if (/^[0-9]$/.test(event.key))
        addChar(event.key);
    else if(/^[-+*/]$/.test(event.key))
        addCalc(event.key);
    else if (event.key == '=' || event.key == 'Enter')
        calc()
    else if (event.key == '.')
        addDot();
    else if(event.key === 'Escape')
        clearField();
    else if (event.key === 'Backspace')
        back();
    
    return;
}