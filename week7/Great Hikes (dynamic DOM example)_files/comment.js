  
export class Comment{
    constructor(commentBody = "", type = "", contentName=""){
        this.commentBody = commentBody;
        this.type = type;
        this.date = this.getDate()
        this.contentName = contentName;
    }

    // https://www.w3schools.com/jsref/jsref_getdate.asp
    getDate() {
        // let d = Date.now();
        // let x = d.toString();

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        return date ;
    }
}

