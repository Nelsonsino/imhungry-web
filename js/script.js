var restArray = [
    {
        name: 'Zodiac Cafe',
        cuisine: 'Bistro',
        address: '110 2255 W 8th Vancouver',
        background: 'url(img/cafe.jpg)',
        url: 'https://www.zomato.com/canada'
    },
    {
        name: "Thai's Palace",
        cuisine: 'Thai',
        address: '110 2255 W 8th Vancouver',
        background: 'url(img/thai.jpg)',
        url: 'https://google.ca'
    },
    {
        name: "Amazon BBQ",
        cuisine: 'Brazilian',
        address: '3308 Ash St Vancouver',
        background: 'url(img/brazil.jpg)',
        url: 'https://www.webdxd.com'
    },
    {
        name: "Qilin Restaurant",
        cuisine: 'Chinese',
        address: '563 Union Vancouver',
        background: 'url(img/china.jpg)',
        url: 'https://google.ca'
    },
    {
        name: "Sam's Burger",
        cuisine: 'Burger',
        address: '106 588 45th Ave E Vancouver',
        background: 'url(img/burger.jpg)',
        url: 'https://google.ca'
    },
    {
        name: "Samuel's Buffet",
        cuisine: 'Buffet',
        address: '2485 Broadway W 414 Vancouver',
        background: 'url(img/buffet.jpg)',
        url: 'https://google.ca'        
    }
]

function addRest(restObj){
    var restDiv = $('<div>').addClass('restaurant')    
    var bgDiv = $('<div>')
    var content = $('<div>')
    var website = $('<a>')    

    $(website).css({
        'text-decoration': 'none',
        'color': 'white'
    })    

    $(restDiv).css({
        'position': 'relative',
        'width': '300px',
        'height': '350px',
        'margin': '5px'
    })

    $(bgDiv).css({
        'background-image': restObj.background,
        'filter': 'blur(1px) brightness(60%)',
        'position': 'absolute',
        'top': '0px',
        'right': '0px',
        'bottom': '0px',
        'left': '0px',
        'z-index': '1'
    })

    $(content).css({
        'position': 'relative',
        'z-index': '2',
        'display': 'flex',
        'height': '100%',
        'flex-wrap': 'wrap',
        'flex-direction': 'column',
        'align-content': 'center',
        'justify-content': 'center',
        'font-size': '1.2rem',
    })

    $('<h2>').text(restObj.name).appendTo(content)
    $('<p>').text(restObj.cuisine).appendTo(content)
    $('<p>').text(restObj.address).appendTo(content)    
    
    $(bgDiv).appendTo(restDiv)  
    $(content).appendTo(restDiv)
    $(restDiv).appendTo(website)
    $(website).attr('href', restObj.url)
    $(website).appendTo($('#restList'))
}

$(document).ready(function(){
    for(var i = 0; i < restArray.length; i++){
        addRest(restArray[i])
    }
})