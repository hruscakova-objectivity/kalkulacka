

var listVyplni = [];

createObjectsForVyplne= ((initialId, value) => {
    for (i=initialId; i < value;i++){
        let objectVypln = {
            id: `ID ${i+1}`,
            sirka: "",
            vyska: "",
            plocha: "",
            ostenie: "",
            nadprazie: "",
            parapet: "",
            hlbkaOstenia: ""
        }
    listVyplni.push(objectVypln);
        };
    });

onChangeIndividualnaVypln= (value, id, name) => {
    console.log(value, id, name);
    var element = listVyplni.find(x => x.id === id);
    element[name] = value;

}

    createInputFields = (listVyplni) => {
        listVyplni.forEach(element => {
            var properties = Object.keys(element);
            var h3 = document.createElement("h3");
            var div = document.createElement("div");
            var hr = document.createElement("hr");
            h3.innerText = `Vypln c.${element.id}`;
            divVsetkyVyplne.appendChild(div);
            div.appendChild(h3);
            div.appendChild(hr); 
            for (let i = 1; i < properties.length; i++) {
                vyplnProperty = properties[i];
                var label = document.createElement("label");
                var input = document.createElement("input");
                var br = document.createElement("br");
                    label.innerText = vyplnProperty;
                    input.type = "number";
                    input.setAttribute("onchange", "onChangeIndividualnaVypln(value, id, name)"); 
                    input.setAttribute("id", element.id);    
                    input.setAttribute("name", vyplnProperty); 
                    div.setAttribute("id", element.id);
                    div.appendChild(label);
                    div.appendChild(input);
                    div.appendChild(br);     
                }
            })} 
  



onChangePocetVyplni = (value, oldValue) => {
    console.log(`old value = ${oldValue} new value = ${value}`);
    var divVsetkyVyplne = document.getElementById("divVsetkyVyplne");
    value = parseInt(value);
    oldValue = parseInt(oldValue); 
    
    //INITIAL CREATION oldvalue = 0
    if (oldValue == 0 && value > 0) {
        let initialId = 0;
        createObjectsForVyplne(initialId, value);
        createInputFields(listVyplni)
    }
      
    // INCREASING oldvalue = 5 new value = 10
    else if (oldValue > 0 && value > oldValue ) {
    console.log(`increasing `);
    let initialId = parseInt(oldValue);
    createObjectsForVyplne(initialId, value);
    let restrictedList = listVyplni.slice(initialId); //?????//
    createInputFields(restrictedList);
    }

    // GETTING TO START new value = 0
    else if (value == 0) {
        listVyplni = [];
        while (divVsetkyVyplne.hasChildNodes()) {
        divVsetkyVyplne.removeChild(divVsetkyVyplne.lastChild)}; 
    }
    // DECREASING oldvalue = 2 new value =1
    else if (oldValue > value) {
        value = parseInt(value);
        oldValue = parseInt(oldValue); 
        console.log(`decreasing`);
          for (i= oldValue; i> value; i--) {
            let objectToRemove = document.getElementById(`ID ${i}`);
            let vypln = listVyplni.find(vypln => vypln.id === objectToRemove.id);
            let index= listVyplni.indexOf(vypln);
            listVyplni.splice(index);
            console.log(index);
            objectToRemove.remove();
        }

    }

    }





