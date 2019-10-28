document.addEventListener('DOMContentLoaded', function() {

    let checkPageButton = document.getElementById('createReport');
    checkPageButton.addEventListener('click', function() {

        let shortName = document.getElementById('shortName').value;

        let eventCategoryInner = document.getElementById('categoryInner');
        let eventPublicityOpen = document.getElementById('publicityOpen');
        let eventCategoryOuter = document.getElementById('categoryOuter');
        let eventPublicityClosed = document.getElementById('publicityClosed');

        let category="";
        let publicity="";

        if (eventCategoryInner.checked)
            category="Внутреннее";
        else if(eventCategoryOuter.checked)
            category="Внешнее";

        if (eventPublicityOpen.checked)
            publicity="Открытое";
        else if (eventPublicityClosed.checked)
            publicity="Закрытое";

        if (category === "" || publicity === "" || shortName === "")
            alert("Введите все значения!");
        else {

            chrome.storage.local.set({"category" : category}, function(){
                chrome.storage.local.set({"publicity":publicity}, function(){
                    chrome.storage.local.set({"shortName" : shortName}, function(){
                        chrome.tabs.create({url: chrome.runtime.getURL("report.html")});
                    })
                })
            });

        }
        });
}, false);