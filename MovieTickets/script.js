

$(function(){
    app = new Vue({
        el:"#VueApp",
        created: function(){
            this.loadMovies()                        
           },
            
        data: 
        {            
            topMovies:[],
            adultSubtotal: 0,
            childSubtotal: 0,  
            total: 0,          
            items: 
                [ {movie:0, childTickets:0, adultTickets:0},
                 {movie:1, childTickets:0, adultTickets:0},
                 {movie:2, childTickets:0, adultTickets:0},
                 {movie:3, childTickets:0, adultTickets:0},
                 {movie:4, childTickets:0, adultTickets:0}],          
                 
            
        }
        ,
        methods: {
            loadMovies: function(){                   
                $.ajax({
                     url:"https://api.themoviedb.org/3/discover/movie?api_key=182859b9f738cb8947e419768906f5f0&sort_by=popularity.desc",
                     datatype:'JSON',
                     success: response=> this.topMovies = response, 
                        
         
        }
        )
             },
             
            orderAdult(i){
                this.items[i].adultTickets++;
                this.adultSubtotal += 9;
                this.total +=9;                
                },
            orderChild(i){
                this.items[i].childTickets++;
                this.childSubtotal += 5;
                this.total += 5;                 
                },
            removeAdult(i){
                if(this.items[i].adultTickets >0)
                this.items[i].adultTickets--;
                this.adultSubtotal -= 9;  
                this.total -= 9;               
                },
            removeChild(i){
                if(this.items[i].childTickets >0)
                this.items[i].childTickets--;
                this.childSubtotal -=5;
                this.total -=5;                
                },
            removeAll(i){
                this.childSubtotal -=(this.items[i].childTickets*5);
                this.adultSubtotal -=(this.items[i].adultTickets*9);
                this.total -=((this.items[i].childTickets*5)+(this.items[i].adultTickets*9));
                this.items[i].childTickets = 0;
                this.items[i].adultTickets = 0
                
                },
            lineTotal(i){
                return(this.items[i].childTickets * 5)+(this.items[i].adultTickets * 9)
            },
            totalFunc(){
                this.total = (this.adultSubtotal)+(this.childSubtotal)
            }
            
    
        },


    })
} )



            