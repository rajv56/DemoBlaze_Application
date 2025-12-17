
class HomePage{

    constructor(page){
        this.page = page;
        this.closeIcon = page.loctor('#closeIcon');
    }

    async openWebsite(){
         await page.goto('https://demoblaze.com/');
        

    }

    
} 
