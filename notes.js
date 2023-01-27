let txtarea = document.getElementById("inpbody")
let prev = txtarea.scrollHeight;
const resize = ()=>{
   
    if(txtarea.scrollHeight>prev){
        txtarea.style.height = (0.2 + txtarea.scrollHeight)+"px";
        prev = txtarea.scrollHeight;
        
    }
    
}
txtarea.addEventListener('keypress',resize);
function getNoteBody(){
    console.log(txtarea.value)
}
const addNote = ()=>{
    if(txtarea.value==""||document.getElementById("inptitle").value=="")
    return;
    let ihtml = `

    <div class="note">
    <div class="title">
        Title:
        ${document.getElementById("inptitle").value}
    </div>
    <div class="notebody">
        Note:<br>
        ${txtarea.value}
    </div>
    <div class="btngrp">
        <div class="b1">
            <button><img src="-.png" alt="" srcset=""> REMOVE</button>
        </div>
        <div class="b2">

        </div>
    </div>

</div>
    `;
    let em = document.getElementsByClassName("container")[0];
    em.insertAdjacentHTML('beforeend',ihtml);
    txtarea.value = "";
    document.getElementById("inptitle").value="";

}
let addbutton = document.getElementsByClassName("b1")[0];
addbutton.addEventListener('click',addNote);