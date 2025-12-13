
class HomePage{

    constructor(page){
        this.page = page
    }

    async openWebsite(){
         await page.goto('https://demoblaze.com/');
    
    }
} 
