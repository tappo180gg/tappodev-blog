Guida rapida per far funzionare Giscus (in italiano)

Passaggi principali:

1) Abilita GitHub Discussions
- Vai sul repository GitHub (https://github.com/tappo180gg/cairadev-blog)
- Entra in Settings -> Discussions e abilita le Discussions se non lo sono già.
- Crea una categoria (es. "General") per i commenti.

2) Ottieni i valori corretti per l'embed
- Vai su https://giscus.app/ e usa il configuratore per generare lo script embed.
- Copia i valori `data-repo-id` e `data-category-id` forniti (sono necessari per alcune configurazioni).
- Aggiorna lo script nel file [articoli/articolo-1.html](articoli/articolo-1.html) sostituendo i valori se diversi.

3) Mapping e hosting
- Se pubblichi su GitHub Pages usa `data-mapping="pathname"` (di solito funziona per siti statici).
- Per test locale assicurati di usare un server HTTP (non aprire i file via file://).
  Esempio: `python3 -m http.server 8000` dalla cartella del progetto.

4) Debug rapido
- Apri la console del browser (F12) e cerca errori relativi a giscus o CORS.
- Se non compaiono commenti: controlla che il repository e la categoria esistano, e che gli ID siano corretti.
- Se necessario, rigenera lo script su https://giscus.app/ e incolla il nuovo snippet.

Buon lavoro — dimmi se vuoi che proceda con l'aggiornamento automatico o il test locale.