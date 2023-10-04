document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("textarea");
    var adlDiv = document.querySelector(".adl");
    var runButton = document.getElementById("run");

    runButton.addEventListener("click", function() {
        var contenido = textarea.value;

        contenido = contenido.replace(/</g, '&lt;');
        contenido = contenido.replace(/>/g, '&gt;');
        
        contenido = contenido.replace(/¿enc1\?(.*?)¿enc1\//g, '<h1>$1</h1>');
        contenido = contenido.replace(/¿enc2\?(.*?)¿enc2\//g, '<h2>$1</h2>');
        contenido = contenido.replace(/¿enc3\?(.*?)¿enc3\//g, '<h3>$1</h3>');
        contenido = contenido.replace(/¿enc4\?(.*?)¿enc4\//g, '<h4>$1</h4>');
        contenido = contenido.replace(/¿tf\?(.*?)¿tf\//g, '<td>$1</td>');
        contenido = contenido.replace(/¿q\?(.*?)¿q\//g, '<p>$1</p>');
        contenido = contenido.replace(/¿tc\?(.*?)¿tc\//g, '<tr>$1</tr>');
        contenido = contenido.replace(/¿l\?(.*?)¿l\//g, '<ul>$1</ul>');
        contenido = contenido.replace(/¿lnn\?(.*?)¿lnn\//g, '<li>$1</li>');
        contenido = contenido.replace(/¿fliky\?(.*?)¿fliky\//g, '<button>$1</button>');
        contenido = contenido.replace(/¿Conteiner\?(.*?)¿Conteiner\//g, '<div>$1</div>');
        contenido = contenido.replace(/¿teibol\?(.*?)¿teibol\//g, '<table border="1">$1</table>');

        contenido = contenido.replace(/¿zelda\?([^|]+)\|([^¿]+)¿zelda\//g, '<a href="$1">$2</a>');
        contenido = contenido.replace(/¿aiva\?(.*?)¿aiva\//g, '<input type="$1">');
        contenido = contenido.replace(/¿imatx\?(.*?)¿imatx\//g, '<img src="$1" alt="">');
        contenido = contenido.replace(/\?/g, '');

        console.log(contenido)
        adlDiv.innerHTML = contenido;
    });
});
