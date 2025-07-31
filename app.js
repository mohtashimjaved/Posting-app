let count = 1;
let text = "";
let imgId = "";


 
let username;
let currentDate = moment().format("DD-MMM-YYYY hh:mm A");
// document.getElementById("post_text").focus()
function post() {
    if (document.getElementById("username").value !== "") {
    
        username = document.getElementById("username").value;
    } else {
        username = "Anonymous"
    }
    
    
    let post_text = document.getElementById("post_text").value;
    if (post_text !== "") {
        document.getElementById("post_text").value = "";
        document.getElementById("js").innerHTML += `
            <div id="createdPost">
            <div class="postHead">
            <div class="user">
            <img src="./assets/user-3296.png" alt="">
            <div class="name_time">
            <h1>${username}</h1>
            <h2>${currentDate}</h2>
                    </div>
                    </div>
                    <i class="fa-solid fa-trash" onclick="deletePost()" id="deletePost"></i>
                    </div>
                    <div class="post_main" ${text}>
                    <p>
                    ${post_text}
                        </p>
                        </div>
                        <div class="post_foot">
                        <div onclick="like(${imgId})" id="like${imgId}" >
                        <i class="fa-regular fa-thumbs-up">
                        </i>
                        <p>Like</p>
                        </div>
                        <div class="comment">
                    <i onclick="comment(${imgId})" class="fa-regular fa-comment"></i>
                    <p onclick="comment(${imgId})">Comment</p>
                    </div>
                    
                    </div>
                    <div id="comment_input${imgId}" class="comment_input">
                    <input type="text" id="comment_text" placeholder="Write a comment...">
                    <i onclick="commented()" id="commented" class="fa-solid fa-paper-plane comm_icon"></i>
                    </div>
                    <div id="commentPost">
                    
                    </div>
                    </div>
                    `
        if (imgId !== "") {
            document.getElementById(`text${count}`).style.backgroundImage = "url(" + document.getElementById(imgId).src + ")";
            count++
        }
    } else {
        alert("Post cannot be posted empty")
        // imgId = 1
    }
    imgId = "" ;
    // document.getElementById("post_text").focus();
    document.getElementById("post_text").style.backgroundImage = "";
    document.getElementById("username").value = "";
    
    // if (post_text.length < 200) {
        //     var divPos = document.querySelector(".post_main")
        //     divPos.style.height = 250 + "px"
        //     divPos.style.fontSize = 32 + "px"
        // }
        // return currentDate;
        
    }
    function backgroundImg(i) {
        imgId = i;
        if (imgId) {
            text = `id="text${count}"`;
        } else {
            text = "";
    }
    document.getElementById("post_text").style.backgroundImage = "url(" + document.getElementById(i).src + ")";
    document.getElementById("post_text").focus()
}
function deletePost() {
    event.target.parentNode.parentNode.remove()
}
function like() {
    if (event.target.classList.contains("fa-thumbs-up")) {
        if (event.target.classList.contains("fa-regular")) {
            event.target.classList.remove("fa-regular")
            event.target.classList.add("fa-solid")
        } else if (event.target.classList.contains("fa-solid")) {
            event.target.classList.remove("fa-solid")
            event.target.classList.add("fa-regular")
        }
    }
    //  else if (event.target.children[0].classList.contains("fa-thumbs-up")) {
        //     if (event.target.children[0].classList.contains("fa-regular")) {
    //         event.target.children[0].classList.remove("fa-regular")
    //         event.target.children[0].classList.add("fa-solid")
    //     } else if (event.target.children[0].classList.contains("fa-solid")) {
        //         event.target.children[0].classList.remove("fa-solid")
        //         event.target.children[0].classList.add("fa-regular")
        //     }
        // }
    }
    // console.log(username);
    
function commented() {
    // let username;
    // if (document.getElementById("username").value !== "") {
    
    //     username = document.getElementById("username").value;
    // } else {
    //     username = "Anonymous"
    // }
    const commentText = event.target.previousElementSibling.value;
    const commentList = event.target.parentNode.nextElementSibling;
    if (commentText !== ""){
        event.target.previousElementSibling.value = "";
        commentList.innerHTML +=
        `
        <div>
        <div class="comment_user">
        <img src="./assets/user-3296.png" alt="">
        <div class="username">
        <h1>${username}</h1>
        <h2>${currentDate}</h2>
        </div>
        </div>
            <p>${commentText}</p><i onclick="deleteComment()" id="bin" class="fa-solid fa-trash"></i>
        </div>
        
            `;
            // console.log(username);
            
    }
    event.target.parentNode.style.display = "none";


}
function deleteComment(){
    event.target.parentNode.remove();
}
function removeBgImg(){
    document.getElementById("post_text").style.backgroundImage = "";

}
function comment(){
    event.target.parentNode.parentNode.nextElementSibling.style.display = "flex"
    // let commentInput = document.getElementById("comment_input" + imgId).style.display = "block"
    document.getElementById("comment_text").focus()
}