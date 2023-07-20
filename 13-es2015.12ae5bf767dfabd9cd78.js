(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"60q1":function(e,t,r){"use strict";r.r(t),r.d(t,"RentReceiptModule",(function(){return l}));var n=r("ofXK"),o=r("tyNb"),b=r("fXoL"),a=r("jhN1");const d=[{path:"",component:(()=>{class e{constructor(e,t){this.title=e,this.meta=t,this.isRenderd=!1}onEvent(e){this.jsLoad()}ngOnInit(){this.title.setTitle("Free rent receipts"),this.meta.updateTag({content:"free rent receipts, rent receipts, free rent slips, rent slips"},"name='keywords'"),this.meta.updateTag({content:"Download free rent receipts PDF without login and email."},"name='description'"),this.jsLoad(),activeMenu(2)}jsLoad(){this.isRenderd||"function"!=typeof rentReceipt||(rentReceipt(),this.isRenderd=!0)}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(a.c),b.Jb(a.b))},e.\u0275cmp=b.Db({type:e,selectors:[["app-main-page"]],hostBindings:function(e,t){1&e&&b.Tb("scroll",(function(e){return t.onEvent(e)}))("click",(function(e){return t.onEvent(e)}))("mousemove",(function(e){return t.onEvent(e)}))("focus",(function(e){return t.onEvent(e)}))},decls:127,vars:0,consts:[[1,"d-none"],[1,"site-title"],[1,"receipt-wrapper"],["id","receipts",1,"receipts"],["id","invoice1",1,"invoice"],[1,"invoiceWrapper"],[1,"container"],[1,"row"],[1,"col-12","col-md-12"],["id","receiptHeading"],[1,"col-6","col-md-6"],["id","receiptSartDate"],[1,"current-month"],["id","receiptNumber"],["id","receipt-number",1,"receipt-number"],["id","receiptGeneratDate"],["id","generate-date",1,"generate-date"],["id","receiptDeclar"],["data-tm","rent",1,"rent"],["data-tm","renter-name",1,"renter-name"],["data-tm","address",1,"address"],["data-tm","date-from",1,"date-from"],["data-tm","date-to",1,"date-to"],["id","landlord"],["data-tm","landlord-name",1,"landlord-name"],["data-tm","landlord-pan",1,"landlord-pan"],[1,"revenue"],["id","receipt-generator"],[1,"col-md-12","col-lg-6"],["for","renter-name",1,"form-label"],["id","renter-name","type","text",1,"form-control"],["data-error","renter-name",1,"validation-message"],[1,"row","g-3",2,"margin-top","5px"],["for","rent",1,"form-label"],["id","rent","type","number",1,"form-control"],["data-error","rent",1,"validation-message"],["for","address",1,"form-label"],["id","address","rows","3",1,"form-control"],["data-error","address",1,"validation-message"],[1,"col-md-12"],[1,"row","g-3"],[1,"col-md-6"],["for","landlord-name",1,"form-label"],["id","landlord-name","placeholder","","type","text",1,"form-control"],["data-error","landlord-name",1,"validation-message"],["for","landlord-pan",1,"form-label"],["id","landlord-pan","placeholder","","type","text",1,"form-control"],["data-error","landlord-pan",1,"validation-message"],[1,"col-12","col-md-3"],[1,"form-check"],["checked","","id","monthly","name","receipt-month","type","radio",1,"form-check-input"],["for","monthly",1,"form-check-label"],[1,"col-12","col-md-6"],["id","quarterly","name","receipt-month","type","radio",1,"form-check-input"],["for","quarterly",1,"form-check-label"],["for","date-from",1,"form-label"],["id","date-from","type","date",1,"form-control"],["data-error","date-from",1,"validation-message"],["for","date-to",1,"form-label"],["id","date-to","type","date",1,"form-control"],["data-error","date-to",1,"validation-message"],[1,"col-12"],["id","download-pdf","type","button",1,"btn","btn-success"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"],[1,"download-text"]],template:function(e,t){1&e&&(b.Mb(0,"article",0),b.Mb(1,"h2"),b.ec(2,"Room rent receipt download"),b.Lb(),b.Mb(3,"p"),b.ec(4,"Generate free room rent receipts, email and login are not required."),b.Lb(),b.Mb(5,"h2"),b.ec(6,"Download home rent receipts."),b.Lb(),b.Mb(7,"p"),b.ec(8,"Here you can download home rent receipts, fill out the form and download PDF file."),b.Lb(),b.Lb(),b.Mb(9,"article",1),b.Mb(10,"h2"),b.ec(11,"Rent receipt"),b.Lb(),b.Lb(),b.Mb(12,"article"),b.Mb(13,"div",2),b.Mb(14,"div",3),b.Mb(15,"div",4),b.Mb(16,"div",5),b.Mb(17,"div",6),b.Mb(18,"div",7),b.Mb(19,"div",8),b.Mb(20,"p",9),b.ec(21,"Provisional"),b.Lb(),b.Lb(),b.Lb(),b.Mb(22,"div",7),b.Mb(23,"div",10),b.Mb(24,"div",7),b.Mb(25,"div",8),b.Mb(26,"p",11),b.ec(27,"RENT RECEIPT "),b.Lb(),b.Lb(),b.Mb(28,"div",8),b.Kb(29,"span",12),b.Lb(),b.Lb(),b.Lb(),b.Mb(30,"div",10),b.Mb(31,"div",7),b.Mb(32,"div",8),b.Mb(33,"p",13),b.ec(34,"Receipt No: "),b.Kb(35,"span",14),b.Lb(),b.Lb(),b.Mb(36,"div",8),b.Mb(37,"p",15),b.ec(38,"Date: "),b.Kb(39,"span",16),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(40,"div",7),b.Mb(41,"div",8),b.Mb(42,"p",17),b.ec(43,"Received a sum of INR "),b.Kb(44,"span",18),b.ec(45," from "),b.Kb(46,"span",19),b.ec(47," towards the rent of property located at "),b.Kb(48,"span",20),b.ec(49," for the period from "),b.Kb(50,"span",21),b.ec(51," to "),b.Kb(52,"span",22),b.Lb(),b.Lb(),b.Lb(),b.Mb(53,"div",7),b.Mb(54,"div",10),b.Mb(55,"p",23),b.Kb(56,"span",24),b.ec(57," (Landlord), Pan: "),b.Kb(58,"span",25),b.Lb(),b.Lb(),b.Mb(59,"div",10),b.Mb(60,"div",26),b.Mb(61,"p"),b.ec(62,"Revenue stamp"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(63,"div",27),b.Mb(64,"div",7),b.Mb(65,"div",28),b.Mb(66,"label",29),b.ec(67,"Name"),b.Lb(),b.Kb(68,"input",30),b.Kb(69,"p",31),b.Lb(),b.Lb(),b.Mb(70,"div",32),b.Mb(71,"div",28),b.Mb(72,"label",33),b.ec(73,"Rent Monthly"),b.Lb(),b.Kb(74,"input",34),b.Kb(75,"p",35),b.Lb(),b.Lb(),b.Mb(76,"div",32),b.Mb(77,"div",28),b.Mb(78,"label",36),b.ec(79,"Address"),b.Lb(),b.Kb(80,"textarea",37),b.Kb(81,"p",38),b.Lb(),b.Lb(),b.Kb(82,"br"),b.Mb(83,"div",39),b.Kb(84,"hr"),b.Lb(),b.Kb(85,"br"),b.Mb(86,"div",40),b.Mb(87,"div",41),b.Mb(88,"label",42),b.ec(89,"Landlord's Name"),b.Lb(),b.Kb(90,"input",43),b.Kb(91,"p",44),b.Lb(),b.Mb(92,"div",41),b.Mb(93,"label",45),b.ec(94,"Landlord's PAN (optional)"),b.Lb(),b.Kb(95,"input",46),b.Kb(96,"p",47),b.Lb(),b.Lb(),b.Kb(97,"br"),b.Mb(98,"div",40),b.Mb(99,"div",48),b.Mb(100,"div",49),b.Kb(101,"input",50),b.Mb(102,"label",51),b.ec(103,"Monthly"),b.Lb(),b.Lb(),b.Lb(),b.Mb(104,"div",52),b.Mb(105,"div",49),b.Kb(106,"input",53),b.Mb(107,"label",54),b.ec(108," Quarterly "),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Kb(109,"br"),b.Mb(110,"div",40),b.Mb(111,"div",41),b.Mb(112,"label",55),b.ec(113,"From"),b.Lb(),b.Kb(114,"input",56),b.Kb(115,"p",57),b.Lb(),b.Mb(116,"div",41),b.Mb(117,"label",58),b.ec(118,"To"),b.Lb(),b.Kb(119,"input",59),b.Kb(120,"p",60),b.Lb(),b.Lb(),b.Mb(121,"div",40),b.Mb(122,"div",61),b.Mb(123,"button",62),b.Kb(124,"span",63),b.Mb(125,"span",64),b.ec(126,"Download"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb())},styles:[""]}),e})()}];let i=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[o.b.forChild(d)],o.b]}),e})(),l=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[n.b,i]]}),e})()}}]);