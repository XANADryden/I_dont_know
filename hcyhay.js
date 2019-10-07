//function returnNeg(input){if(a<0){return -1;}else if(a>0){return 1;}else if(a==0){return  0;}throw("That's not a number stupid");}


class ConnectionList{
    constructor(connectionLiteral){
        this.literal=connectionLiteral;
        for(var h in connectionLiteral){
            this[h.name]=h;
        }
    }
    getConnections(){return(this.literal);}        // decide [this|this.literal] 
    getConnection(i){
        var c=0;
        if(i<0){throw("i, stop being so negative you worthless piece of shit");}
        if(i.toString.search(/\./)==true){throw("i can't have decimals");}
        for(var h in this.literal){
            if(c==i){return h;}
            if(c>i){throw("ya fucked up\nc is greater than i, dumbass");}
        }
    }

}


class Component{
    
    constructor(connections){
        this.connections=connections.getConnections();
    }
}
