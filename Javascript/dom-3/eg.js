
let mentors=[
    {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Vijay_Shekhar_Sharma_Paytm_96f52579b8.jpg", name:"Vijay Shankar", logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_rect_06df45a24f.svg"},

    {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Rectangle_427_637d69bb57.png", name:"Kunal Shah", logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/cred_0a47d7b4f8.png"},

    {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/amrish_rau_pine_labs_144e5e587c.jpg", name:"Amrish Rau", logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/pine_labs_0aa2407434.png"},

    {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Sampad_swain_Instamojo_f12bf6341e.jpg", name:"Sampad Swaim", logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/instamojo_8763e704f7.png"},
]

mentors.forEach(function(elem){ // we can also use for(i=0; i<=mentors.length; i++){} and mentors[i] will replace with elem

    let div=document.createElement("div");
    document.querySelector("#container").append(div)

    let image=document.createElement("img");
    image.setAttribute("src",elem.image);

    let iname=document.createElement("h3");
    iname.innerText=elem.name;

    let logo=document.createElement("img");
    logo.setAttribute("src",elem.logo);

    div.append(image,iname,logo);
})
