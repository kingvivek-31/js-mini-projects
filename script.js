let boxes = document.querySelectorAll(".toe");
let reset = document.querySelector(".reset-button");



let turn = 1;

const winpatterns = 
[[0,1,2],
 [1,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8]
];


boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("click")
        box.innerText = (turn%2 == 0) ? "o" : "x";
        // box.setAttribute('disabled', true)

        turn++;
        box.disabled = true
        checkwinner()

    });


   
    
    


});


const checkwinner = () => {

    for(let pat of winpatterns){

        // console.log(pat[0] , pat[1] , pat[2]);
        // console.log(boxes[pat[0]].innerText , 
        //             boxes[pat[1]].innerText ,
        //             boxes[pat[2]].innerText);

        
        
        let val1 = boxes[pat[0]].innerText; 
        let val2 = boxes[pat[1]].innerText;
        let val3 = boxes[pat[2]].innerText;


        if(val1 != "" && val2 != "" && val3 != "" && val1 == val2 && val2 == val3 ){

                alert("you won");
                console.log(val1, "won the match");
            
            
        };

        



    };



};

reset.addEventListener("click" , () => {


    window.location.reload();



});







