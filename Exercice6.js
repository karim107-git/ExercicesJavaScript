let tab=[5,8,0,-3,-9,4,17,54,-17,3,19,7];

function Premier_Or_N_ElementsTableau(tableau,n=0)
{
     if (n==0)
     {
        return tableau[0];
     }
     else
     {
         if (n>tableau.length)
         {
           n= tableau.length;
         }
         let tabRetourne=[];
         for (let i=0;i<n;i++)
         {
             tabRetourne.push(tableau[i]);
         }
         return  tabRetourne;
     }
}

console.log(Premier_Or_N_ElementsTableau(tab,2));  //Affiche [5,8,0,-3,-9,4,17]
console.log(Premier_Or_N_ElementsTableau(tab,4)); //Affiche [5,8,0,-3]
console.log(Premier_Or_N_ElementsTableau(tab)); //Affiche []
console.log(Premier_Or_N_ElementsTableau(tab,2)); //Affiche [5,8]

