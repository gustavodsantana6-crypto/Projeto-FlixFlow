// ==========================================================================
// FLIXFLOW - LÓGICA E INTERAÇÃO DO CATÁLOGO DE SÉRIES
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("🍿 FlixFlow carregado com sucesso! Pronto para maratonar.");

    // 1. Efeito visual nos links do menu ao passar o mouse (Hover Dinâmico)
    const linksSeries = document.querySelectorAll("header nav a");

    linksSeries.forEach(link => {
        link.addEventListener("mouseenter", () => {
            // Dá um leve destaque na série selecionada
            link.style.textShadow = "0 0 10px #E50914, 0 0 20px #E50914";
            link.style.transition = "all 0.3s ease";
        });

        link.addEventListener("mouseleave", () => {
            // Remove o destaque quando o mouse sai
            link.style.textShadow = "none";
        });
    });

    // 2. Sistema de Recomendação Aleatória (Botão Surpresa)
    const mainSection = document.querySelector("main");
    
    if (mainSection) {
        // Criando um botão dinamicamente via JS para a página inicial
        const botaoSurpresa = document.createElement("button");
        botaoSurpresa.textContent = "🔀 Me recomende uma série!";
        botaoSurpresa.className = "btn-surpresa";
        
        // Estilização rápida do botão via JS (pode ser modificada no seu CSS)
        botaoSurpresa.style.background = "#E50914";
        botaoSurpresa.style.color = "#ffffff";
        botaoSurpresa.style.border = "none";
        botaoSurpresa.style.padding = "12px 24px";
        botaoSurpresa.style.fontSize = "1rem";
        botaoSurpresa.style.fontWeight = "bold";
        botaoSurpresa.style.borderRadius = "4px";
        botaoSurpresa.style.cursor = "pointer";
        botaoSurpresa.style.marginTop = "20px";
        botaoSurpresa.style.transition = "0.2s";

        // Adiciona o botão dentro do <main>
        mainSection.appendChild(botaoSurpresa);

        // Lista com os links das suas páginas internas
        const paginasSeries = [
            "pagina2.html", "pagina3.html", "pagina4.html", "pagina5.html",
            "pagina6.html", "pagina7.html", "pagina8.html", "pagina9.html", "pagina10.html"
        ];

        // Ação ao clicar no botão: Redireciona para uma série aleatória
        botaoSurpresa.addEventListener("click", () => {
            botaoSurpresa.textContent = "Carregando...";
            botaoSurpresa.style.opacity = "0.7";
            
            setTimeout(() => {
                const indiceAleatorio = Math.floor(Math.random() * paginasSeries.length);
                const paginaEscolhida = paginasSeries[indiceAleatorio];
                
                // Redireciona o usuário para a página sorteada
                window.location.href = paginaEscolhida;
            }, 800); // Pequeno delay para simular o processamento do sistema
        });

        // Efeito de hover no botão
        botaoSurpresa.addEventListener("mouseover", () => botaoSurpresa.style.background = "#ff1e27");
        botaoSurpresa.addEventListener("mouseout", () => botaoSurpresa.style.background = "#E50914");
    }
});