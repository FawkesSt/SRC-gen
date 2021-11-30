const src = "?SRC=";
let getForm = document.querySelector(".formData");
let postLink = document.querySelector("#links");

getForm.addEventListener('submit', appendLink);
postLink.addEventListener('click', copyNote);

function  appendLink(e){
    e.preventDefault();
 
    let linkValue = document.querySelector(".newLink").value;
    let linkSRC = document.querySelector(".newSRC").value;
    let linkDate = document.querySelector(".date").value;

    const linkGen = document.createElement('li');
    linkGen.className ='dataContainter';
    postLink.appendChild(linkGen);
  
    const linkData = document.createElement('p');
    linkData.className ='finalLink';
    linkData.appendChild(document.createTextNode(linkValue + src + linkSRC));
    linkGen.appendChild(linkData);

    const  dateData = document.createElement('p');
    dateData.appendChild(document.createTextNode(linkDate));
    linkGen.appendChild(dateData);


    const copyBtn = document.createElement('button');
    copyBtn.appendChild(document.createTextNode('Copiar'));
    copyBtn.className='copyBtn';
    linkGen.appendChild(copyBtn);

}


function copyNote(e) {
    if(e.target.classList.contains('copyBtn')){        
       let linkValueCopy = e.target.parentElement;
        navigator.clipboard.writeText(linkValueCopy.querySelector('.finalLink').innerText);
    }
}




