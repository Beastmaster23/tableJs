var defaultId = "table";
var defaultHeadId = "head";
var defaultBodyId = "body";
/** 
 * Made by @Interco
 */
/**
 * Creates and adds a table element(without doing anything else) to the given id. *No Error handling*
 * @param {String} id 
 * @param {String} tableId 
 */
function createTable(id, tableId = defaultId) {
    var tbl = document.createElement("table");
    tbl.className = "table table-striped table-hover table-responsive";
    tbl.id = tableId;
    if (id) {
        document.getElementById(id).appendChild(tbl);
        return tbl;
    }
    document.body.appendChild(tbl);
    return tbl;
}
/**
 * Creates a table and adds a header with a table body element with the given id's
 * @param {String} tid 
 * @param {String} hid 
 * @param {String} bid 
 */
function createCompleteTable(tid, hid, bid) {
    createTable(tid);
    addHead(tid, hid);
    addBody(tid, bid);
}
/**
 * Creates and adds a header to the given id. Options object can be given as well. *Must have an id on the object*
 * @param {String} id 
 * @param {Object} options 
 */
function addHead(id = defaultId, options = { id: defaultHeadId }) {
    var head = document.createElement("thead");
    head.className = "";
    head.id = options.id;
    document.getElementById(id).appendChild(head);

    return head;
}
/**
 * Creates and adds a table body to the given id. Options object can be given as well. *Must have an id on the object*
 * @param {String} id 
 * @param {Object} options 
 */
function addBody(id = defaultId, options = { id: defaultBodyId }) {
    var head = document.createElement("tbody");
    head.className = "";
    head.id = options.id;
    document.getElementById(id).appendChild(head);

    return head;
}
/**
 * Creates and adds a header to the given id. Options object can be given as well.
 * @param {String} id 
 * @param {Object} options 
 */
function addThCells(arr, options = { id: defaultHeadId, dir: 0, cellOptions: [] }) {
    var tbl = document.getElementById(options.id);
    var row = tbl.insertRow(options.dir);
    var cells = [];
    for (let i = 0; i < arr.length; i++) {
        let elem = addThCell(arr[i], row, options.cellOptions[i]);
        cells.push(elem);
    }

    cells.reverse();
    return cells;
}
/**
 * Creates and adds a header element to the row. Also has an option variable that controls how it inserts the element. *currently unavailable*
 * @param {HTMLElement} value 
 * @param {HTMLElement} row 
 * @param {*} options 
 */
function addThCell(value, row, options = { id: defaultHeadId, dir: -1 }) {
    let elem = document.createElement("th");
    elem.innerHTML = value;
    row.appendChild(elem);
    return elem;
}
/**
 * Creates and adds a table cell element to the row. Also has an option variable that controls how it inserts the element. 
 * @param {HTMLElement} value 
 * @param {HTMLElement} row 
 * @param {*} options 
 */
function addCell(value, row, options = { id: defaultBodyId, dir: -1 }) {
    let elem = row.insertCell(options.dir);
    elem.innerHTML = value;
    elem.className;
    return elem;
}
/**
 * Adds cells to the table id with the given array.
 * @param {Array} arr 
 * @param {*} options 
 */
function addCells(arr, options = { id: defaultBodyId, dir: 0, cellOptions: [] }) {
    var tbl = document.getElementById(options.id);
    var row = tbl.insertRow(-1);
    var cells = [];
    for (let i = 0; i < arr.length; i++) {
        let elem = addCell(arr[i], row, options.cellOptions[i]);
        cells.push(elem);
    }

    cells.reverse();
    return cells;
}
/**
 * Adds editable cells to the table id with the given array.
 * @param {Array} arr 
 * @param {String} id 
 */
function editableCells(arr, id = defaultBodyId) {
    var tbl = document.getElementById(id);
    var row = tbl.insertRow(-1);
    var cells = [];
    for (let i = 0; i < arr.length; i++) {
        var elem = row.insertCell(-1);
        elem.innerHTML = arr[i];
        elem.contentEditable = "true";

        cells.push(elem);
    }
    cells.reverse();
    return cells;
}
//Hmmm....
var add = function () {
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].innerHTML += "<button >apply</button>";
    }
}

function loadTable() {
    createCompleteTable();
    var list = ["Test data", "Candy"];
    var data = [0, "Lollipop"];
    var th = addThCells(list);
    /*for (let i = 0; i < 100; i++) {
        var edit = editableCells(list);
    }*/

    var noedit = addCells(data);
    //console.log(th);
}
