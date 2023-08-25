const checkInput = (name) =>{
   if(name === undefined){
   return "unknown" ;
   }
   if(name.startsWith("1")){
   name = name.substring(1) ;
   }

   if(name.startsWith(" ") || name.endsWith(" ")){
    name = name.trim()
   }
   return name ;
}

module.exports = checkInput ;