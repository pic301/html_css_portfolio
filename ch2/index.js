let tabList = document.querySelectorAll('.tab-list')
Array.prototype.forEach.call(
    
    tabList, function(list){
        list.children[0].addEventListener('click',function(e){
           
            e.preventDefault()
            let tabContent = document.querySelectorAll('.content')
            let tabNum= this.parentElement.getAttribute('data-tabnum')
           
            Array.prototype.forEach.call(tabContent, function(cont, i){
                cont.style.display = 'none'
                tabList[i].className = 'tab-list'
            }) 
            tabContent[tabNum].style.display = 'inline-block'

            if(list.className.indexOf('tab-active') == -1){
                list.className = 'tab-list tab-active'
            }
            
        })
        
        
    }
)
