let friends = [{fname: 'Rachal', lname:"Green" ,id: 1, marks : 98 },
{fname: 'Ross',lname:"Geller" , id: 2, marks : 23 },
{fname: 'Monica ',lname:"Geller" , id: 3, marks : 75 },
{fname: 'Joey',lname:" Tribbiani" , id: 4, marks : 46 },
{fname: 'Chandler  ',lname:"Bing" , id: 5, marks : 78 },
{fname: 'Phoebe',lname:"Buffay" , id: 6, marks : 45 }]
//console.log(friends);
 var len = friends.length;

        for (var i = 0; i < len; i++) {
             text = "";
            var myObject = friends[i];
            
            for (var x in myObject) {
                if(x == 'fname' || x == 'lname'){
                text += (myObject[x] + " ");
                }
            }
          //  text += "<br/>";
          console.log(text);
        }

        