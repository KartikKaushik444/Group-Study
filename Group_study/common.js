 const Users = [
     {
         uname : "harsh",
         password: "harsh@123",
         Name: "Harsh Shukla",
         Branch: "B.Tech-CCVT",
         CollegeID: "500068287"
     },
     {
        uname : "kartik",
        password: "kartik@123",
        Name: "Kartik Kaushik",
        Branch: "B.Tech-CCVT",
        CollegeID: "500068526"
     }, 
     {
        uname : "chotan", 
        password: "chotan@123",
        Name: "Chotan Aggarwal",
        Branch: "B.Tech-CCVT",
        CollegeID: "500098652"
     } 
     ];
    
     
     const form  = document.getElementById("login");

     function myFunction() {
        
        var x = form.elements[0].value;
        var y = form.elements[1].value;
        let bool = false;
        for(let i of Users)
        {
            if(x == i.uname && y == i.password)
            {
                form.setAttribute('action', 'Group_study.html');
                bool = true;
                break;
            }
        }
        if(bool == false)
        {
            alert("Wrong username or password");
            form.setAttribute('action', 'login.html');
        }
      }