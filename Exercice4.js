function Verification(x,y)
{
    if (x==50 || y==50 || x+y==50)
    {
       return true;
    }
    else
    {
        return  false;
    }
}
console.log(Verification("f",50));  //true
console.log(Verification(2,40));    //false
console.log(Verification(50,0));    //true
console.log(Verification(24,26));   //true