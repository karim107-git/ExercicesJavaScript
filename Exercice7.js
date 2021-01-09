const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function ElementPlusFrequent(tab)
{
    let tailleTableau=tab.length;
    let max=0;
    let valeur=tab[0];
    for (let i=0;i<tailleTableau-1;i++)
    {
        let nbreOccurence=1;
        for(let j=i+1;j<tailleTableau;j++)
        {
            if (tab[i]==tab[j])
            {
                nbreOccurence++;
            }
        }
        if (nbreOccurence>max)
        {
            max=nbreOccurence;
            valeur=tab[i];
        }
    }
    console.log(valeur+" ("+max+" fois)");
}

ElementPlusFrequent(arr1); //a (5 fois)
