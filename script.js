// barra di ricerca

const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card-articolo');

searchInput.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(term)) {
            card.style.display = 'flex'; // Mostra
        } else {
            card.style.display = 'none'; // Nascondi
        }
    });
});

// --- GENERATORE INDICE AUTOMATICO (Versione Robusta) ---
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.contenuto-testo');
    const tocList = document.getElementById('toc-list');
    
    // Controlla se siamo in una pagina di articolo
    if (content && tocList) {
        // Cerca tutti i titoli H2 e H3 nell'articolo
        const headings = content.querySelectorAll('h2, h3');
        
        if (headings.length > 0) {
            let html = '';

            headings.forEach((heading, index) => {
                // Se il titolo non ha un ID, creane uno automatico
                if (!heading.id) {
                    heading.id = `heading-${index}`;
                }

                const titleText = heading.textContent;
                const level = heading.tagName; // "H2" o "H3"

                // Crea la voce dell'indice
                if (level === 'H2') {
                    // Titolo principale
                    html += `<li class="toc-h2"><a href="#${heading.id}">${titleText}</a></li>`;
                } else {
                    // Sottotitolo (aggiunge un rientro visivo)
                    html += `<li class="toc-h3"><a href="#${heading.id}">↳ ${titleText}</a></li>`;
                }
            });

            // Inserisce l'HTML generato nella lista
            tocList.innerHTML = html;

            // Assicura che il titolo dell'indice sia visibile
            const title = document.querySelector('.toc-container h4');
            if(title) title.style.display = 'block';

        } else {
            // Se non ci sono titoli (H2 o H3)
            const title = document.querySelector('.toc-container h4');
            
            // Nascondi il titolo "Indice dell'articolo"
            if (title) {
                title.style.display = 'none';
            }

            // Mostra il messaggio "nessun indice"
            tocList.innerHTML = '<li class="no-index-msg">D: Questo articolo non ha un indice (mancano i titoli H2 o H3 [cioè i sottotitoli]).</li>';
        }
    }
});