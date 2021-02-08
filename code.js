var sub = prompt("What Is Your favourite subject maths or science ?","maths or science");

    while(sub=="maths" && sub=="science")
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


        //today work(part2)
        var sub2 = prompt("What Is Your favourite subject maths or science ?","maths or science");
    while(sub2 !== "maths" && sub2 !== "science")
    {
        sub2 = prompt("What Is Your favourite subject maths or science ?","maths or science");
    }

    var imageofsub="";

    if(sub2=="maths")
    {
        imageofsub='<img src ="imagee/maths.jpg"/>';
    } else if (sub2=="science")
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


