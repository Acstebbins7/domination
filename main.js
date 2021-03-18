function lineThrough (){
    const unorderedItem = document.querySelector('#arguments li')
    unorderedItem.style.textDecoration = 'line-through'
}

lineThrough()

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function setImage (id, url){
    const image = document.querySelector(id)
    image.src = url
}

setImage ("#image-1", "https://www.istockphoto.com/resources/images/PhotoFTLP/Color_theme_Green-1279001772.jpg")
setImage ("#image-2", "https://www.istockphoto.com/resources/images/PhotoFTLP/Abstract-Backgrounds-1226241649.jpg")
setImage ("#image-3", "https://www.istockphoto.com/resources/images/PhotoFTLP/Essentials-522001912.jpg")

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function removesLastLi (){
    let unorderedItem2 =document.querySelector('ul')
    let last = unorderedItem2.lastChild;
    last.remove();
    last = unorderedItem2.lastChild;
    last.remove()
}

removesLastLi()
removesLastLi()

