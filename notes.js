let txtarea = document.getElementById("inpbody")
let prev = txtarea.scrollHeight;
let count = 0;
// if(localStorage.getItem("count")==undefined)
//  count = localStorage.setItem("count",count);
//  else
//  count = localStorage.getItem("count",count)
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
const removeNote = (id)=>{
    document.getElementById("note"+id).remove();
}
const editNote = (id)=>{
    console.log("edit",id);
    txtarea.value = document.getElementById("bt"+id).textContent;
    document.getElementById("inptitle").value = document.getElementById("title"+id).textContent;
    removeNote(id)
}
const addNote = ()=>{
   console.log("here")
    if(txtarea.value==""||document.getElementById("inptitle").value=="")
    return;
    count++;
    let ihtml = `

    <div class="note" id="note${count}">
    <div class="title">
        Title:
        <div id="title${count}">
        ${document.getElementById("inptitle").value}
        </div>
    </div>
    <div class="notebody" >
        Note:
        <div id="bt${count}">
        
        </div>
    </div>
    <div class="btngrp">
        <div class="rm" id="b1${count}">
            <button><img src="-.png" alt="" srcset=""> REMOVE</button>
        </div>
        <div class="ed" id="b2${count}">
        <button><img src="edit.png" alt="" srcset=""> EDIT</button>
        </div>
    </div>

</div>
    `;
    let em = document.getElementsByClassName("addnote")[0];
    em.insertAdjacentHTML('afterend',ihtml);
    let post = document.getElementById("bt"+count);
    post.textContent = txtarea.value;
    post.innerHTML = post.innerHTML.replace(/\n/g, '<br>\n');
    txtarea.value = "";
    // console.log("idher")
    document.getElementById("inptitle").value="";
    em = document.getElementById(`b1${count}`)
    em.addEventListener("click",()=>{
        document.getElementById("note"+em.id.substring(2)).remove();
        localStorage.removeItem("post"+em.id.substring(2))
        localStorage.removeItem("postt"+em.id.substring(2))
    })
    em = document.getElementById(`b2${count}`)
    em.addEventListener('click',()=>{
    
    txtarea.value = document.getElementById("bt"+em.id.substring(2)).textContent;
    document.getElementById("inptitle").value = document.getElementById("title"+em.id.substring(2)).textContent.trim();
    document.getElementById("note"+em.id.substring(2)).remove();
        localStorage.removeItem("post"+em.id.substring(2))
        localStorage.removeItem("postt"+em.id.substring(2))
    })
    // document.getElementById(`b1${count}`).addEventListener('click',removeNote(count));
    // console.log("udher")
    // // document.getElementById(`b2${count}`).addEventListener('click',editNote(count));
    localStorage.setItem("post"+count,post.innerHTML);
    localStorage.setItem("postt"+count,document.getElementById("title"+em.id.substring(2)).textContent.trim());
    // updateListner();
   
    localStorage.setItem("count",count);
    txtarea.value = "";
    // console.log("idher")
    document.getElementById("inptitle").value="";

}
let addbutton = document.getElementsByClassName("b1")[0];
addbutton.addEventListener('click',addNote);

function updateListner(){
    document.getElementById("b1"+count).addEventListener('click',()=>{
        document.getElementById("note"+id).remove();
    });
    document.getElementById("b2"+count).addEventListener('click',editNote(count));
}
