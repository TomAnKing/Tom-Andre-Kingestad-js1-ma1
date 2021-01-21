const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1

const cat = {
    complain: function(){
    console.log("Meow!");
    }
}

cat.complain();


// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


// Question 3

heading.style.fontSize = "2em";


// Question 4

heading.className = "subheading";


// Question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;

paragraphColor = document.querySelector(".results p");

paragraphColor.style.backgroundColor = "yellow";


// Question 7

function getNames(list) {
    for(let i = 0; i < list.length; i++){
        console.log(list[i].name);
    }
}

getNames(cats);


// Question 8

function createCats(cats) {
    let finalHtml = "";
    for(let i = 0; i < cats.length; i++){
        
        const name = cats[i].name;
        let age = "Age unknown";
        
        if(cats[i].age) {
            age = cats[i].age;
        }


        finalHtml += `<div class "cat">
                            <h5>Name: ${name}</h5>
                            <p>Age: ${age}</p>
                            </div>
                            `;
    }

    return finalHtml;
}

const newHtml = createCats(cats);
const container = document.querySelector(".cat-container");
container.innerHTML = newHtml;
