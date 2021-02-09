var sub = prompt("What Is Your favourite subject maths or science ?","maths or science");

    while(sub !== "maths" && sub !== "science")
    {
        sub = prompt("What Is Your favourite subject maths or science ?","maths or science");
    }

        if(sub=="maths")
        {
            document.write("Your favourite subject is  " + sub + " you should study more!");
            document.write("<p>you entered maths </p>");
        
        } else if (sub=="science") {

            document.write("Your favourite subject   " + sub + " is a hardest!");
            document.write("<p>you entered science </p>");
            
        } else 
        {
            alert("Your favourite subject   " + sub + " is a nice!");
        }
        confirm("Press Ok to continue");


        //today work(part2)
        //today work(function)

    var sub3 = prompt("What Is Your favourite subject maths or science ?","maths or science");

    function subject ()
    {
        sub3 = prompt("Please enter maths or science ?","maths or science");
    }

    //var sub2 = prompt("What Is Your favourite subject maths or science ?","maths or science");
   
    while(sub3 !== "maths" && sub3 !== "science")
    {
        subject();

        //sub2 = prompt("What Is Your favourite subject maths or science ?","maths or science");

    }

    var imageofsub="";

    if(sub3=="maths")
    {
        imageofsub='<img src ="imagee/maths.jpg"/>';
    } else if (sub3=="science")
    {
        imageofsub='<img src ="imagee/science.jpg" />';
    }

    var numofstar=prompt("How do you rate the love of the subject");

    var star='   ';
    for(var i=0;i<numofstar;i++)
    {
        star=star+ imageofsub;

    }

        document.write(star); 