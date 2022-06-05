const number = parseInt(prompt('enter a number which you want to check'));
function findNthPrime(num1)
{
    var n = num1;
    var num = 1;
    var count = 0;
    
    while (count < n)
    {
        num = num+1;
        for (var i = 2; i <= num; i++)
        {
            if (num % i == 0)
            {
                break;
            }
        }
        if (i == num)
        {
            count = count+1;
        }
    }
    console.log("Your nth prime is: " + num);
}
findNthPrime(number);