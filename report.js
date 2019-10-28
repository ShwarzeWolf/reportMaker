chrome.storage.local.get(function(data) {

    let name = data["name"];
    let shortName = data["shortName"];
    let category = data["category"];
    let publicity = data["publicity"];
    let date = data["date"];
    let site = data["site"];
    let annotation = data["annotation"];
    let description = data["description"];

    let participants="";
    if (publicity === "Открытое") {
        participants = "Для участия приглашаются все желающие";
    } else {
        participants = "К участию приглашаются студенты университета ИТМО";
    }

    let manager = "";
    let orgStructure="";
    if (category === "Внешнее") {
        manager = "Степанищева Алёна Алексеевна";
        orgStructure = "Управление по развитию студенческих инициатив";
    } else {
        manager = " ";
        orgStructure = " ";
    }

    let place = data["place"];
    let time = data["time"];
    let coordinator = data["coordinator"];

    let table = document.getElementById("report");
    table.rows[1].cells[0].innerHTML = name;
    table.rows[3].cells[0].innerHTML = shortName;
    table.rows[5].cells[0].innerHTML = category;
    table.rows[7].cells[0].innerHTML = publicity;
    table.rows[9].cells[0].innerHTML = "Федеральный";
    table.rows[11].cells[0].innerHTML = date;
    table.rows[13].cells[0].innerHTML = site;
    table.rows[16].cells[0].innerHTML = annotation;
    table.rows[18].cells[0].innerHTML = description;
    table.rows[20].cells[0].innerHTML = participants;
    table.rows[22].cells[0].innerHTML = manager;
    table.rows[24].cells[0].innerHTML = orgStructure;
    table.rows[26].cells[0].innerHTML = place;
    table.rows[28].cells[0].innerHTML = time;
    table.rows[30].cells[0].innerHTML = coordinator;
});



