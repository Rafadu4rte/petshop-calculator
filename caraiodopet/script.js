function calcular() 
{
    const pet = document.getElementById("pet").value;
    const nome = document.getElementById("nome").value;

    if(nome === "" || pet === "")
    {
        const mensagemErro = document.getElementById("resultado");
        mensagemErro.innerHTML = "<p style='color: red'>Erro: Informe todos os campos!</p>";
    }

    const banho = document.getElementById("banho").checked
    const tosa = document.getElementById("tosa").checked
    const vacina = document.getElementById("vacina").checked

    if(banho === false && tosa === false && vacina === false)
    {
        const mensagemCerta = document.getElementById("resposta");
        mensagemCerta.innerHTML = "<p style='color: red'>Informe ao menos um campo!</p>";
    }

    if(banho === true && tosa === false && vacina === false)
    {
        const banho = 70;

        const mensagemConta = banho
        const mensagemCerta = document.getElementById("resposta");
        mensagemCerta.innerHTML = `<p style='color: red'>Escolheu banho! O valor é:${mensagemConta}R$</p>`;
    }

    if(banho === false && tosa === true && vacina === false)
    {
        const tosa = 80;

        const mensagemConta = tosa
        const mensagemCerta = document.getElementById("resposta");
        mensagemCerta.innerHTML = `<p style='color: red'>Escolheu tosa! O valor é:${mensagemConta}R$</p>`;
    }

    if(banho === false && tosa === false && vacina === true)
    {
        const vacina = 100;

        const mensagemConta = vacina
        const mensagemCerta = document.getElementById("resposta");
        mensagemCerta.innerHTML = `<p style='color: red'>Escolheu vacina! O valor é:${mensagemConta}R$</p>`;
    }

    if(banho === true && tosa === true && vacina === false)
    {
        const tosa = 80;
        const banho = 70;

        const mensagemConta = banho + tosa
        const mensagemCerta = document.getElementById("resposta");
        mensagemCerta.innerHTML = `<p style='color: red'>Escolheu banho e tosa! O valor é:${mensagemConta}R$</p>`;
    }

    if(banho === true && tosa === false && vacina === true)
    {
        const vacina = 100;
        const banho = 70;

        const mensagemConta = banho + vacina
        const mensagemCerta = document.getElementById("resposta");
        mensagemCerta.innerHTML = `<p style='color: red'>Escolheu banho e vacina! O valor é:${mensagemConta}R$</p>`;
    }

    if(banho === false && tosa === true && vacina === true)
    {
        const vacina = 100;
        const tosa = 80;
        
        const mensagemConta = tosa + vacina
        const mensagemCerta = document.getElementById("resposta");
        mensagemCerta.innerHTML = `<p style='color: red'>Escolheu tosa e vacina! O valor é:${mensagemConta}R$</p>`;
    }
    
    if(banho === true && tosa === true && vacina === true)
    {
        const vacina = 100;
        const tosa = 80;
        const banho = 70;
        
        const mensagemConta = banho + tosa + vacina
        const mensagemCerta = document.getElementById("resposta");
        mensagemCerta.innerHTML = `<p style='color: red'>Escolheu todos! O valor é: ${mensagemConta}R$</p>`;
    }

}
