var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var b4 = document.getElementById("b4")
var b5 = document.getElementById("b5")

var i1 = document.getElementById("i1")
var i2 = document.getElementById("i2")
var i3 = document.getElementById("i3")
var i4 = document.getElementById("i4")
var i5 = document.getElementById("i5")

var u1 = document.getElementById("u1")
var u2 = document.getElementById("u2")
var u3 = document.getElementById("u3")
var u4 = document.getElementById("u4")
var u5 = document.getElementById("u5")

var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")
var c4 = document.getElementById("c4")
var c5 = document.getElementById("c5")


b1.addEventListener("click",
    function(){
        u1.classList.remove("hidden")
    }
)

b2.addEventListener("click",
    function(){
        u2.classList.remove("hidden")
    }
)

b3.addEventListener("click",
    function(){
        u3.classList.remove("hidden")
    }
)

b4.addEventListener("click",
    function(){
        u4.classList.remove("hidden")
    }
)

b5.addEventListener("click",
    function(){
        u5.classList.remove("hidden")
    }
)

i1.addEventListener("click",
    function(){
        u1.classList.remove("hidden")
    }
)

i2.addEventListener("click",
    function(){
        u2.classList.remove("hidden")
    }
)

i3.addEventListener("click",
    function(){
        u3.classList.remove("hidden")
    }
)

i4.addEventListener("click",
    function(){
        u4.classList.remove("hidden")
    }
)

i5.addEventListener("click",
    function(){
        u5.classList.remove("hidden")
    }
)

c1.addEventListener("click",
    function(){
        u1.classList.add("hidden")
    }
)


c2.addEventListener("click",
    function(){
        u2.classList.add("hidden")
    }
)

c3.addEventListener("click",
    function(){
        u3.classList.add("hidden")
    }
)

c4.addEventListener("click",
    function(){
        u4.classList.add("hidden")
    }
)

c5.addEventListener("click",
    function(){
        u5.classList.add("hidden")
    }
)