
let tab=[5,8,0,-3,-9,4,17,14,-17,3,19,7];
function SecondPlusPetitEtGrandNombre(tableau)
{
    let tailleTableau=tableau.length;

    for (let i=0;i<tailleTableau-1;i++)
    {
       for(let j=i+1;j<tailleTableau;j++)
       {
           if (tableau[i]>tableau[j])
           {
               let temp=tableau[j];
               tableau[j]=tableau[i];
               tableau[i]=temp;
           }
       }
    }

    console.log("Le deuxième plus petit nombre : "+tableau[1]);
    console.log("Le deuxième plus grand nombre : "+tableau[tailleTableau-2]);
}

SecondPlusPetitEtGrandNombre(tab);

// Le deuxième plus petit nombre : -9
// Le deuxième plus grand nombre : 17
