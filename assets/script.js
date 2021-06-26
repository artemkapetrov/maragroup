var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var b4 = document.getElementById("b4")

var u1 = document.getElementById("u1")
var u2 = document.getElementById("u2")
var u3 = document.getElementById("u3")
var u4 = document.getElementById("u4")

var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")
var c4 = document.getElementById("c4")

var op1 = document.getElementById("op1")
var op2 = document.getElementById("op2")
var op3 = document.getElementById("op3")
var op4 = document.getElementById("op4")


b1.addEventListener("click",
    function(){
        u1.classList.remove("hidden")
        op1.classList.remove("opacity")
    }
)

b2.addEventListener("click",
    function(){
        u2.classList.remove("hidden")
        op2.classList.remove("opacity")
    }
)

b3.addEventListener("click",
    function(){
        u3.classList.remove("hidden")
        op3.classList.remove("opacity")
    }
)

b4.addEventListener("click",
    function(){
        u4.classList.remove("hidden")
        op4.classList.remove("opacity")
    }
)

b1.addEventListener("click",
    function(){
        u1.classList.remove("hidden")
        op1.classList.remove("opacity")
    }
)

c1.addEventListener("click",
    function(){
        u1.classList.add("hidden")
        op1.classList.add("opacity")
    }
)


c2.addEventListener("click",
    function(){
        u2.classList.add("hidden")
        op2.classList.add("opacity")
    }
)

c3.addEventListener("click",
    function(){
        u3.classList.add("hidden")
        op3.classList.add("opacity")
    }
)

c4.addEventListener("click",
    function(){
        u4.classList.add("hidden")
        op4.classList.add("opacity")
    }
)