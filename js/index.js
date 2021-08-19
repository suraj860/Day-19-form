
// tried using windows local storage method//

 function firstName(event){
     let a = event.target.value
     window.localStorage.setItem('firstName' , a);
 }

function lastName(event){
    let b = event.target.value
    window.localStorage.setItem('lastName' , b);
}

function address(event){
    let c = event.target.value
    window.localStorage.setItem('address' , c);
}

function pincode(event){
    let d = event.target.value
    window.localStorage.setItem('pincode' , d);
}

function state(event){
    let e = event.target.value
    window.localStorage.setItem('state' , e);
}

function country(event){
    let f = event.target.value
    window.localStorage.setItem('country' , f);
}



// Adding tr , and td to the table and assigning values to respective td's
//  by acessing the values stored in local storage

var table = document.querySelector("table");

var index = 1;

var array = ['firstName' , 'lastName' , 'address' , 'pincode' ,'gender', 'state' , 'country' , 'fav'];

//occure on onclick event
function submit(){ 
    //calling function to check the checked clicked food items
    foodItems();

    //calling function to check the gender 
    genders();

    //adding tr ,td and data

    var tableRow = table.insertRow(index);

    for(i=0 ; i < array.length; i++){

        let z= tableRow.insertCell(i)

        z.innerText = window.localStorage.getItem(array[i]);   
    }

    index++ 
    //resetting the form
   resetForm();
//rest the local storage
   resetStorage();
}

//let checkbox = document.querySelectorAll('input[type=checkbox]')

function foodItems(){
    const checkboxes = document.querySelectorAll(`input[type="checkbox"]:checked`);
    console.log(checkboxes)
    let values = "";
    //checking selected items

    let count = 0

    checkboxes.forEach((checkbox) => {
    
        values+=(checkbox.value);
        count++
    });
   window.localStorage.setItem('fav' , JSON.stringify(values))

   //if selected less than 2 items
   if(count>=2){
       return values
   }else{
       alert("chosse atleat two food items")
       return false
   }
}


//selecting gender

var sex = document.querySelectorAll('input[type=radio]');

function genders(){

   let count=0

  for(let i =0 ; i<sex.length ; i++){
     if(sex[i].checked){
        window.localStorage.setItem('gender', sex[i].value);
       count++
     }
  }

  if(count<1){
      alert("Please select Gender")
  }

}




//function to reset the form values

function resetForm(){
    document.querySelector("#myform").reset();
}

//reset local storage data
function resetStorage(){
    localStorage.clear();
}

// THE END//