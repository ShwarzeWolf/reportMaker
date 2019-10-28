let page = document.body;

let coordinator = "Шараева Кристина Витальевна, +79315795323, kristinasharaeva1999@gmail.com";
let name = page.querySelector('[itemprop=name]').textContent.toString();
let date = page.querySelector('[class=date]').textContent.toString();
let place = page.querySelector('[itemprop=location]').textContent.toString();
let time = page.querySelector('[class=time]').textContent.toString();

let descriptionHTML = page.querySelector('[class="mb-0 wysiwyg description"]');
let descriptionParagraphs = descriptionHTML.getElementsByTagName('p');
let numberOfParagraphs = descriptionParagraphs.length;
let site = descriptionParagraphs[numberOfParagraphs - 2].textContent.split(':')[1];

numberOfParagraphs = numberOfParagraphs - 2;
var i = 0;
let description="";

while (i != numberOfParagraphs){
    description = description + "\n" + descriptionParagraphs[i].textContent;
    i = i+1;
};

let annotation = "Уже скоро пройдет " + name + "!";

chrome.storage.local.set({"coordinator" : coordinator}, function(){
    chrome.storage.local.set({"annotation" : annotation}, function(){
        chrome.storage.local.set({"description" : description}, function () {
            chrome.storage.local.set({"site" : site}, function(){
                chrome.storage.local.set({"name" :name }, function(){
                    chrome.storage.local.set({"date" : date }, function(){
                        chrome.storage.local.set({"place" : place}, function(){
                            chrome.storage.local.set({"time" : time}, function () {
                                alert("data saved");
                            })
                        })
                    })
                })
            })
        })
    })

});


