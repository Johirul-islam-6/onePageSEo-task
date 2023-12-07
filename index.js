
// =====all card simple static Object =====

    const allCard = [
        {
            id: "1",
            attachment  : "10",
            paragraph : "this is 10 attachment list"
        },
        {
            id: "2",
            attachment  : "20",
             paragraph : "this is 10 attachment list"
        },
        {
            id: "3",
            attachment  : "30",
             paragraph : "this is 30 attachment list"
        },
        {
            id: "4",
            attachment  : "35",
             paragraph : "this is 35 attachment list"
        },
        {
            id: "5",
            attachment  : "30",
             paragraph : "this is 30 attachment list"
        },
        {
            id: "6",
            attachment  : "40",
             paragraph : "this is 40 attachment list"
        },
    ]
     
    const allCardItem = document.getElementById('allCard');
    const allCardItem2 = document.getElementById('allCard2');
    const allCardItem3 = document.getElementById('allCard3');
    const allCardItem4 = document.getElementById('allCard4');
    const allCardItem5 = document.getElementById('allCard5');
    const allCardItem6 = document.getElementById('allCard6');
   
//   ================== 05 Card section function ===============
const displayShow1 = () => {
   
    let singelCard = "";

   
    allCard.map((item, index) => {
        // Accumulate the HTML content for each item
        singelCard += `<div class="card p-2">
                    <div class="card-nav d-flex justify-content-between pt-1">
                        <div class="d-flex w-50 justify-content-start ">
                            <img class="avata-image" src="./image/1.jpg" alt="">
                            <p class=" px-2 ">Client Name</p>
                        </div>
                        <div class="d-flex w-50 justify-content-end ">
                            <img class="avata-image" src="./image/2.jpg" alt="">
                            <p class="px-2 ">Sadik Istiak </p>
                        </div>
                        
                    </div>
                    <!-- ---card text--- -->
                    <div class="card-text d-flex justify-content-between py-2">
                        <div class="d-flex w-75 justify-content-start ">
                       
                            <p class=""><svg class="pt-2" xmlns="http://www.w3.org/2000/svg" height="22" width="25"
                                viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
                            </svg><span class="px-1">Lorem ipsum dolor sit sir more...</span></p>
                        </div>
                        <div class="d-flex w-25 justify-content-end ">
                       
                            <p class=""> <svg class="pt-2" xmlns="http://www.w3.org/2000/svg" height="22" width="20"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                            </svg><span class="px-1 text-secondary fw-bolder">1/2</span> </p>
                        </div>
                    
                    </div>

                    <!-- ---- card untility ----- -->

                    <div class="
                    d-flex flex-row justify-content-around justify-content-center accordion
                    align-items-center
                    ">
                       <div class="d-flex  align-items-center">
                        <img class="avata-image" src="./image/2.jpg" alt="">
                        <img class="avata-image-sm mx-1" src="./image/1.jpg" alt="">
                        <img class="avata-image-round-sm" src="./image/3.jpg" alt="">
                       </div>
                   
                        <div class="fw-bolder font1 pointer">
                            12+
                        </div>
                        
                        <div class="d-flex align-items-center pointer">
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="16"
                                viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                            </svg><span class="font1 ">15</span>

                        </div>
            


                        <div class="pointer" id="openModalBtn" onclick="ShowModalDisplayData( '${item.paragraph}')">
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="14"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
                            </svg>
                     <span  class="font1"> ${item?.attachment}</span>

                        </div>
                       
                        <div>
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="14"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                            </svg>
                         <span class="font1 calander-text">12-05-2023</span>   
                        </div>

                    </div>

                </div>`;
    });

    // Set the accumulated HTML content to the element
    allCardItem.innerHTML = singelCard;
};


displayShow1()



//   ================== 02 Card section function ===============
const displayShow2 = () => {
   
    let singelCard = "";

   
    allCard.map((item, index) => {
        // Accumulate the HTML content for each item
        singelCard += `<div class="card p-2">
                    <div class="card-nav d-flex justify-content-between pt-1">
                        <div class="d-flex w-50 justify-content-start ">
                            <img class="avata-image" src="./image/1.jpg" alt="">
                            <p class=" px-2 ">Client Name</p>
                        </div>
                        <div class="d-flex w-50 justify-content-end ">
                            <img class="avata-image" src="./image/2.jpg" alt="">
                            <p class="px-2 ">Sadik Istiak </p>
                        </div>
                        
                    </div>
                    <!-- ---card text--- -->
                    <div class="card-text d-flex justify-content-between py-2">
                        <div class="d-flex w-75 justify-content-start ">
                       
                            <p class=""><svg class="pt-2" xmlns="http://www.w3.org/2000/svg" height="22" width="25"
                                viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
                            </svg><span class="px-1">Lorem ipsum dolor sit sir more...</span></p>
                        </div>
                        <div class="d-flex w-25 justify-content-end ">
                       
                            <p class=""> <svg class="pt-2" xmlns="http://www.w3.org/2000/svg" height="22" width="20"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                            </svg><span class="px-1 text-secondary fw-bolder">1/2</span> </p>
                        </div>
                    
                    </div>

                    <!-- ---- card untility ----- -->

                    <div class="
                    d-flex flex-row justify-content-around justify-content-center accordion
                    align-items-center
                    ">
                       <div class="d-flex  align-items-center">
                        <img class="avata-image" src="./image/2.jpg" alt="">
                        <img class="avata-image-sm mx-1" src="./image/1.jpg" alt="">
                        <img class="avata-image-round-sm" src="./image/3.jpg" alt="">
                       </div>
                   
                        <div class="fw-bolder font1 pointer">
                            12+
                        </div>
                        
                        <div class="d-flex align-items-center pointer">
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="16"
                                viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                            </svg><span class="font1 ">15</span>

                        </div>
            


                        <div class="pointer" id="openModalBtn" onclick="ShowModalDisplayData( '${item.paragraph}')">
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="14"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
                            </svg>
                     <span  class="font1"> ${item?.attachment}</span>

                        </div>
                       
                        <div>
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="14"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                            </svg>
                         <span class="font1 calander-text">12-05-2023</span>   
                        </div>

                    </div>

                </div>`;
    });

    // Set the accumulated HTML content to the element
    allCardItem2.innerHTML = singelCard;
};


displayShow2()




//   ================== 03 Card section function ===============
const displayShow3 = () => {
   
    let singelCard = "";

    allCard.map((item, index) => {
        // Accumulate the HTML content for each item
        singelCard += `<div class="card p-2">
                    <div class="card-nav d-flex justify-content-between pt-1">
                        <div class="d-flex w-50 justify-content-start ">
                            <img class="avata-image" src="./image/1.jpg" alt="">
                            <p class=" px-2 ">Client Name</p>
                        </div>
                        <div class="d-flex w-50 justify-content-end ">
                            <img class="avata-image" src="./image/2.jpg" alt="">
                            <p class="px-2 ">Sadik Istiak </p>
                        </div>
                        
                    </div>
                    <!-- ---card text--- -->
                    <div class="card-text d-flex justify-content-between py-2">
                        <div class="d-flex w-75 justify-content-start ">
                       
                            <p class=""><svg class="pt-2" xmlns="http://www.w3.org/2000/svg" height="22" width="25"
                                viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
                            </svg><span class="px-1">Lorem ipsum dolor sit sir more...</span></p>
                        </div>
                        <div class="d-flex w-25 justify-content-end ">
                       
                            <p class=""> <svg class="pt-2" xmlns="http://www.w3.org/2000/svg" height="22" width="20"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                            </svg><span class="px-1 text-secondary fw-bolder">1/2</span> </p>
                        </div>
                    
                    </div>

                    <!-- ---- card untility ----- -->

                    <div class="
                    d-flex flex-row justify-content-around justify-content-center accordion
                    align-items-center
                    ">
                       <div class="d-flex  align-items-center">
                        <img class="avata-image" src="./image/2.jpg" alt="">
                        <img class="avata-image-sm mx-1" src="./image/1.jpg" alt="">
                        <img class="avata-image-round-sm" src="./image/3.jpg" alt="">
                       </div>
                   
                        <div class="fw-bolder font1 pointer">
                            12+
                        </div>
                        
                        <div class="d-flex align-items-center pointer">
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="16"
                                viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                            </svg><span class="font1 ">15</span>

                        </div>
            


                        <div class="pointer" id="openModalBtn" onclick="ShowModalDisplayData( '${item.paragraph}')">
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="14"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
                            </svg>
                     <span  class="font1"> ${item?.attachment}</span>

                        </div>
                       
                        <div>
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="14"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                            </svg>
                         <span class="font1 calander-text">12-05-2023</span>   
                        </div>

                    </div>

                </div>`;
    });

    // Set the accumulated HTML content to the element
    allCardItem3.innerHTML = singelCard;
};


displayShow3()



//   ================== 04 Card section function ===============
const displayShow4 = () => {
   
    let singelCard = "";

    allCard.map((item, index) => {
        // Accumulate the HTML content for each item
        singelCard += `<div class="card p-2">
                    <div class="card-nav d-flex justify-content-between pt-1">
                        <div class="d-flex w-50 justify-content-start ">
                            <img class="avata-image" src="./image/1.jpg" alt="">
                            <p class=" px-2 ">Client Name</p>
                        </div>
                        <div class="d-flex w-50 justify-content-end ">
                            <img class="avata-image" src="./image/2.jpg" alt="">
                            <p class="px-2 ">Sadik Istiak </p>
                        </div>
                        
                    </div>
                    <!-- ---card text--- -->
                    <div class="card-text d-flex justify-content-between py-2">
                        <div class="d-flex w-75 justify-content-start ">
                       
                            <p class=""><svg class="pt-2" xmlns="http://www.w3.org/2000/svg" height="22" width="25"
                                viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
                            </svg><span class="px-1">Lorem ipsum dolor sit sir more...</span></p>
                        </div>
                        <div class="d-flex w-25 justify-content-end ">
                       
                            <p class=""> <svg class="pt-2" xmlns="http://www.w3.org/2000/svg" height="22" width="20"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                            </svg><span class="px-1 text-secondary fw-bolder">1/2</span> </p>
                        </div>
                    
                    </div>

                    <!-- ---- card untility ----- -->

                    <div class="
                    d-flex flex-row justify-content-around justify-content-center accordion
                    align-items-center
                    ">
                       <div class="d-flex  align-items-center">
                        <img class="avata-image" src="./image/2.jpg" alt="">
                        <img class="avata-image-sm mx-1" src="./image/1.jpg" alt="">
                        <img class="avata-image-round-sm" src="./image/3.jpg" alt="">
                       </div>
                   
                        <div class="fw-bolder font1 pointer">
                            12+
                        </div>
                        
                        <div class="d-flex align-items-center pointer">
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="16"
                                viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                            </svg><span class="font1 ">15</span>

                        </div>
            


                        <div class="pointer" id="openModalBtn" onclick="ShowModalDisplayData( '${item.paragraph}')">
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="14"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
                            </svg>
                     <span  class="font1"> ${item?.attachment}</span>

                        </div>
                       
                        <div>
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="14"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                            </svg>
                         <span class="font1 calander-text">12-05-2023</span>   
                        </div>

                    </div>

                </div>`;
    });

    // Set the accumulated HTML content to the element
    allCardItem4.innerHTML = singelCard;
};


displayShow4()


//   ================== 05 Card section function ===============
const displayShow5 = () => {
   
    let singelCard = "";

   
    allCard.map((item, index) => {
        // Accumulate the HTML content for each item
        singelCard += `<div class="card p-2">
                    <div class="card-nav d-flex justify-content-between pt-1">
                        <div class="d-flex w-50 justify-content-start ">
                            <img class="avata-image" src="./image/1.jpg" alt="">
                            <p class=" px-2 ">Client Name</p>
                        </div>
                        <div class="d-flex w-50 justify-content-end ">
                            <img class="avata-image" src="./image/2.jpg" alt="">
                            <p class="px-2 ">Sadik Istiak </p>
                        </div>
                        
                    </div>
                    <!-- ---card text--- -->
                    <div class="card-text d-flex justify-content-between py-2">
                        <div class="d-flex w-75 justify-content-start ">
                       
                            <p class=""><svg class="pt-2" xmlns="http://www.w3.org/2000/svg" height="22" width="25"
                                viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
                            </svg><span class="px-1">Lorem ipsum dolor sit sir more...</span></p>
                        </div>
                        <div class="d-flex w-25 justify-content-end ">
                       
                            <p class=""> <svg class="pt-2" xmlns="http://www.w3.org/2000/svg" height="22" width="20"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                            </svg><span class="px-1 text-secondary fw-bolder">1/2</span> </p>
                        </div>
                    
                    </div>

                    <!-- ---- card untility ----- -->

                    <div class="
                    d-flex flex-row justify-content-around justify-content-center accordion
                    align-items-center
                    ">
                       <div class="d-flex  align-items-center">
                        <img class="avata-image" src="./image/2.jpg" alt="">
                        <img class="avata-image-sm mx-1" src="./image/1.jpg" alt="">
                        <img class="avata-image-round-sm" src="./image/3.jpg" alt="">
                       </div>
                   
                        <div class="fw-bolder font1 pointer">
                            12+
                        </div>
                        
                        <div class="d-flex align-items-center pointer">
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="16"
                                viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                            </svg><span class="font1 ">15</span>

                        </div>
            


                        <div class="pointer" id="openModalBtn" onclick="ShowModalDisplayData( '${item.paragraph}')">
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="14"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
                            </svg>
                     <span  class="font1"> ${item?.attachment}</span>

                        </div>
                       
                        <div>
                            <svg class="pt-1" xmlns="http://www.w3.org/2000/svg" height="18" width="14"
                                viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                                <path
                                    d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                            </svg>
                         <span class="font1 calander-text">12-05-2023</span>   
                        </div>

                    </div>

                </div>`;
    });

    // Set the accumulated HTML content to the element
    allCardItem5.innerHTML = singelCard;
};

displayShow5()








// ====================== modal functionility ===============
function ShowModalDisplayData(paragraph) {
  
    const modalTextElement = document.getElementById('modalText');
    
  
    modalTextElement.innerText = paragraph;

    // Display the modal
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    overlay.style.display = 'flex';
    modal.style.display = 'block';
}

// ======= open modal and close ====
const closeModalBtn = document.getElementById('closeModalBtn');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

// Function to close the modal
function closeModal() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
}

// Event listener for the close modal button
closeModalBtn.addEventListener('click', closeModal);


