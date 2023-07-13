function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"60q1":function(e,t,r){"use strict";r.r(t),r.d(t,"RentReceiptModule",(function(){return p}));var n,o,b,a=r("ofXK"),i=r("tyNb"),d=r("fXoL"),l=[{path:"",component:(n=function(){function e(){_classCallCheck(this,e),this.isRenderd=!1}return _createClass(e,[{key:"onEvent",value:function(e){this.jsLoad()}},{key:"ngOnInit",value:function(){this.jsLoad(),addMeta()}},{key:"jsLoad",value:function(){this.isRenderd||"function"!=typeof rentReceipt||(rentReceipt(),this.isRenderd=!0)}}]),e}(),n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=d.yb({type:n,selectors:[["app-main-page"]],hostBindings:function(e,t){1&e&&d.Nb("scroll",(function(e){return t.onEvent(e)}))("click",(function(e){return t.onEvent(e)}))("mousemove",(function(e){return t.onEvent(e)}))("focus",(function(e){return t.onEvent(e)}))},decls:127,vars:0,consts:[[1,"d-none"],[1,"site-title"],[1,"receipt-wrapper"],["id","receipts",1,"receipts"],["id","invoice1",1,"invoice"],[1,"invoiceWrapper"],[1,"container"],[1,"row"],[1,"col-12","col-md-12"],["id","receiptHeading"],[1,"col-6","col-md-6"],["id","receiptSartDate"],[1,"current-month"],["id","receiptNumber"],["id","receipt-number",1,"receipt-number"],["id","receiptGeneratDate"],["id","generate-date",1,"generate-date"],["id","receiptDeclar"],["data-tm","rent",1,"rent"],["data-tm","renter-name",1,"renter-name"],["data-tm","address",1,"address"],["data-tm","date-from",1,"date-from"],["data-tm","date-to",1,"date-to"],["id","landlord"],["data-tm","landlord-name",1,"landlord-name"],["data-tm","landlord-pan",1,"landlord-pan"],[1,"revenue"],["id","receipt-generator"],[1,"col-md-12","col-lg-6"],["for","renter-name",1,"form-label"],["id","renter-name","type","text",1,"form-control"],["data-error","renter-name",1,"validation-message"],[1,"row","g-3",2,"margin-top","5px"],["for","rent",1,"form-label"],["id","rent","type","number",1,"form-control"],["data-error","rent",1,"validation-message"],["for","address",1,"form-label"],["id","address","rows","3",1,"form-control"],["data-error","address",1,"validation-message"],[1,"col-md-12"],[1,"row","g-3"],[1,"col-md-6"],["for","landlord-name",1,"form-label"],["id","landlord-name","placeholder","","type","text",1,"form-control"],["data-error","landlord-name",1,"validation-message"],["for","landlord-pan",1,"form-label"],["id","landlord-pan","placeholder","","type","text",1,"form-control"],["data-error","landlord-pan",1,"validation-message"],[1,"col-12","col-md-3"],[1,"form-check"],["checked","","id","monthly","name","receipt-month","type","radio",1,"form-check-input"],["for","monthly",1,"form-check-label"],[1,"col-12","col-md-6"],["id","quarterly","name","receipt-month","type","radio",1,"form-check-input"],["for","quarterly",1,"form-check-label"],["for","date-from",1,"form-label"],["id","date-from","type","date",1,"form-control"],["data-error","date-from",1,"validation-message"],["for","date-to",1,"form-label"],["id","date-to","type","date",1,"form-control"],["data-error","date-to",1,"validation-message"],[1,"col-12"],["id","download-pdf","type","button",1,"btn","btn-success"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"],[1,"download-text"]],template:function(e,t){1&e&&(d.Hb(0,"article",0),d.Hb(1,"h2"),d.Sb(2,"Room rent receipt download"),d.Gb(),d.Hb(3,"p"),d.Sb(4,"Generate free room rent receipts, email and login are not required."),d.Gb(),d.Hb(5,"h2"),d.Sb(6,"Download home rent receipts."),d.Gb(),d.Hb(7,"p"),d.Sb(8,"Here you can download home rent receipts, fill out the form and download PDF file."),d.Gb(),d.Gb(),d.Hb(9,"article",1),d.Hb(10,"h2"),d.Sb(11,"Rent receipt"),d.Gb(),d.Gb(),d.Hb(12,"article"),d.Hb(13,"div",2),d.Hb(14,"div",3),d.Hb(15,"div",4),d.Hb(16,"div",5),d.Hb(17,"div",6),d.Hb(18,"div",7),d.Hb(19,"div",8),d.Hb(20,"p",9),d.Sb(21,"Provisional"),d.Gb(),d.Gb(),d.Gb(),d.Hb(22,"div",7),d.Hb(23,"div",10),d.Hb(24,"div",7),d.Hb(25,"div",8),d.Hb(26,"p",11),d.Sb(27,"RENT RECEIPT "),d.Gb(),d.Gb(),d.Hb(28,"div",8),d.Fb(29,"span",12),d.Gb(),d.Gb(),d.Gb(),d.Hb(30,"div",10),d.Hb(31,"div",7),d.Hb(32,"div",8),d.Hb(33,"p",13),d.Sb(34,"Receipt No: "),d.Fb(35,"span",14),d.Gb(),d.Gb(),d.Hb(36,"div",8),d.Hb(37,"p",15),d.Sb(38,"Date: "),d.Fb(39,"span",16),d.Gb(),d.Gb(),d.Gb(),d.Gb(),d.Gb(),d.Hb(40,"div",7),d.Hb(41,"div",8),d.Hb(42,"p",17),d.Sb(43,"Received a sum of INR "),d.Fb(44,"span",18),d.Sb(45," from "),d.Fb(46,"span",19),d.Sb(47," towards the rent of property located at "),d.Fb(48,"span",20),d.Sb(49," for the period from "),d.Fb(50,"span",21),d.Sb(51," to "),d.Fb(52,"span",22),d.Gb(),d.Gb(),d.Gb(),d.Hb(53,"div",7),d.Hb(54,"div",10),d.Hb(55,"p",23),d.Fb(56,"span",24),d.Sb(57," (Landlord), Pan: "),d.Fb(58,"span",25),d.Gb(),d.Gb(),d.Hb(59,"div",10),d.Hb(60,"div",26),d.Hb(61,"p"),d.Sb(62,"Revenue stamp"),d.Gb(),d.Gb(),d.Gb(),d.Gb(),d.Gb(),d.Gb(),d.Gb(),d.Gb(),d.Gb(),d.Hb(63,"div",27),d.Hb(64,"div",7),d.Hb(65,"div",28),d.Hb(66,"label",29),d.Sb(67,"Name"),d.Gb(),d.Fb(68,"input",30),d.Fb(69,"p",31),d.Gb(),d.Gb(),d.Hb(70,"div",32),d.Hb(71,"div",28),d.Hb(72,"label",33),d.Sb(73,"Rent Monthly"),d.Gb(),d.Fb(74,"input",34),d.Fb(75,"p",35),d.Gb(),d.Gb(),d.Hb(76,"div",32),d.Hb(77,"div",28),d.Hb(78,"label",36),d.Sb(79,"Address"),d.Gb(),d.Fb(80,"textarea",37),d.Fb(81,"p",38),d.Gb(),d.Gb(),d.Fb(82,"br"),d.Hb(83,"div",39),d.Fb(84,"hr"),d.Gb(),d.Fb(85,"br"),d.Hb(86,"div",40),d.Hb(87,"div",41),d.Hb(88,"label",42),d.Sb(89,"Landlord's Name"),d.Gb(),d.Fb(90,"input",43),d.Fb(91,"p",44),d.Gb(),d.Hb(92,"div",41),d.Hb(93,"label",45),d.Sb(94,"Landlord's PAN (optional)"),d.Gb(),d.Fb(95,"input",46),d.Fb(96,"p",47),d.Gb(),d.Gb(),d.Fb(97,"br"),d.Hb(98,"div",40),d.Hb(99,"div",48),d.Hb(100,"div",49),d.Fb(101,"input",50),d.Hb(102,"label",51),d.Sb(103,"Monthly"),d.Gb(),d.Gb(),d.Gb(),d.Hb(104,"div",52),d.Hb(105,"div",49),d.Fb(106,"input",53),d.Hb(107,"label",54),d.Sb(108," Quarterly "),d.Gb(),d.Gb(),d.Gb(),d.Gb(),d.Fb(109,"br"),d.Hb(110,"div",40),d.Hb(111,"div",41),d.Hb(112,"label",55),d.Sb(113,"From"),d.Gb(),d.Fb(114,"input",56),d.Fb(115,"p",57),d.Gb(),d.Hb(116,"div",41),d.Hb(117,"label",58),d.Sb(118,"To"),d.Gb(),d.Fb(119,"input",59),d.Fb(120,"p",60),d.Gb(),d.Gb(),d.Hb(121,"div",40),d.Hb(122,"div",61),d.Hb(123,"button",62),d.Fb(124,"span",63),d.Hb(125,"span",64),d.Sb(126,"Download"),d.Gb(),d.Gb(),d.Gb(),d.Gb(),d.Gb(),d.Gb())},styles:[""]}),n)}],c=((b=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=d.Cb({type:b}),b.\u0275inj=d.Bb({factory:function(e){return new(e||b)},imports:[[i.b.forChild(l)],i.b]}),b),p=((o=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=d.Cb({type:o}),o.\u0275inj=d.Bb({factory:function(e){return new(e||o)},imports:[[a.b,c]]}),o)}}]);