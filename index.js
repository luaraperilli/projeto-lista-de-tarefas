"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttomElement = document.querySelector("#app button");
let listaSalva = localStorage.getItem("@ListadeTarefas");
console.log(listaSalva);
let tarefas = listaSalva !== null && JSON.parse(listaSalva) || [];
function listarTarefas() {
    listElement.innerHTML = "";
    const newLocal = "DeletarTarefa(${})";
    tarefas.map(function (item) {
        let todoElement = document.createElement("li");
        let tarefaText = document.createTextNode(item);
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        let posicao = tarefas.indexOf(item);
        linkElement.setAttribute("onclick", "deletarTarefa(" + posicao + ")");
        linkElement.setAttribute("style", "margin-left: 10px");
        let linkText = document.createTextNode("Apagar Tarefa");
        linkElement.appendChild(linkText);
        todoElement.appendChild(tarefaText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    });
}
listarTarefas();
function adicionarTarefa() {
    if (inputElement.value === "") {
        alert("Digite uma tarefa");
        return false;
    }
    else {
        let tarefaDigitada = inputElement.value;
        tarefas.push(tarefaDigitada);
        inputElement.value = "";
        listarTarefas();
        salvarDados();
    }
}
buttomElement.onclick = adicionarTarefa;
function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);
    listarTarefas();
    salvarDados();
}
function salvarDados() {
    localStorage.setItem("@ListadeTarefas", JSON.stringify(tarefas));
}
