document.addEventListener('DOMContentLoaded',()=> {
    //all code will be here
    const btnAdd = document.getElementById('btnAdd');
    const inputItem = document.getElementById('txtItem');
    const list = document.getElementById('itemList');

    //array of items
    let items = [
        {name:"Laptop",purchase:false},
        {name:"Speakers",purchase:true},
        {name:"MacBook",purchase:false}

    ];

    function renderList(){
        //clear the canvas
        list.innerHTML ="";

        //clear the input
        inputItem.value = "";

        items.forEach((item,index) => {
            //console.log(item,index);
            const li = document.createElement('li');
            li.innerHTML = `<span>${item.name}</span><button>Delete</button>`;
            console.log(li);
            list.appendChild(li);
        });
}

    //deleting items
    list.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON'){
            const index = Array.from(list.children).indexOf(e.target.parentElement);
            items.splice(index,1);
            renderList();
        }
    });

    //hook event add
    btnAdd.addEventListener('click',()=>{
        let item = inputItem.value;

        console.log(item);

        items.push({name:item,purchase:false});
        renderList();
    });

    renderList()
});