
//Change la couleur de fond des boutons au clic
const lis = document.querySelectorAll('li')
lis.forEach(li => {
  li.addEventListener('mousedown', () => {
    li.style.backgroundColor = '#4f5c79a8';
    li.style.boxShadow = 'inset -2px -2px 4px #aaaaaa, inset 2px 2px 3px #000000d9';
  })
})

//déclaration des boutons 
const btnOk = document.getElementById('ok');
const setButton = document.createElement('button');
setButton.textContent = 'Set';

//déclaration des input 
const newRowTableau1 = document.createElement('tr');
const newRowTableau2 = document.createElement('tr');
const renduCellTableau2 = document.createElement('td');
const ownerSelectInput = document.getElementById('owner');
const nameInput = document.getElementById('name');
const borrowerNameInput = document.getElementById('borrowerName');
const borrowDateInput = document.getElementById('borrowDate');
const returnDateCell = document.getElementById('returnDate');
const ligneNumerosList = document.getElementById('ligne-numeros');
let ligneId = 1

//------------------Actions quand le bouton OK est cliqué------------------------------

btnOk.addEventListener('click', function() {
  
  // Créer une nouvelle ligne pour tableau1
  const newRowTableau1 = document.createElement('tr');
  newRowTableau1.id = `ligneTableau1_${ligneId}`;

  // Créer les cellules pour tableau1 et définir les valeurs
  const ownerCellTableau1 = document.createElement('td');
  ownerCellTableau1.textContent = ownerSelectInput.value;

  const nameCellTableau1 = document.createElement('td');
  nameCellTableau1.textContent = nameInput.value;

  const borrowerCellTableau1 = document.createElement('td');
  borrowerCellTableau1.textContent = borrowerNameInput.value;

  const borrowDateCellTableau1 = document.createElement('td');
  borrowDateCellTableau1.textContent = borrowDateInput.value;

  const returnDateCellTableau1 = document.createElement('td');
  returnDateCellTableau1.textContent = returnDateCell.value;

  // Insérer les cellules dans la nouvelle ligne de tableau1
  newRowTableau1.appendChild(ownerCellTableau1);
  newRowTableau1.appendChild(nameCellTableau1);
  newRowTableau1.appendChild(borrowerCellTableau1);
  newRowTableau1.appendChild(borrowDateCellTableau1);
  newRowTableau1.appendChild(returnDateCellTableau1); 
 
  // Insérer la nouvelle ligne dans tableau1 au-dessus de la première ligne existante
  const firstRowTableau1 = document.getElementById('tableau1').rows[1];
  firstRowTableau1.parentNode.insertBefore(newRowTableau1, firstRowTableau1);
  
  // Ajouter le numéro de ligne à la liste <ul>
  const ligneNumeroItem = document.createElement('li');
  ligneNumeroItem.setAttribute('id','li-numero')
  ligneNumeroItem.textContent = ligneId;
  ligneNumerosList.appendChild(ligneNumeroItem);

  // Incrémenter le numéro de ligne
  ligneId++;

  // Créer une nouvelle ligne pour tableau2
  const newRowTableau2 = document.createElement('tr');
  newRowTableau2.id = `ligneTableau2_${ligneId}`;

  // Créer la cellule pour tableau2 et définir la valeur
  const renduCellTableau2 = document.createElement('td');

  // Insérer la cellule dans la nouvelle ligne de tableau2
  newRowTableau2.appendChild(renduCellTableau2);
  
  // Insérer la nouvelle ligne dans tableau2 au-dessus de la première ligne existante
  const firstRowTableau2 = document.getElementById('tableau2').rows[1];
  firstRowTableau2.parentNode.insertBefore(newRowTableau2, firstRowTableau2);
 
  // Vérifier si la date de retour est remplie pour définir la valeur de la cellule "Rendu" dans tableau2
  if (returnDateCell.value !== '') {
    renduCellTableau2.textContent = 'OUI';
    renduCellTableau2.style.backgroundColor = 'green';
  } else {
    renduCellTableau2.textContent = 'NON';
    renduCellTableau2.style.backgroundColor = '#c70b0bce';
  } 

  //quand le bouton 'ok' est cliqué, vide les input
  nameInput.value = "";
  borrowerNameInput.value = "";
  borrowDateInput.value = "";
  returnDateCell.value = "";   
   
//------------------Création du bouton SET------------------------------  

  // Créer un conteneur pour les boutons "Set"
  const setContainer = document.createElement('div');
  setContainer.classList.add('set-container');
 
  // Sélectionner l'élément div avec l'ID "set" 
  const setDiv = document.getElementById('setDiv');
 
  // Créer un bouton "Set" pour chaque nouvelle ligne
  const setButton = document.createElement('button');
  setButton.textContent = 'SET';

  //Attribuer un ID au bouton set
  setButton.setAttribute('id','Set')
  
  // Définir les mêmes styles que le bouton "OK" 
  setButton.style.fontWeight = 'bold';
  setButton.style.backgroundColor = '#028d02';
  setButton.style.border = '2px solid #0c0058';
  setButton.style.borderRadius = '5px';  
  setButton.style.cursor = 'pointer';
  setButton.style.boxShadow ='inset 2px 2px 4px #01ad01, inset -2px -2px 3px #000000d9';

  // Insérer le bouton "Set" à l'intérieur du conteneur
  setContainer.appendChild(setButton);

  // Insérer le bouton "Set" à l'intérieur de la div "set"
  setDiv.appendChild(setContainer);

  // Créer un effet bouton enfoncé
  const setButtons = document.querySelectorAll('#Set');
  setButtons.forEach(function(setButton) {
    setButton.addEventListener('mousedown', function() {
      setButton.style.boxShadow = 'inset -3px -3px 3px #02aa02, inset 2px 2px 3px #000000d9';
    });

  setButton.addEventListener('mouseup', function() {
    setButton.style.boxShadow = 'inset 2px 2px 4px #01ad01, inset -2px -2px 3px #000000d9';
    });
  });
  
  //Vide les valeurs des cellules des tableaux 1 & 2 et les renvoient dans leurs inputs respectives
  setButton.addEventListener('click', function() {
    // Extraire les valeurs des cellules de tableau1
    const ownerValue = ownerCellTableau1.textContent;
    const nameValue = nameCellTableau1.textContent;
    const borrowerValue = borrowerCellTableau1.textContent;
    const borrowDateValue = borrowDateCellTableau1.textContent;
    const returnDateValue = returnDateCellTableau1.textContent;

    // Attribuer les valeurs extraites aux champs de saisie correspondants
    ownerSelectInput.value = ownerValue;
    nameInput.value = nameValue;
    borrowerNameInput.value = borrowerValue;
    borrowDateInput.value = borrowDateValue;
    returnDateCell.value = returnDateValue;

    // Vider les cellules de tableau1 et la cellule de tableau2
    ownerCellTableau1.textContent = '';
    nameCellTableau1.textContent = '';
    borrowerCellTableau1.textContent = '';
    borrowDateCellTableau1.textContent = '';
    returnDateCellTableau1.textContent = '';
    renduCellTableau2.textContent = '';
    renduCellTableau2.style.backgroundColor = '#c5a180e8'

    ownerValue = ownerCellTableau1.textContent;
    nameValue = nameCellTableau1.textContent;
    borrowerValue = borrowerCellTableau1;
    borrowDateValue = borrowDateCellTableau1;
    returnDateValue = returnDateCellTableau1;
  });
});


