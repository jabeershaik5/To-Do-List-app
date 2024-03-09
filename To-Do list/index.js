
   
    function fetch(){
        const itemsFromStorage = JSON.parse(localStorage.getItem('items'));
        for(item of itemsFromStorage){
            createElement(item);
        }
    }
    function getItemsFromStorage(){
        let itemsFromLocalStorage = [];
        if(localStorage.getItem('items') === null){
            itemsFromLocalStorage = [];
        }
        else{
            itemsFromLocalStorage = JSON.parse(localStorage.getItem('items'));
        }
        return itemsFromLocalStorage;
    }
    function addToLocalStorage(item){
        let itemsFromLocalStorage = getItemsFromStorage();
        itemsFromLocalStorage.push(item); 
        localStorage.setItem('items', JSON.stringify(itemsFromLocalStorage));

    }
    function createElement(item){
        let app = document.getElementById('todolist');
        let ul = app.querySelector('ul'); 
        let li = document.createElement('li');
            li.classList ='bg-white px-2 py-2 rounded flex flex-row justify-between';
            li.innerHTML = 
                `${item}<button class="text-right delete" name=${item} type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                </button>`;
            ul.appendChild(li);
    }

    function onadding(item){
        let reset = document.getElementById('taskinput').value = ''; 
        if(item.trim()!=""){
            createElement(item);
            addToLocalStorage(item);
        }
    }  
    
    
    function remove(e){
        let target = e.target;
        let parent =Array.from(document.querySelector('.ul').querySelectorAll('li'));
        let itemToDelete = document.querySelector('.ul').querySelectorAll('li');
        let li = target.parentElement.parentElement.parentElement;
        for(item of itemToDelete){
            if(parent.length >=1 && li===item){
                item.remove();
                let itemsFromStorage = getItemsFromStorage();
                let toRemove = String(item.textContent.trim());  
                //removing from local storage 
                let newitemsFromStorage = itemsFromStorage.filter((value)=> value!=toRemove);
                localStorage.setItem('items', JSON.stringify(newitemsFromStorage));
             }
        }
    }
    function displayMenu(){
        const menubars = document.getElementById('bars').classList.toggle('hidden');
        const cross = document.getElementById('cross').classList.toggle('hidden');
        const content= document.getElementById('menubar').classList.toggle('hidden');   
    }

    
   function init(){
    let addbtn = document.getElementById('add');
    let deleting = document.querySelector('.ul');
    let menubtn= document.getElementById('menu');

    addbtn.addEventListener('click', () =>{
        let item = document.getElementById('taskinput').value; 
        onadding(item);
    });
    deleting.addEventListener('click', ()=>{
        remove(event);
    })
    addEventListener('DOMContentLoaded', ()=>{
        fetch();
    });
    menubtn.addEventListener('click',()=>{
        displayMenu();
    });
   }
    
init();   
    
   