function changeFlex(e, t) {
	for (let n = document.querySelectorAll("." + e), l = document.querySelector("#" + t), r = 0; r < n.length; r++) n[r].addEventListener("change", function () {
		let e = this.value;
		l.setAttribute("class", "flex-container " + e)
	}, !1)
}

function changeItemFlex(e, t) {
	for (let n = document.querySelectorAll("." + e), l = document.querySelector("#" + t), r = 0; r < n.length; r++) n[r].addEventListener("change", function () {
		let e = this.value;
		l.setAttribute("class", "item " + e)
	}, !1)
}

function changeFlexBasis(e, t) {
	let n = isNaN(e.value) ? 0 : e.value;
	console.log("B: " + n), document.querySelector("#" + t).style.WebkitFlexBasis = n + "%", document.querySelector("#" + t).style.flexBasis = n + "%"
}

function changeFlexGrow(e, t) {
	let n = isNaN(e.value) ? 0 : e.value;
	console.log("G: " + n), document.querySelector("#" + t).style.WebkitFlexGrow = n, document.querySelector("#" + t).style.flexGrow = n
}

function changeFlexShrink(e, t) {
	let n = isNaN(e.value) ? 0 : e.value;
	console.log("S: " + n), document.querySelector("#" + t).style.WebkitFlexShrink = n, document.querySelector("#" + t).style.flexShrink = n
}

function changeFlexOrder(e, t) {
	let n = isNaN(e.value) ? 0 : e.value;
	console.log("O: " + n), document.querySelector("#" + t).style.WebkitOrder = n, document.querySelector("#" + t).style.order = n
}

function changeAll(e, t, n, l) {
	changeFlexBasis(e, l), changeFlexGrow(t, l), changeFlexShrink(n, l)
}
for (let items = document.querySelectorAll(".item"), i = 0; i < items.length; i++)
	if (items[i].hasAttribute("data-color")) {
		let color = items[i].getAttribute("data-color");
		items[i].style.backgroundColor = "#" + color
	}
for (let flexO = document.querySelectorAll(".flex-order"), o = 0; o < flexO.length; o++) flexO[o].addEventListener("change", function () {
	changeFlexOrder(this, "order" + this.id)
}, !1);
changeFlex("flex-direction", "direction"), changeFlex("flex-wrap", "wrap"), changeFlex("flex-align-items", "align"), changeFlex("justify-content", "justify"), changeFlex("align-content", "align-content-container"), changeItemFlex("align-self", "alignSelf");
for (let flexGrow = document.querySelectorAll(".flex-grow"), i = 0; i < flexGrow.length; i++) flexGrow[i].addEventListener("change", function () {
	let e = "item" + this.id;
	changeFlexGrow(this, e)
});
for (let flexShrink = document.querySelectorAll(".flex-shrink"), j = 0; j < flexShrink.length; j++) flexShrink[j].addEventListener("change", function () {
	let e = "item" + this.id;
	changeFlexShrink(this, e)
});
let B1 = document.querySelector("#B1"),
	G1 = document.querySelector("#G1"),
	S1 = document.querySelector("#S1"),
	B2 = document.querySelector("#B2"),
	G2 = document.querySelector("#G2"),
	S2 = document.querySelector("#S2");
B1.addEventListener("change", function () {
	changeAll(B1, G1, S1, "item1")
}), G1.addEventListener("change", function () {
	changeAll(B1, G1, S1, "item1")
}), S1.addEventListener("change", function () {
	changeAll(B1, G1, S1, "item1")
}), B2.addEventListener("change", function () {
	changeAll(B2, G2, S2, "item2")
}), G2.addEventListener("change", function () {
	changeAll(B2, G2, S2, "item2")
}), S2.addEventListener("change", function () {
	changeAll(B2, G2, S2, "item2")
});