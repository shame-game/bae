const GS_ID = "1vRmroCgcUy2fGXMzA3bMvNvkAYic0jzOqC11UXUOVC4";
const vam = document.querySelector.bind(document)
const vams = document.querySelectorAll.bind(document)

fetchSheet
    .fetch({
        gSheetId: GS_ID,
        wSheetName: "Templatev1",
    })
    .then((rows) => {
        let content = {};
        rows.forEach(row => {
            let key = row.section;
            Object(content).hasOwnProperty(key) || Object.assign(content, { [key]: [] });
            content[key].push(row);
        });
        packages = rows.filter(row => row.section == 'packages');
        console.log(content.color);
    
    });
