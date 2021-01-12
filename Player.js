class Player{
    
    upadtePlayerCount(bowl1){
        database.ref('/').update({
            playerCount : bowl1
        });
        
      }



      gatPlayercount(){
        var goDataBase  = database.ref(" playerCount");
        goDataBase.on("value",function(data){
        playercountfreezer = data.val();
        })
       
      }
    
    
  

}